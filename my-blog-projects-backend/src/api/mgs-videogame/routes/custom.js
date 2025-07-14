module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/mgs-videogames',
      handler: 'mgs-videogame.find',
      config: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/mgs-videogames/:slug',
      handler: 'mgs-videogame.findBySlug',
      config: {
        auth: false
      }
    }
  ]
}