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
const environment = require('./helpers/environments');
const data = require('./lib/data');
// app object - module scaffold
const app = {};

// test file system
// data.create('test', 'newFile', { name: 'Bangladesh', language: 'Bangla' }, (err) => {
//     console.log('Error was', err);
// });

// data.read('test', 'newFile', (err, data) => {
//     console.log(err, data);
// });

// data.update('test', 'newFile', { name: 'India', language: 'hindi' }, (err) => {
//     console.log('Error was', err);
// });

// data.delete('test', 'newFile', (err) => {
//     console.log(err);
// });
// create server
app.createserver = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`);
    });
};

// handle request response
app.handleReqRes = handleReqRes;

// start the server
app.createserver();
