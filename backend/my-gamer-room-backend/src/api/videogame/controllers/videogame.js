'use strict';

/**
 * videogame controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::videogame.videogame', ({strapi}) => ({
    async findOne(ctx) {
        const { slug } = ctx.params;

        const { query } = ctx;

        const populate = query.populate 
            ? query.populate === '*'
              ? true
              : [query.populate]
            : [];

        const entity = await strapi.db.query('api::videogame.videogame').findOne({
            where: { slug },
            populate
        });
        
        console.log({
            where: { slug },
            populate
        });

        if (!entity) {
            return ctx.notFound('Videogame not found');
        }

        return entity;
    }
}));
