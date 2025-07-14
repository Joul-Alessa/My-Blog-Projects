'use strict';

/**
 * ygg-skill controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::ygg-skill.ygg-skill', ({ strapi }) => ({
  async find(ctx){
    const { query } = ctx;

    const locale = query.locale === undefined ? 'en' : query.locale;

    const profile = query.profile;

    var filters = {
      select: ['documentId', 'name'],
      where: {
        locale
      },
      populate: {
        ygg_profiles: {
          select: ['slug']
        }
      },
      orderBy: [{ name: 'asc' }]
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

    if(query.publishState == 'draft')
    {
      filters.where.publishedAt = { $null: true };
    }
    if(query.publishState != 'draftNotPublished' && query.publishState != 'draft' && query.publishState != 'all')
    {
      filters.where.publishedAt = { $notNull: true };
    }

    var entity = await strapi.db.query('api::ygg-skill.ygg-skill').findMany(filters);

    var entityIdCounts = entity.reduce((acc, item) => {
      acc[item.documentId] = (acc[item.documentId] || 0) + 1;
      return acc;
    }, {});

    if(query.publishState == 'draftNotPublished')
    {
      entity = entity.filter(item => entityIdCounts[item.documentId] === 1);
    }

    entity.forEach(obj => delete obj.documentId);

    return this.transformResponse(entity);
  }
}));
