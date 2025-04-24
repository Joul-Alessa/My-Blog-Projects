'use strict';

/**
 * ygg-false-cv-event controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::ygg-false-cv-event.ygg-false-cv-event', ({ strapi }) => ({
  async find(ctx){
    const { query } = ctx;

    const locale = query.locale === undefined ? 'en' : query.locale;

    const entity = await strapi.db.query('api::ygg-false-cv-event.ygg-false-cv-event').findMany({
      select: ['name', 'initial_date', 'end_date', 'description', 'slug', 'locale'],
      where: {
        locale,
        publishedAt: {
          $notNull: true
        }
      },
      populate: {
        ygg_false_cv_group: {
          select: ['id', 'name', 'is_formal', 'locale'],
        }
      },
      orderBy: [{ name: 'desc' }]
    });

    return this.transformResponse(entity);
  },
  async findBySlug(ctx){
    const { slug } = ctx.params;

    const { query } = ctx;

    const locale = query.locale === undefined ? 'en' : query.locale;

    const entity = await strapi.db.query('api::ygg-false-cv-event.ygg-false-cv-event').findOne({
      select: ['name', 'initial_date', 'end_date', 'description', 'slug', 'locale'],
      where: {
        slug,
        locale,
        publishedAt: {
          $notNull: true
        }
      },
      populate: {
        ygg_false_cv_group: {
          select: ['id', 'name', 'is_formal', 'locale'],
        }
      }
    });

    return this.transformResponse(entity);
  }
}));
