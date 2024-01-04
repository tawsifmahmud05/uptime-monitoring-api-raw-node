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
};

environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: '7ewthjdvmdskhifuds',
};

// determine which env was passed
const currentEnv = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding env object
const environmentToExport =
    typeof environments[currentEnv] === 'object' ? environments[currentEnv] : environments.staging;

// export module
module.exports = environmentToExport;
