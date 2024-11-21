'use strict';

/**
 * videogame controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::videogame.videogame', ({strapi}) => ({
    async findOne(ctx) {
        const { slug } = ctx.params;

        const entity = await strapi.db.query('api::videogame.videogame').findOne({
            where: { slug }
        });

        const sanitizedEntity = await this.sanitizeOutput(entity);
        return this.transformResponse(sanitizedEntity);
    }
}));
