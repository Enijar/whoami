import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
import BlogPage from "../Pages/BlogPage";

export default () => (
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/contact" component={ContactPage}/>
        <Route exact path="/blog" component={BlogPage}/>

        <Route>
            <Redirect to="/"/>
        </Route>
    </Switch>
);
