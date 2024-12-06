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

function paginate(array, page, pageSize)
{
    if(page > Math.ceil(array.length / pageSize))
    {
        page = 1; // Aquí puedo decidir si mandar al men al inicio así o al final con Math.ceil(array.length / pageSize)
    }
    const result = array.slice((pageSize * (page - 1)), (pageSize * page));
    return {
        "data": result,
        "meta": {
            "page": page,
            "pageSize": pageSize,
            "totalPages": Math.ceil(array.length / pageSize)
        }

    };
}

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

        // Manejo personalizado de parámetro para realizar paginación
        var page = query.page != undefined
            ? query.page
            : "1";
        var pageSize = query.pageSize != undefined
            ? query.pageSize
            : videogames.length;

        if(query.randomSeed != undefined)
        {
            const shuffled = shuffleWithSeed(videogames, seed);
            return paginate(shuffled, page, pageSize);
        }
        return paginate(videogames, page, pageSize);
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
