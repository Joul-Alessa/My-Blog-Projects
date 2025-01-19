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

        const populate = query.populate 
            ? query.populate === '*'
                ? query.populate
                : [query.populate]
            : [];

        const seed = parseInt(query.randomSeed || "0", 10);

        // Manejo de parámetro sort ya soportado
        const sort = query.sort
            ? query.sort.split(',').map((field) => {
                const [key, order] = field.split(':');
                return { [key]: order || 'asc' };
            })
            : undefined;
        
        // Manejo de parámetro locale ya soportado
        const locale = query.locale === "es"
            ? "es-419"
            : "en";

        var videogames = await strapi.entityService.findMany('api::videogame.videogame', {
            populate,
            locale,
            orderBy: sort
        });

        // Manejo personalizado de parámetro exclude para no regresar una entrada específica
        var exclude = query.exclude;
        if(exclude != undefined)
        {
            videogames = videogames.filter(object => object.slug !== exclude);
        }

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

        var entity = await strapi.db.query('api::videogame.videogame').findOne({
            where: { slug },
            populate
        });

        if (!entity) {
            return ctx.notFound('Videogame not found');
        }

        // Validación cuando se popula para traer las series (sólo entonces se hace lógica de paginación, shuffle y exclude para series)
        if(populate == true || populate.length > 0)
        {
            // Manejo personalizado de parámetro serieSort para realizar orden
            const serieSort = query.serieSort; // Opciones: asc, desc o números para la random seed. Si no se envía ninguno por defecto: asc
            var series = entity.videogame_series;
            if(serieSort == undefined || serieSort === 'asc' || (serieSort != 'desc' && isNaN(serieSort)))
            {
                series = series.sort((a, b) => {
                    if(a.name < b.name)
                    {
                        return -1;
                    }
                    if(a.name > b.name)
                    {
                        return 1;
                    }
                    return 0
                });
            }

            if(serieSort === 'desc')
            {
                series = series.sort((a, b) => {
                    if(a.name > b.name)
                    {
                        return -1;
                    }
                    if(a.name < b.name)
                    {
                        return 1;
                    }
                    return 0
                });
            }

            if(!isNaN(serieSort))
            {
                series = shuffleWithSeed(series, serieSort);
            }

            // Manejo personalizado de parámetro serieExclude para excluir un campo
            var serieExclude = query.serieExclude;
            if(serieExclude != undefined)
            {
                series = series.filter(object => object.slug !== serieExclude);
            }

            // Manejo personalizado de parámetro seriePage y seriePageSize para realizar paginación
            var seriePage = query.seriePage != undefined
                ? query.seriePage
                : "1";
            var seriePageSize = query.seriePageSize != undefined
                ? query.seriePageSize
                : series.length;
            
            entity.videogame_series = paginate(series, seriePage, seriePageSize);
        }

        return entity;
    }
}));
