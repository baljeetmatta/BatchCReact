import { Navigate, Outlet } from "react-router-dom"
import { LoginContext, UserType } from "./components/LoginContext"
import React, { useContext } from "react"
type privateProps={
    children:React.ReactNode
}
const PrivateRoute=(props:privateProps)=>{
    const user=useContext<UserType|undefined>(LoginContext);


    return (
        <>
        {user?.name?props.children:<Navigate to="/login"/>}
        {/* {user?.name?<Outlet/>:<Navigate to="/login"/>}
         */}
        </>
    )

}
export default PrivateRoute