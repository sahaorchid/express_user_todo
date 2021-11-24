const express = require('express')
const apiRoutes = require('./routes/users/index')
const todoRoutes = require('./routes/userTodos/index')
const authRouter = require('./routes/auth/index')

const app = express()
app.use(express.json())
app.use('/userapi',apiRoutes)
app.use('/todoapi',todoRoutes)
app.use('/auth',authRouter)

app.listen(3000,()=>{
    console.log("server started")
})
