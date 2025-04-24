'use strict';

/**
 * ygg-false-cv-group controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::ygg-false-cv-group.ygg-false-cv-group', ({ strapi }) => ({
  async find(ctx){
    const { query } = ctx;

    const locale = query.locale === undefined ? 'en' : query.locale;

    const entity = await strapi.db.query('api::ygg-false-cv-group.ygg-false-cv-group').findMany({
      select: ['id', 'name', 'is_formal', 'locale'],
      where: {
        locale,
        publishedAt: {
          $notNull: true
        }
      },
      orderBy: [{ name: 'asc' }]
    });

    return this.transformResponse(entity);
  }
}));
