import bcrypt from 'bcrypt';
 export const hashpassword =async (password)=>{
    try {
        const hashpassword =await bcrypt.hashSync(password,5)
        return hashpassword
    }catch(error){
console.log(error)
    }
 }

 export const commparepassword =(password,hashpassword)=>{
    return bcrypt.compare(password,hashpassword)
 }