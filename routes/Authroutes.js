import express from "express"
import {Loginuser, registerController,testController,forgotPasswordController} from "../Controller/registerController.js"
import { requiresign, isadmin } from "../middleware/Authmiddleware.js"
 const router = express.Router()


router.post('/register',registerController)
router.post('/login', Loginuser)
router.get('/test',requiresign,isadmin, testController);
//protected route
router.get('/user-auth',requiresign, (req,res)=>{
    res.status(200).send({ok:true})
});
//Admin private route
router.get('/admin-auth',requiresign,isadmin, (req,res)=>{
    res.status(200).send({ok:true})
});
//forgot password
router.post('/forgot-password',forgotPasswordController)
export default router; 

