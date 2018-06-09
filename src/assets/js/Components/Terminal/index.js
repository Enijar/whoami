import React, {Component, Fragment} from "react";
import commands from "./commands";

export default class Terminal extends Component {
    render() {
        return (
            <div className="Terminal">
                {this.props.children}
            </div>
        );
    }
}

export {commands};

Terminal.Command = props => (
    <span className="Terminal__command">
        <span>$</span>
        &nbsp;
        <span>{props.children}</span>
        {props.showCursor && (
            <Fragment>
                &nbsp;
                <span className="Cursor"/>
            </Fragment>
        )}
    </span>
);

Terminal.Output = props => (
    <div className="Terminal__output">
        {props.children}
    </div>
);
