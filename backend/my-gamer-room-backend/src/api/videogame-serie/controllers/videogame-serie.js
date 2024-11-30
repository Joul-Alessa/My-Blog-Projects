'use strict';

/**
 * videogame-serie controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::videogame-serie.videogame-serie', ({strapi}) => ({
    async findOne(ctx) {
        const { slug } = ctx.params;

        const { query } = ctx;

        const populate = query.populate 
            ? query.populate === '*'
              ? true
              : [query.populate]
            : [];

        const entity = await strapi.db.query('api::videogame-serie.videogame-serie').findOne({
            where: { slug },
            populate
        });

        if (!entity) {
            return ctx.notFound('Videogame series not found');
        }

        return entity;
    }
}));
