/*
 *Title: Handle Request Response
 *Description: Handle Request Response
 *Author: Tawsif Mahmud
 *Date: 28/12/2023
 *
 */

// dependecies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');

const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler');
// module Scaffold
const handler = {};

handler.handleReqRes = (req, res) => {
    // request handling
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedpath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    const requestProperties = {
        parsedUrl,
        path,
        trimmedpath,
        method,
        queryStringObject,
        headersObject,
    };
    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const chosenHandler = routes[trimmedpath] ? routes[trimmedpath] : notFoundHandler;

    chosenHandler(requestProperties, (statusCode, payload) => {
        statusCode = typeof statusCode === 'number' ? statusCode : 500;
        payload = typeof payload === 'object' ? payload : {};

        const payloadString = JSON.stringify(payload);

        res.writeHead(statusCode);
        res.end(payloadString);
    });
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });
    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        // response handling
        res.end('Hello Worlds');
    });
};

module.exports = handler;
