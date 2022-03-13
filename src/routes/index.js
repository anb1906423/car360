
const siteRouter = require('./site')
const discountRouter = require('./discount')
const introRouter = require('./intro')

function route(app) {
    
    app.use('/discount', discountRouter)

    app.use('/intro', introRouter)
        
    app.use('/', siteRouter)

}

module.exports = route
