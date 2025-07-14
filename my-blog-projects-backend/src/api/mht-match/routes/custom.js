module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/mht-matches',
      handler: 'mht-match.find',
      config: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/mht-matches/:slug',
      handler: 'mht-match.findBySlug',
      config: {
        auth: false
      }
    }
  ]
}