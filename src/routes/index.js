
const newsRouter = require('./news')
const siteRouter = require('./site')
const discountRouter = require('./discount')

function route(app) {
    
    app.use('/discount', discountRouter)
    
    app.use('/news', newsRouter)
    
    app.use('/', siteRouter)

}

module.exports = route
