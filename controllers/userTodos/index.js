const { getUserTodos,addUserTodos,updateUserTodos,deleteUserTodos } = require('../../models/userTodos/index')

async function getTodos(req,res){
    const todos = await getUserTodos()
    res.json(todos)
}

async function addTodos(req,res){
    const {task,user_id} = req.body
    const todos = await addUserTodos({task,userId:user_id})
    res.json({"msg":"successfully added"})
 }

 async function updateTodos(req,res){
    const {task,user_id} = req.body
    let id = req.params.id
    const todos = await updateUserTodos({id,task,userId:user_id})
    res.json({"msg":"successfully updated"})
 }

 async function deleteTodos(req,res){
    const todos = await deleteUserTodos(req.params.id)
    res.json({"msg":"successfully deleted"})
 }

module.exports = {
    getTodos,
    addTodos,
    updateTodos,
    deleteTodos,
}