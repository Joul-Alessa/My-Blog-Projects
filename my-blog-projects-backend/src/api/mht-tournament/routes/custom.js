module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/mht-tournaments',
      handler: 'mht-tournament.find',
      config: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/mht-tournaments/:slug',
      handler: 'mht-tournament.findBySlug',
      config: {
        auth: false
      }
    }
  ]
}