module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/ygg-studies',
      handler: 'ygg-study.find',
      config: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/ygg-studies/:slug',
      handler: 'ygg-study.findBySlug',
      config: {
        auth: false
      }
    }
  ]
}