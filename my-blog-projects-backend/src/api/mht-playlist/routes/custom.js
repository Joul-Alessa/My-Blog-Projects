module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/mht-playlists',
      handler: 'mht-playlist.find',
      config: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/mht-playlists/:slug',
      handler: 'mht-playlist.findBySlug',
      config: {
        auth: false
      }
    }
  ]
}