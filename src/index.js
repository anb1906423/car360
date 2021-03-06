const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./routes')
// const { init } = require('express/lib/application')

// Xử lí file tĩnh
app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('combined'))

// template-engine
app.engine(
    '.handlebars',
    engine({
        extname: '.handlebars',
    }),
)
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources/views'))

// Route init
route(app)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))