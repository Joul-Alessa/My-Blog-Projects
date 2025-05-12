module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/mht-chapters',
      handler: 'mht-chapter.find',
      config: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/mht-chapters/:slug',
      handler: 'mht-chapter.findBySlug',
      config: {
        auth: false
      }
    }
  ]
}