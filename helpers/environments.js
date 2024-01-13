/* eslint-disable operator-linebreak */
/*
 *Title: Environments
 *Description: Handle all envitonment related things
 *Author: Tawsif Mahmud
 *Date: 30/12/2023
 *
 */

// module Scaffolding
const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'dhakfjgdjshgfjska',
    maxChecks: 5,
    twilio: {
        fromPhone: '+16592228136',
        accountSid: 'AC369d71f525610a2e4532567b73f0936e',
        authToken: '0ffd9a229168caa6089378a3b97b7907',
    },
};

environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: '7ewthjdvmdskhifuds',
    maxChecks: 5,
    twilio: {
        fromPhone: '+16592228136',
        accountSid: 'AC369d71f525610a2e4532567b73f0936e',
        authToken: '0ffd9a229168caa6089378a3b97b7907',
    },
};

// determine which env was passed
const currentEnv = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding env object
const environmentToExport =
    typeof environments[currentEnv] === 'object' ? environments[currentEnv] : environments.staging;

// export module
module.exports = environmentToExport;
