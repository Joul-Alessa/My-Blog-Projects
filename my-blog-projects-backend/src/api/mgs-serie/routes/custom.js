module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/mgs-series',
      handler: 'mgs-serie.find',
      config: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/mgs-series/:slug',
      handler: 'mgs-serie.findBySlug',
      config: {
        auth: false
      }
    }
  ]
}