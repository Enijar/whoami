import path from "path";
import React from "react";
import express from "express";
import config from "../../config";
import AppController from "./Controllers/AppController";

const app = express();

app.use(express.static(path.resolve(__dirname, '..', '..', 'public')));

app.get('*', AppController);

app.listen(config.server.port, () => console.log(`Listening for incoming requests from port ${config.server.port}`));
