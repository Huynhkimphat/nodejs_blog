const path = require('path');
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
const handlebars = require('express-handlebars');
app.use(morgan('combined'))

app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));



app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})