import React from "react";
import {renderToString} from "react-dom/server";
import layout from "../layout";
import AppContainer from "../../assets/js/Containers/AppContainer";

export default (req, res) => {
    res.send(layout({
        body: renderToString(<AppContainer/>)
    }));
}
