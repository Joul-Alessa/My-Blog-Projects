module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/mht-franchises',
      handler: 'mht-franchise.find',
      config: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/mht-franchises/:slug',
      handler: 'mht-franchise.findBySlug',
      config: {
        auth: false
      }
    }
  ]
}