module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/ygg-false-cv-events',
      handler: 'ygg-false-cv-event.find',
      config: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/ygg-false-cv-events/:slug',
      handler: 'ygg-false-cv-event.findBySlug',
      config: {
        auth: false
      }
    }
  ]
}