import axios from "axios";
import { createContext,useEffect, useContext,useState } from "react";

const AuthContext = createContext();
const AuthProvider=({children})=>{
    const[auth,setAuth]=useState({
        user:null,
        Token:""
    });
     //default axios
     axios.defaults.headers.common['Authorization']=auth?.Token;
    useEffect(()=>{
       const data =localStorage.getItem('auth') 
    
       if (data){
        const parsedata=JSON.parse(data)
        setAuth({...auth,
            user:parsedata.user,
            Token:parsedata.jwttoken
        })
       }
     
   //eslint-disable-next-line
    },[])
   return (
    <AuthContext.Provider value={[auth,setAuth]}>
        {children}
    </AuthContext.Provider>
   );
}
 //custom hook
 const useAuth=()=>useContext(AuthContext)
    

 export {AuthProvider,useAuth};