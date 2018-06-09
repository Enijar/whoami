import React from "react";
import {hydrate} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import AppContainer from "./Containers/AppContainer";

hydrate(
    <BrowserRouter>
        <AppContainer/>
    </BrowserRouter>,
    document.querySelector('#root')
);
