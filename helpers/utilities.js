/* eslint-disable operator-linebreak */
/*
 *Title: Utilities
 *Description: Important utilities function
 *Author: Tawsif Mahmud
 *Date: 30/12/2023
 *
 */

// Dependencies
const crypto = require('crypto');

const environments = require('./environments');
// module Scaffolding

const utilities = {};

// parse JSON string to Object
utilities.parseJSON = (jsonString) => {
    let output = {};

    try {
        output = JSON.parse(jsonString);
    } catch {
        output = {};
    }

    return output;
};

// Hashing
utilities.hash = (str) => {
    if (typeof str === 'string' && str.length > 0) {
        const hash = crypto.createHmac('sha256', environments.secretKey).update(str).digest('hex');
        return hash;
    }
    return false;
};

// Create random String
utilities.createRandomString = (strlength) => {
    let length = strlength;
    length = typeof strlength === 'number' && strlength > 0 ? strlength : false;
    if (length) {
        const possibleCharacters = 'abcdefghijklmnopqrstuvwxyz1234567890';
        let output = '';
        // eslint-disable-next-line no-plusplus
        for (let i = 1; i <= length; i++) {
            const randomCharacter = possibleCharacters.charAt(
                Math.floor(Math.random() * possibleCharacters.length)
            );
            output += randomCharacter;
        }
        return output;
    }
    return false;
};
// export module
module.exports = utilities;
