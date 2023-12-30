/*
 *Title: Not Found Handler
 *Description: 404 not found Handler
 *Date: 30/12/2023
 *
 */
// module Scaffoling
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    console.log('Not Found');
    callback(404, {
        message: 'Ypur request URL was not found',
    });
};

module.exports = handler;
