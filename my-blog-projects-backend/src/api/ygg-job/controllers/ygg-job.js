'use strict';

/**
 * ygg-job controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::ygg-job.ygg-job', ({ strapi }) => ({
  async find(ctx){
    const { query } = ctx;

    const locale = query.locale === undefined ? 'en' : query.locale;

    const entity = await strapi.db.query('api::ygg-job.ygg-job').findMany({
      select: ['workplace', 'position', 'slug', 'initial_date', 'end_date', 'description', 'order', 'locale'],
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
    });

    return this.transformResponse(entity);
  },
  async findBySlug(ctx){
    const { slug } = ctx.params;

    const { query } = ctx;

    const locale = query.locale === undefined ? 'en' : query.locale;

    const entity = await strapi.db.query('api::ygg-job.ygg-job').findOne({
      select: ['workplace', 'position', 'slug', 'initial_date', 'end_date', 'description', 'order', 'locale'],
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
