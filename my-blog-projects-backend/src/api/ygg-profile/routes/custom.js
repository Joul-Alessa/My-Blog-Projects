module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/ygg-profiles/:slug',
      handler: 'ygg-profile.findBySlug',
      config: {
        auth: false
      }
    }
  ]
}