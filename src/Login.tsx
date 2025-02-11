import { useState } from "react";
type UserType={
    name:string,
    email:string
}
const Login = () => {
    const [isLoggedIn, setLogin] = useState(false);
   // const [user,setUser]=useState<UserType>({} as UserType);
   const [user,setUser]=useState<UserType |null>(null);
    const loginHandler = () => {
        setLogin(true);
        setUser({name:"Code",email:"Email@"});


    }
    const logoutHandler = () => {
        setLogin(false);
        setUser(null);

    }
    return (
        <>
        <div>{user?.name} {user?.email}</div>
            <div>{isLoggedIn ? 'Logged in' : 'Logged out'}</div>
            <button onClick={loginHandler}>Login</button>
            <button onClick={logoutHandler}>Logout</button>
        </>
    )

}

// const Login=()=>{
// let state=useState();
// // let data=state[0];
// // let setData=state[1];
// //array destructing
// // let obj={name:"First",age:20};
// // let {age}=obj;
// // console.log(age);
// const [data,setData]=useState("Hi");

// const clickHandler=()=>{
//    // data="Bye";
//    setData("Bye");

//     //console.log(data);

// }

// //console.log(state);

//     return (
//         <>
//         <div>The value is {data}</div>
//         <button onClick={clickHandler}>Change</button>
//         </>
//     )
// }
export default Login;