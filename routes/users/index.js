const express = require('express')

const { getUsers,addUser,getUserById,updateUser,deleteUser,getUserTodo } = require('../../controllers/users/index')
const apiRouter = express.Router()

apiRouter.get('/users',getUsers)
apiRouter.post('/users',addUser)
apiRouter.get('/users/:id',getUserById)
apiRouter.put('/users/:id',updateUser)
apiRouter.delete('/users/:id',deleteUser)
apiRouter.get('/users/todos/:user_id',getUserTodo)

module.exports=apiRouter