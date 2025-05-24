'use strict';

/**
 * mht-sport controller
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

module.exports = createCoreController('api::mht-sport.mht-sport', ({ strapi }) => ({
  async find(ctx){
    const { query } = ctx;

    const locale = query.locale === undefined ? 'en' : query.locale;
    const seed = parseInt(query.randomSeed || "0", 10);

    var filters = {
      select: ['name', 'description', 'slug', 'grade', 'locale', 'createdAt'],
      where: {
        locale,
        publishedAt: {
          $notNull: true
        }
      },
      populate: {
        mht_leagues: {
          select: ['name', 'description', 'slug', 'grade', 'locale', 'createdAt'],
          populate: {
            logo: {
              select: ['name', 'alternativeText', 'formats']
            }
          }
        },
        logo: {
          select: ['name', 'alternativeText', 'formats']
        }
      }
    };

    if(query.search != undefined)
    {
      filters.where.name = { $containsi: query.search };
    }

    if(query.exclude != undefined)
    {
      filters.where.slug = { $notContains: query.exclude };
    }

    if(query.orderBy == 'name-desc')
    {
      filters.orderBy = [{ name: 'desc' }];
    }
    if(query.orderBy == 'createdAtDate-asc')
    {
      filters.orderBy = [{ createdAt: 'asc' }];
    }
    if(query.orderBy == 'createdAtDate-desc')
    {
      filters.orderBy = [{ createdAt: 'desc' }];
    }
    if(query.orderBy == 'grade-asc')
    {
      filters.orderBy = [{ grade: 'asc' }];
    }
    if(query.orderBy == 'grade-desc')
    {
      filters.orderBy = [{ grade: 'desc' }];
    }
    if(query.orderBy != 'name-desc' && query.orderBy != 'createdAtDate-asc' && query.orderBy != 'createdAtDate-desc' && query.orderBy != 'grade-asc' && query.orderBy != 'grade-desc')
    {
      filters.orderBy = [{ name: 'asc' }];
    }

    const entity = await strapi.db.query('api::mht-sport.mht-sport').findMany(filters);

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

    const entity = await strapi.db.query('api::mht-sport.mht-sport').findOne({
      select: ['name', 'description', 'slug', 'grade', 'locale', 'createdAt'],
      where: {
        slug,
        locale,
        publishedAt: {
          $notNull: true
        }
      },
      populate: {
        mht_leagues: {
          select: ['name', 'description', 'slug', 'grade', 'locale', 'createdAt'],
          populate: {
            logo: {
              select: ['name', 'alternativeText', 'formats']
            }
          }
        },
        logo: {
          select: ['name', 'alternativeText', 'formats']
        }
      }
    });

    return this.transformResponse(entity);
  }
}));
