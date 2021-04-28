const express = require('express');
const exphbs= require('express-handlebars')
const app = express();
const PORT = process.env.PORT || 5000;


app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

const ideas = [
    {
        id: 1,
        title: 'idea 1',
        description: 'idea 1 description',
        allowComments: true,
        status: 'public'
    },
    {
        id: 2,
        title: 'idea 2',
        description: 'idea 2 description',
        allowComments: false,
        status: 'private'
    },
    {
        id: 3,
        title: 'idea 3',
        description: 'idea 3 description',
        allowComments: true,
        status: 'public'
    },
    {
        id: 4,
        title: 'idea 4',
        description: 'idea 4 description',
        allowComments: true,
        status: 'public'
    },

]

// all idea show route
app.get('/ideas', function (req, res) {
    res.render('ideas/index',{
        ideas
    });
});

// new idea add  route
app.get('/ideas/new',(req,res) => {
  
    res.render('ideas/new');
})

// single idea show route
app.get('/ideas/:id', function (req, res) {
    const ideaId = Number.parseInt(req.params.id);
    let idea = ideas.find(idea =>idea.id === ideaId)
    if (idea) {
        res.render('ideas/show',{
            idea
        })
    }
    else {
        res.render('notFound')
    }
});



app.get('/about', function (req, res) {
    res.render('about');
});
app.get('/', function (req, res) {
    res.render('home');
});



app.listen(PORT, () => {
    console.log(`server is running on ${PORT} port`);
})