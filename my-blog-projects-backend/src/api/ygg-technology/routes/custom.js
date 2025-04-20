module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/ygg-technologies',
      handler: 'ygg-technology.find',
      config: {
        auth: false
      }
    }
  ]
}