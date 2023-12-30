/*
 *Title: Sample Handler
 *Description: Sample Handler
 *Date: 30/12/2023
 *
 */
// module Scaffoling
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(200, {
        message: 'this is a sample url',
    });
};

module.exports = handler;
