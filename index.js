const express = require('express');
const exphbs= require('express-handlebars')
const app = express();
const PORT = process.env.PORT || 5000;


app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/', function (req, res) {
    res.render('home');
});



app.listen(PORT, () => {
    console.log(`server is running on ${PORT} port`);
})