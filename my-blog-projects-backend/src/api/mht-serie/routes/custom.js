module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/mht-series',
      handler: 'mht-serie.find',
      config: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/mht-series/:slug',
      handler: 'mht-serie.findBySlug',
      config: {
        auth: false
      }
    }
  ]
}