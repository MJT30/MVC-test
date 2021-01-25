const express = require("express")
const app = express()

app.set('view engine', 'hbs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))



// routes -----

const todoController = require('./controllers/todos')

app.get('/', (req, res) => {
    res.render('home', {foo:'bar'})
})

app.use('/todos', todoController)

// routes --------

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})

