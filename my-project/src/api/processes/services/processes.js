'use strict';

/**
 * processes service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::processes.processes');
