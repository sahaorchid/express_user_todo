let utils= require('../../utils')

db=utils.dbConnect()

function fetchAll(){
    return new Promise((resolve, reject)=>{
        const sql='select * from Users'
        db.query(sql,(err,res)=>{
            if(err)console.log(err)
            else{
                resolve(res)
            }
        })
    })
}


function addUserData({name,email,password}){
    const sql='insert into Users (name,email,password) values(?,?,?)'
    return new Promise((resolve, reject)=>{
        db.query(sql,[name,email,password],(err,res)=>{
            if(err)console.log(err)
            else{
                resolve()
            }
        })
    })  
}

function getUser(id){
    return new Promise((resolve, reject)=>{
        const sql='select * from Users where id=?'
        db.query(sql,[id],(err,res)=>{
            if(err)console.log(err)
            else{
                resolve(res)
            }
        })
    })
}

function updateUserId({id,name,email,password}){
    return new Promise((resolve, reject)=>{
        const sql='update Users set name=?,email=?,password=? where id=?'
        db.query(sql,[name,email,password,id],(err,res)=>{
            if(err)console.log(err)
            else{
                resolve()
            }
        })
    })

}

function deleteUserId(id){
    return new Promise((resolve, reject)=>{
        const sql='delete from Users where id=?'
        db.query(sql,[id],(err,res)=>{
            if(err)console.log(err)
            else{
                resolve()
            }
        })
    })

}

function getUserTodoById(id){
    return new Promise((resolve, reject)=>{
        const sql='select todos.task from Users inner join todos on Users.id=todos.user_id where Users.id=?'
        db.query(sql,[id],(err,res)=>{
            if(err)console.log(err)
            else{
                resolve(res)
            }
        })
    })

}

module.exports={
    fetchAll,
    addUserData,
    getUser,
    updateUserId,
    deleteUserId,
    getUserTodoById
}
