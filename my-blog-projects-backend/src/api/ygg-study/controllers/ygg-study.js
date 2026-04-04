'use strict';

/**
 * ygg-study controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::ygg-study.ygg-study', ({ strapi }) => ({
  async find(ctx){
    const { query } = ctx;

    const locale = query.locale === undefined ? 'en' : query.locale;

    const entity = await strapi.db.query('api::ygg-study.ygg-study').findMany({
      select: ['school', 'study', 'slug', 'initial_date', 'end_date', 'description', 'order', 'locale', 'background_color'],
      where: {
        locale,
        publishedAt: {
          $notNull: true
        }
      },
      populate: {
        logo: {
          select: ['name', 'alternativeText', 'formats']
        }
      },
      orderBy: [{ order: 'desc' }]
    });

    const sanitizedEntity = await this.sanitizeOutput(entity);
    return this.transformResponse(sanitizedEntity);
  },
  async findBySlug(ctx){
    const { slug } = ctx.params;

    const { query } = ctx;

    const locale = query.locale === undefined ? 'en' : query.locale;

    const entity = await strapi.db.query('api::ygg-study.ygg-study').findOne({
      select: ['school', 'study', 'slug', 'initial_date', 'end_date', 'description', 'order', 'locale', 'background_color'],
      where: {
        slug,
        locale,
        publishedAt: {
          $notNull: true
        }
      },
      populate: {
        logo: {
          select: ['name', 'alternativeText', 'formats']
        }
      }
    });

    const sanitizedEntity = await this.sanitizeOutput(entity);
    return this.transformResponse(sanitizedEntity);
  }
}));
