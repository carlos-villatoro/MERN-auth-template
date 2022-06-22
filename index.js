// req packages
require('dotenv').config()
require('./models') //connect to db
const express = require('express')
const cors = require('cors')

// app config/middlewares
const app = express()
const PORT = process.env.PORT || 8000
app.use(cors())
app.use(express.json()) //json req.bodys

// // simple middleware
// app.use((req, res, next)=>{
//     console.log('hello i am a middleware')
//     res.locals.myData = 'i am data passed out of the middleware'
//     // tell express to move on to next thing
//     next()
// })

const myMiddleware = (req, res, next)=>{
    console.log('hello i am a middleware')
    res.locals.myData = 'i am data passed out of the middleware'
    // tell express to move on to next thing
    next()
}

// routes controllers
//  route specific middleware
app.get('/', myMiddleware, (req, res)=>{
    res.json({ msg: 'welcome to the backend' })
    console.log(res.locals.myData)
})

app.use('/api-v1/users', require('./controllers/api-v1/users'))

// listen on a port
app.listen(PORT, ()=>{
    console.log('is that port', PORT)
})