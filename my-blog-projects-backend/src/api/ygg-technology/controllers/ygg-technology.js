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

    var entity = await strapi.db.query('api::ygg-technology.ygg-technology').findMany({
      select: ['name', 'background_color', 'font_color', 'is_enabled'],
      where: {
        publishedAt: {
          $notNull: true
        },
        ygg_profiles: {
          slug: {
            $eq: profile
          }
        }
      },
      populate: {
        ygg_profiles: {
          select: ['slug'],
          where: {
            slug: {
              $eq: profile
            }
          }
        }
      },
      orderBy: [{ name: 'asc' }]
    });

    if(entity.length == 0){
      entity = await strapi.db.query('api::ygg-technology.ygg-technology').findMany({
        select: ['name', 'background_color', 'font_color', 'is_enabled'],
        where: {
          publishedAt: {
            $notNull: true
          },
        },
        populate: {
          ygg_profiles: {
            select: ['slug']
          }
        },
        orderBy: [{ name: 'asc' }]
      });
    }

    if(isEnabled === 'true'){
      entity = entity.filter(element => element.is_enabled === 'true');
    }

    return this.transformResponse(entity);

    // const sanitizedEntity = await this.sanitizeOutput(entity);
    // return this.transformResponse(sanitizedEntity);
  }
}));
