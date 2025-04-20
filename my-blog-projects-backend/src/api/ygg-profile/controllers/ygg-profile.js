'use strict';

/**
 * ygg-profile controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::ygg-profile.ygg-profile', ({ strapi }) => ({
  async findBySlug(ctx){
    const { slug } = ctx.params;

    const { query } = ctx;

    const locale = query.locale === undefined
      ? 'en'
      : query.locale;

    const entity = await strapi.db.query('api::ygg-profile.ygg-profile').findOne({
      select: ['name', 'slug', 'locale'],
      where: {
        slug,
        locale,
        publishedAt: {
          $notNull: true
        }
      }
    });

    const sanitizedEntity = await this.sanitizeOutput(entity);
    return this.transformResponse(sanitizedEntity);
  }
}));
