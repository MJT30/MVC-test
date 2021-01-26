const express = require("express")
const methodOverride = require('method-override')
const app = express()


app.set('view engine', 'hbs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))



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

