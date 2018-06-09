import React from "react";

export default props => (
    <div className="Terminal">
        <span>$</span>
        &nbsp;
        <span className="Terminal__command">{props.children}</span>
        &nbsp;
        <span className="Cursor"/>
    </div>
);
