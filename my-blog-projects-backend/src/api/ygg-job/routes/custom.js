module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/ygg-jobs',
      handler: 'ygg-job.find',
      config: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/ygg-jobs/:slug',
      handler: 'ygg-job.findBySlug',
      config: {
        auth: false
      }
    }
  ]
}