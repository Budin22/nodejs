const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const homeRouter = require('./routes/home');
const cardRouter = require('./routes/card');
const coursesRouter = require('./routes/courses')
const addRouter = require('./routes/add')

const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}))

app.use('/', homeRouter);
app.use('/courses', coursesRouter);
app.use('/add', addRouter);
app.use('/card', cardRouter);




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})