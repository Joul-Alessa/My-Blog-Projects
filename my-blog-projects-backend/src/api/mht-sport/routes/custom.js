module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/mht-sports',
      handler: 'mht-sport.find',
      config: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/mht-sports/:slug',
      handler: 'mht-sport.findBySlug',
      config: {
        auth: false
      }
    }
  ]
}