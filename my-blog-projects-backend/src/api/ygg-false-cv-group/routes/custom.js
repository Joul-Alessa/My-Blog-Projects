module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/ygg-false-cv-groups',
      handler: 'ygg-false-cv-group.find',
      config: {
        auth: false
      }
    }
  ]
}