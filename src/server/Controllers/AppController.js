import React from "react";
import {StaticRouter} from "react-router";
import {renderToString} from "react-dom/server";
import layout from "../layout";
import AppContainer from "../../assets/js/Containers/AppContainer";

export default (req, res) => {
    const context = {};

    const html = layout({
        body: renderToString(
            <StaticRouter location={req.url} context={context}>
                <AppContainer/>
            </StaticRouter>
        )
    });

    if (context.url) {
        res.writeHead(302, {Location: context.url});
        res.end();
        return;
    }

    res.write(html);
    res.end();
}
