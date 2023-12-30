/*
 *Title: Routes
 *Description: Application Routes
 *Author: Tawsif Mahmud
 *Date: 30/12/2023
 *
 */
// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');

const routes = {
    sample: sampleHandler,
};
module.exports = routes;
