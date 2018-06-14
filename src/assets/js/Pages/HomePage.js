import React, {Component, Fragment} from "react";
import TypedText from "../Components/TypedText";
import Terminal, {commands} from "../Components/Terminal/index";

export default class HomePage extends Component {
    state = {
        commands: [
            {
                id: 'whoami',
                text: 'whoami',
                execute: true,
                complete: false
            },
            {
                id: 'skills',
                text: 'skills',
                delay: 1000,
                execute: false,
                complete: false
            },
            {
                id: 'default',
                text: '',
                execute: false,
                complete: false
            }
        ]
    };

    command(index) {
        const {commands} = this.state;
        commands[index].complete = true;
        commands[Math.min(index + 1, commands.length - 1)].execute = true;
        this.setState({commands});
    }

    render() {
        return (
            <div className="HomePage">
                <h1>whoami?</h1>

                <p>
                    Organised, creative and methodical person who works through creative and logical problems with often
                    creative solutions to both mundane and complex problems.
                </p>

                <p>
                    A hybrid that crosses the chasm between the arts and technology with creative thoughts and
                    practices.
                </p>

                <p>
                    "I'm a designer, programmer and everything in-between. Websites and web apps are where I express my
                    creativity and ingenuity. There is no better playground for visual expression and logical problem
                    solving than the Internet. Thank you Tim Berners-Lee" - James Craig.
                </p>

                <Terminal>
                    {this.state.commands.map((command, index) => (
                        <Fragment key={command.id}>
                            {command.execute && (
                                <Terminal.Command showCursor={(
                                    !command.complete || command.complete && index === this.state.commands.length - 1
                                )}>
                                    <TypedText
                                        delay={command.delay}
                                        text={command.text}
                                        onComplete={() => this.command(index)}
                                    />
                                </Terminal.Command>
                            )}
                            <Terminal.Output>
                                {command.complete && commands[command.id] && commands[command.id]()}
                            </Terminal.Output>
                        </Fragment>
                    ))}
                </Terminal>
            </div>
        );
    }
}
