import React, {Component} from "react";
import TypedText from "../Components/TypedText";
import Terminal from "../Components/Terminal";

export default class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <h1>James</h1>

                <Terminal>
                    <TypedText text="whoami" onComplete={() => console.log('Done')}/>
                </Terminal>
            </div>
        );
    }
}
