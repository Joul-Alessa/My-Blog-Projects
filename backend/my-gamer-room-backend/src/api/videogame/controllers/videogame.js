'use strict';

/**
 * videogame controller
 */

// Generación de semilla aleatoria para mezclar los objetos
const seedRandom = (seed) => {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
};

const shuffleWithSeed = (array, seed) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(seedRandom(seed + i) * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::videogame.videogame', ({strapi}) => ({
    async find(ctx) {
        const { query } = ctx;
        const seed = parseInt(query.randomSeed || "0", 10);

        // Manejo de parámetro sort ya soportado
        const sort = query.sort
            ? query.sort.split(',').map((field) => {
                const [key, order] = field.split(':');
                return { [key]: order || 'asc' };
            })
            : undefined;

        const videogames = await strapi.entityService.findMany('api::videogame.videogame', {
            ...query,
            populate: { videogames_series: true },
            orderBy: sort
        });

        if(query.randomSeed != undefined)
        {
            const shuffled = shuffleWithSeed(videogames, seed);
            return shuffled;
        }
        return videogames;
    },
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
