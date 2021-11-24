const express = require('express');
const { getTodos,addTodos,updateTodos,deleteTodos } = require('../../controllers/userTodos/index')

const todoRoutes = express.Router()

todoRoutes.get('/todos',getTodos)
todoRoutes.post('/todos',addTodos)
todoRoutes.put('/todos/:id',updateTodos)
todoRoutes.delete('/todos/:id',deleteTodos)

module.exports = todoRoutes