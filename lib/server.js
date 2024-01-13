/*
 *Title: Server library
 *Description: server related files
 *Author: Tawsif Mahmud
 *Date: 13/01/2024
 *
 */
// dependecies
const http = require('http');
const { handleReqRes } = require('../helpers/handleReqRes');
const environment = require('../helpers/environments');

// app object - module scaffold
const server = {};

// create server
server.createserver = () => {
    const serverVariable = http.createServer(server.handleReqRes);
    serverVariable.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`);
    });
};

// handle request response
server.handleReqRes = handleReqRes;

server.init = () => {
    // start the server
    server.createserver();
};

module.exports = server;
