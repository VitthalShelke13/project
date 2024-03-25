 import  Jwt  from 'jsonwebtoken';
  import usermodel from '../models/usermodel.js'

 //for protected routes
export const requiresign=(req,res,next)=>{
 try{
    console.log(req.body)
     const decode= Jwt.verify(req.headers.authorization,process.env.SECRET_KEY);
    console.log("Token " +decode)
    req.user = decode;
     next()
 }catch(error){
         console.log(error)
 }
 };


 export const isadmin = async (req, res, next) => {
    try {
        
      
      const user = await usermodel.findById(req.user.id);
      console.log("DAta ======"+ user)
      if (user.role !== 1) {
        return res.status(401).send({
          success: false,
          message: "UnAuthorized Access",
        });
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
      res.status(401).send({
        success: false,
        error,
        message: "Error in admin middelware",
      });
    }
  };

  //admin controler to authorised dashboard
// export const isadmin =async(req,res,next)=>{
        

//     try{
// //    const {email}=req.body
//         const User = await usermodel.findOne(req.body.email)
//         console.log(User.email)
       
//         console.log(User.role)
//         if(User.role!==1){
//             return res.status(401).send({
//                 success:false,
//                 message:'unathurized request'
//                 });       
//         }else{
//             next()
//         }
//     }catch(error){

// console.log(error)

//     }

// }
//  export const isadmin = async (req, res, next) => {
//     console.log(req.body)
//      try {
//         const {email}=req.body
//       const user = await usermodel.find(email);
     
//       if (user.role !== 1) {
     
//          return res.status(401).send({
//            success: false,
//           message: "UnAuthorized Access",
          
//         });
//      } else {
//          next();
//        }
//      } catch (error) {
//     console.log(error);
//       res.status(401).send({
//          success: false,
//          error,
//          message: "Error in admin middelware",
//        });
// }
//    };
// export const isadmin = async (req, res, next) => {
//   try {
    
  
//       const user = await usermodel.findById(req.user._id);
      

//       if (!user) {
//           return res.status(401).json({
//               success: false,
//               message: "Unauthorized Access"
//           });
//       }

//       if (user.role !== 1) { // Check if the role is not equal to 1
//           return res.status(401).json({
//               success: false,
//               message: "Unauthorized Access"
//           });
//       } 
      
//       next(); // Proceed to the next middleware
     
//   } catch (error) {
//       console.error("Error in admin middleware:", error);
//       res.status(500).json({
//           success: false,
//           error: error.message,
//           message: "Error in admin middleware"
//       });
//   }
// };

