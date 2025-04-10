module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/videogame-series/:slug',
            handler: 'videogame-serie.findOne',
            config: {
                auth: false
            }
        }
    ]
}