module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/ygg-skills',
      handler: 'ygg-skill.find',
      config: {
        auth: false
      }
    }
  ]
}