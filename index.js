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

// routes controllers
app.get('/', (req, res)=>{
    res.json({ msg: 'welcome to the backend' })
})

// listen on a port
app.listen(PORT, ()=>{
    console.log('is that port', PORT)
})