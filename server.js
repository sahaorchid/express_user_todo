const express = require('express')
const apiRoutes = require('./routes/users/index')
const todoRoutes = require('./routes/userTodos/index')

const app = express()
app.use(express.json())
app.use('/userapi',apiRoutes)
app.use('/todoapi',todoRoutes)

app.listen(3000,()=>{
    console.log("server started")
})