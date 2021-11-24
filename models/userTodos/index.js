let utils= require('../../utils')

db=utils.dbConnect()

function getUserTodos(){
    return new Promise((resolve, reject)=>{
        const sql='select * from todos'
        db.query(sql,(err,res)=>{
            if(err)console.log(err)
            else{
                resolve(res)
            }
        })
    })
}

function addUserTodos({task,userId}){
    const sql='insert into todos (task,user_id) values(?,?)'
    return new Promise((resolve, reject)=>{
        db.query(sql,[task,userId],(err,res)=>{
            if(err)console.log(err)
            else{
                resolve()
            }
        })
    })  
}

function updateUserTodos({id,task,userId}){
    return new Promise((resolve, reject)=>{
        const sql='update todos set task=?,user_id=? where id=?'
        db.query(sql,[task,userId,id],(err,res)=>{
            if(err)console.log(err)
            else{
                resolve()
            }
        })
    })

}

function deleteUserTodos(id){
    return new Promise((resolve, reject)=>{
        const sql='delete from todos where id=?'
        db.query(sql,[id],(err,res)=>{
            if(err)console.log(err)
            else{
                resolve()
            }
        })
    })

}

module.exports={
    getUserTodos,
    addUserTodos,
    updateUserTodos,
    deleteUserTodos
}