let utils= require('../../utils')

db=utils.dbConnect()

function registerAuthUser({ name,email,password }){
    const sql = 'insert into auth (name,email,password) values (?,?,?)'
    return new Promise((resolve, reject)=>{
        db.query(sql,[name,email,password],(err,res)=>{
            if(err)console.log(err)
            else{
                resolve()
            }
        })
    }) 
}

function loginAuthUser({ email,password }){
    const sql = 'select * from auth where email=? and password=?'
    return new Promise((resolve, reject)=>{
        db.query(sql,[email,password],(err,res)=>{
            if(err)console.log(err)
            else{
                resolve(res)
            }
        })
    }) 
}

module.exports={
    registerAuthUser,
    loginAuthUser
}