module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/ygg-projects',
      handler: 'ygg-project.find',
      config: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/ygg-projects/:slug',
      handler: 'ygg-project.findBySlug',
      config: {
        auth: false
      }
    }
  ]
}