'use strict';

/**
 * videogame-serie controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::videogame-serie.videogame-serie', ({strapi}) => ({
    async findOne(ctx) {
        const { slug } = ctx.params;

        const entity = await strapi.db.query('api::videogame-serie.videogame-serie').findOne({
            where: { slug }
        });

        const sanitizedEntity = await this.sanitizeOutput(entity);
        return this.transformResponse(sanitizedEntity);
    }
}));
