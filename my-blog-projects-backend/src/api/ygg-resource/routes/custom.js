module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/ygg-resources',
      handler: 'ygg-resource.find',
      config: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/ygg-resources/:slug',
      handler: 'ygg-resource.findBySlug',
      config: {
        auth: false
      }
    }
  ]
}