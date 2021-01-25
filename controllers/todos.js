const express = require("express")
const router = express.Router()
const Todo = require('../models/todo-model')


router.get('/', (req, res) => {
    console.log('here')
    const results = Todo.find({})
    results.then((tds) => {
        console.log(tds)
        res.render('todos/index', {todos:tds})
    })
    
})

router.get('/new', (req, res) => {
    res.render('todos/new')
})

router.post('/', (req, res) => {
    // res.send('received!')
    Todo.create(req.body)
        .then(todo => {
            res.redirect('/todos')
        })
        .catch(console.error)
})

router.get('/:id', (req, res) => {
    Todo.findById(req.params.id)
        .then( todo =>
            res.render('todos/show', todo)
        )
})

module.exports = router