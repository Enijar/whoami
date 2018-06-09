import config from "../../config";
import path from "path";
import {renderToString} from "react-dom/server";
import express from "express";
import AppController from "./Controllers/AppController";

const app = express();

app.use(express.static(path.resolve(__dirname, '..', '..', 'public')));

app.get('*', AppController);

app.listen(config.server.port, () => console.log(`Listening for incoming requests from port ${config.server.port}`));
