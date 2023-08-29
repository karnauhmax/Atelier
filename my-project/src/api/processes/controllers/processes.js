'use strict';

/**
 * processes controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::processes.processes');
