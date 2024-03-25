// import user from '../models/usermodel.js'
import usermodel from '../models/usermodel.js';
import {commparepassword, hashpassword} from '../helper/authhelper.js'
import user from '../models/usermodel.js'
import  Jwt  from 'jsonwebtoken';
import { model } from 'mongoose';
export const registerController=async(req,res)=>{
    try{
        const {name,email, password, phone, address, role,answer}=req.body
        if(!name){
            return res.send({message:'name is require'})
        }
        if(!email){
            return res.send({message:'email is require'})
        }
        if(!password){
            return res.send({message:'password is require'})
        }
        if(!phone){
            return res.send({message:'phone number is require'})
        }
        if(!address){
            return res.send({message:'address is require'})
        }
        if(!answer){
            return res.send({message:'Answer is require'})
        }
       

       
        //existing user 
        const existinguser = await usermodel.findOne({email})
        if(existinguser){
            res.status(200).send({
                success:false,
                message:'user already register',
                error
            })
            res.status(200).send({
                success:true,
                message:'user alreday present please login '
            })

        }
        //register user
        const hashPassword =await hashpassword(password)
        //save
        const User = await new usermodel ({name, password: hashPassword , email,phone,address,answer,role}).save()
res.status(201).send({
    success:true,
    message:'user resister successfully', 
    User
})
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error registration ',
            error

        })
    }
}

//login user
export const Loginuser = async(req,res)=>{
try{
    const {email,password}= req.body;
    
    if(!email || !password){
        return res.status(404).send({
            success:false,
            message:"Invalid email or password",
            error
        });
       
    }
    const user =await usermodel.findOne({email})
    if(!user){
    return res.status(200).send({
        success:false,
        message:'email not register'
    });
   
    }
    const Match =await commparepassword(password,user.password)
    if(!Match){
    return res.status(200).send({
        success:false,
        message:'paasword not match'
    }) 
}
const jwttoken=  Jwt.sign({id:user._id},process.env.SECRET_KEY,{expiresIn:'7d'});
console.log(jwttoken)
res.status(200).send({
    success:true,
    message:'successfully login',
    user:{
        name:user.name,
        email:user.email,
        phone:user.phone,
        address:user.address,
        role: user.role
    },jwttoken
    

})
}catch
    (error){
        console.log(error)
         res.status(500).send({
            success:false,
            message:"error in login"
             
        })
}
}
    //test controller
    export const testController =(req,res)=>{
       try{
        res.send('protected routes')
       }catch(error){
console.log(error);
res.send({error})
       }
    }
    
    //forgot password controller
    export const forgotPasswordController=async(req,res)=>{
        try{
            const {email,answer,newPassword} =req.body;
            if(!email){
                res.status(400).send({message:'Email is required'})
            }
            if(!answer){
                res.status(400).send({message:'answer is required'})
            }
            if(!newPassword){
                res.status(400).send({message:'newPassword is required'});
            }
            //check
            const user = await usermodel.findOne({email,answer})
            //validation
            if(!user){ 
                res.status(400).send({
                    success:false,
                    message:'Wrong email or answer '
                });  
            }
             // if user is correct then we can hassed password 

             const hashed = await hashpassword(newPassword)
             await usermodel.findByIdAndUpdate(user._id,{password:hashed});
             res.status(200).send({
                 success:true,
                 message:"password reset Successfully"
             })
        }catch(error){
            console.log(error);
            res.status(500).send({
                success:false,
                message:'Something went to wrong',
                error
            })
        }
    }

  
    