/*
 *Title: Project Initial File
 *Description: Initial file to starts node server and workers
 *Author: Tawsif Mahmud
 *Date: 13/01/2024
 *
 */
// dependecies

const server = require('./lib/server');
const workers = require('./lib/worker');

// app object - module scaffold
const app = {};

app.init = () => {
    // start the server
    server.init();

    // start the workers
    workers.init();
};

app.init();

module.exports = app;
