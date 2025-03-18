import { useContext, useRef } from "react";
import { LoginContext, UserType } from "./LoginContext";
import { useNavigate } from "react-router-dom";
const LoginScreen=()=>{
    const navigate=useNavigate()
       const inputRef=  useRef<HTMLInputElement|null>(null);
const user=useContext<UserType|undefined>(LoginContext);


       const loginHandler=()=>{
        //console.log(inputRef.current?.value)
        user?.setName(inputRef.current?.value);

       }
       const logoutHandler=()=>{
        user?.setName(undefined);
        navigate("/login");
        
        
       }
       if(user?.name)
        return <button onClick={logoutHandler}>Logout</button>
    return (
        <>
        <input type="text" ref={inputRef}/>
        <button onClick={loginHandler}>Login</button>
        
        </>
    )

}
export default LoginScreen;