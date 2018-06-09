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
                <h1>Home</h1>

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
