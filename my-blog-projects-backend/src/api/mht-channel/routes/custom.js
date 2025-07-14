module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/mht-channels',
      handler: 'mht-channel.find',
      config: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/mht-channels/:slug',
      handler: 'mht-channel.findBySlug',
      config: {
        auth: false
      }
    }
  ]
}