module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/mht-seasons',
      handler: 'mht-season.find',
      config: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/mht-seasons/:slug',
      handler: 'mht-season.findBySlug',
      config: {
        auth: false
      }
    }
  ]
}