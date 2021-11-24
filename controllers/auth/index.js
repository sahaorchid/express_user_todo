const { registerAuthUser,loginAuthUser } = require('../../models/auth/index')

async function registerUser(req,res){
    const { name,email,password } = req.body
    const msg = await registerAuthUser({ name,email,password })
    res.json({msg:"successfully registered"})

}

async function loginUser(req,res){
    const { email,password } = req.body

    try{
        const data = await loginAuthUser({ email,password })
        
        if(data.length>0){
            res.json({msg:"successfully logged in"})
        }else{
            res.json({msg:"user is not present"})
        }

    }catch{
        res.json({msg:"failed to login"})
    }

}

module.exports={
    registerUser,
    loginUser,
}

