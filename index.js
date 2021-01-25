const express = require("express")

const app = express()

app.set('view engine', 'hbs')

// routes -----
const Todo = require('./models/todo-model')



// routes --------

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})

app.get('/', (req, res) => {
    res.render('home', {foo:'bar'})
})

app.get('/todos/', (req, res) => {
    console.log('here')
    const results = Todo.find({})
    results.then((tds) => {
        console.log(tds)
        res.render('todos/index', {todos:tds})
    })
    
})

app.get('/todos/:id', (req, res) => {
    Todo.findById(req.params.id)
        .then( todo =>
            res.render('todos/show', todo)
        )
})
