/*
 *Title: Uptime Minotoring Application
 *Description: A RESTFul API to minotor up or down time of user defined links
 *Author: Tawsif Mahmud
 *Date: 28/12/2023
 *
 */
// dependecies
const http = require('http');

const { handleReqRes } = require('./helpers/handleReqRes');
// app object - module scaffold
const app = {};

// configuration
app.config = {
    port: 3000,
};

// create server
app.createserver = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`);
    });
};

// handle request response
app.handleReqRes = handleReqRes;

// start the server
app.createserver();
