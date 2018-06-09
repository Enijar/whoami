import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class ContactPage extends Component {
    render() {
        return (
            <div className="ContactPage">
                <h1>Contact Page</h1>

                <Link to="/">Home</Link>
            </div>
        );
    }
}
