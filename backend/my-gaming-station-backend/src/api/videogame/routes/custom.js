module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/videogames',
            handler: 'videogame.find',
            config: {
                auth: false
            }
        },
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