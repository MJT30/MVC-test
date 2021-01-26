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

router.get('/:id/edit', (req, res) => {
    const id = req.params.id
    Todo.findById(id)
        .then(todo => {
            res.render('todos/edit', todo)
        })
        .catch(console.error)
})

router.post('/', (req, res) => {
    // res.send('received!')
    console.log('in post')
    Todo.create(req.body)
        .then(todo => {
            res.redirect('/todos')
        })
        .catch(console.error)
})

router.delete('/:id', (req, res) => {
    Todo.findOneAndRemove(
        {_id: req.params.id},
        )
        .then( () => res.redirect('/todos'))
        .catch(console.error)
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    Todo.findOneAndUpdate(
        {_id: id},
        {
            title: req.body.title,
            complete: req.body.complete === 'on'
        },
        {new: true}
    )
    .then( todo => {
        res.render('todos/show', todo)
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