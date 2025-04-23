'use strict';

/**
 * ygg-project controller
 */

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

module.exports = createCoreController('api::ygg-project.ygg-project', ({ strapi }) => ({
  async find(ctx){
    const { query } = ctx;

    const locale = query.locale === undefined ? 'en' : query.locale;
    const profile = query.profile;

    const projectType = query.projectType;

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

    if(projectType == 'collaboration' || projectType == 'contribution' || projectType == 'product' || projectType == 'learning' || projectType == 'personal')
    {
      filters.where.project_type = { $eq: projectType };
    }
    if(projectType == 'knowMe' || projectType == 'notKnowMe')
    {
      filters.where.project_type = { $eq: 'personal' };
      filters.where.know_me_better_project = { $eq: projectType == 'knowMe' ? true : false };
    }

    const entity = await strapi.db.query('api::ygg-project.ygg-project').findMany(filters);

    var page = query.page != undefined ? query.page : "1";
    var pageSize = query.pageSize != undefined ? query.pageSize : entity.length;
    return paginate(entity, page, pageSize);
  },
  async findBySlug(ctx){
    const { slug } = ctx.params;

    const { query } = ctx;

    const locale = query.locale === undefined ? 'en' : query.locale;

    const entity = await strapi.db.query('api::ygg-project.ygg-project').findOne({
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
