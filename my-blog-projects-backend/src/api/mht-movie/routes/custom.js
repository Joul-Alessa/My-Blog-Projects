module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/mht-movies',
      handler: 'mht-movie.find',
      config: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/mht-movies/:slug',
      handler: 'mht-movie.findBySlug',
      config: {
        auth: false
      }
    }
  ]
}