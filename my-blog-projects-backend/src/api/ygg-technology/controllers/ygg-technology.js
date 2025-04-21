'use strict';

/**
 * ygg-technology controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::ygg-technology.ygg-technology', ({ strapi }) => ({
  async find(ctx){
    const { slug } = ctx.params;

    const { query } = ctx;

    const profile = query.profile;
    const isEnabled = query.isEnabled;

    var filters = {
      select: ['documentId', 'name', 'background_color', 'font_color'],
      where: {},
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

    var entity = await strapi.db.query('api::ygg-technology.ygg-technology').findMany(filters);

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
