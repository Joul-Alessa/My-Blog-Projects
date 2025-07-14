module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/mht-videos',
      handler: 'mht-video.find',
      config: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/mht-videos/:slug',
      handler: 'mht-video.findBySlug',
      config: {
        auth: false
      }
    }
  ]
}