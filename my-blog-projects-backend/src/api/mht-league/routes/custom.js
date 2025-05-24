module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/mht-leagues',
      handler: 'mht-league.find',
      config: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/mht-leagues/:slug',
      handler: 'mht-league.findBySlug',
      config: {
        auth: false
      }
    }
  ]
}