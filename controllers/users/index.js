const { fetchAll,addUserData,getUser,updateUserId,deleteUserId,getUserTodoById } = require('../../models/users/index')
const todoRoutes = require('../../routes/userTodos')

async function getUsers(req,res){
    users = await fetchAll()
    res.json(users)
}

async function addUser(req,res){
    const { name, email, password } = (req.body)
    msg = await addUserData({name,email,password})
    res.json({msg:"User added successfully"})
}

async function getUserById(req,res){
    user = await getUser(req.params.id)
    res.json(user)
}

async function updateUser(req,res){
    const { name, email, password } = (req.body)
    let id = req.params.id
    msg = await updateUserId({id, name, email, password })
    res.json({msg:"User updated successfully"})
}

async function deleteUser(req,res){
    msg = await deleteUserId(req.params.id)
    res.json({msg:"User deleted successfully"})
}

async function getUserTodo(req,res){
    todos = await getUserTodoById(parseInt(req.params.user_id))
    res.json(todos)
}

module.exports={
    getUsers,
    addUser,
    getUserById,
    updateUser,
    deleteUser,
    getUserTodo
}

