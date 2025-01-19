module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/videogames/:slug',
            handler: 'videogame.findOne',
            config: {
                auth: false
            }
        }
    ]
}