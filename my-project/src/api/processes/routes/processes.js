'use strict';

/**
 * processes router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::processes.processes');
