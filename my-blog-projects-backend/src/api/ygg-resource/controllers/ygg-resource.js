'use strict';

/**
 * ygg-resource controller
 */

// Funciones para mezclado
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

// Función para paginación
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

module.exports = createCoreController('api::ygg-resource.ygg-resource', ({ strapi }) => ({
  async find(ctx){
    const { query } = ctx;

    const locale = query.locale === undefined ? 'en' : query.locale;
    const profile = query.profile;
    const seed = parseInt(query.randomSeed || "0", 10);

    var filters = {
      select: ['name', 'review', 'url', 'locale', 'slug'],
      where: {
        locale,
        publishedAt: {
          $notNull: true
        }
      },
      populate: {
        ygg_technologies: {
          select: ['name', 'background_color', 'font_color']
        },
        ygg_skills: {
          select: ['name', 'skill_type', 'locale']
        },
        ygg_profiles: {
          select: ['name', 'slug', 'locale']
        },
        logo: {
          select: ['name', 'alternativeText', 'formats']
        }
      },
      orderBy: [{ order: 'desc' }]
    };

    if(profile != undefined)
    {
      filters.where.ygg_profiles = {
        slug: {
          $eq: profile
        }
      };
      filters.populate.ygg_profiles.where = {
        slug: {
          $eq: profile
        }
      };
    }

    const entity = await strapi.db.query('api::ygg-resource.ygg-resource').findMany(filters);

    var page = query.page != undefined ? query.page : "1";
    var pageSize = query.pageSize != undefined ? query.pageSize : entity.length;

    if(query.randomSeed != undefined)
    {
        const shuffled = shuffleWithSeed(entity, seed);
        return paginate(shuffled, page, pageSize);
    }
    return paginate(entity, page, pageSize);
  },
  async findBySlug(ctx){
    const { slug } = ctx.params;

    const { query } = ctx;

    const locale = query.locale === undefined ? 'en' : query.locale;

    const entity = await strapi.db.query('api::ygg-resource.ygg-resource').findOne({
      select: ['name', 'review', 'description', 'url', 'locale', 'slug'],
      where: {
        slug,
        locale,
        publishedAt: {
          $notNull: true
        }
      },
      populate: {
        ygg_technologies: {
          select: ['name', 'background_color', 'font_color']
        },
        ygg_skills: {
          select: ['name', 'skill_type', 'locale']
        },
        ygg_profiles: {
          select: ['name', 'slug', 'locale']
        },
        logo: {
          select: ['name', 'alternativeText', 'formats']
        }
      }
    });

    return this.transformResponse(entity);
  }
}));
