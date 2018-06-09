import React, {Component} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ContactPage from "../Pages/ContactPage";

export default class AppContainer extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/contact" component={ContactPage}/>

                <Route>
                    <Redirect to="/"/>
                </Route>
            </Switch>
        );
    }
}
