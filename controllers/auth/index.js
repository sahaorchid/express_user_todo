const { registerAuthUser,loginAuthUser,checkEmailExistance } = require('../../models/auth/index')

async function registerUser(req,res){
    const { name,email,password } = req.body
    const data = await checkEmailExistance(email)
    if(data.length==0){
        const msg = await registerAuthUser({ name,email,password })
        res.json({msg:"successfully registered"})
    }else{
        res.json({msg:"user already exixt"})
    }

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

