// //import './App.css';
// //import Controls from './Controls';
// import { Route, Routes } from 'react-router-dom';
// import Login from './Login';
// import Controls from './Controls';
// import Home from './components/home';
// import About from './components/about';
// import Contact from './components/contact';
// import Navbar from './components/Navbar';
// import Greet from './Greet';
// import GreetClass from './GreetClass';
// import MasterLayout from './components/MasterLayout';
// //import Banner from './Banner'
// // 
// const App=()=>{
//   return (
//     <>
//     {/* <Controls/> */}
//     {/* <GreetClass name="Code"/> */}
//     {/* <Login/> */}
//     {/* <Banner/> */}
//     {/* <Routes>
//       <Route path="/" element={<div>Home Page</div>}/>
//       <Route path="/login" element={<Login/>}></Route>
//       <Route path="/controls" element={<Controls/>}></Route>
//     </Routes> */}
//     {/* <Navbar/> 
//     <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path="/about/:id" element={<About/>}/>
//       <Route path="/products/" element={<MasterLayout/>}>
//         <Route path="cloth" element={<GreetClass name="text"/> }></Route>
//         <Route path="elect" element={<Contact/>}></Route>
//       </Route>
//       <Route path="/contact" element={<Contact/>}/>
//       <Route path="/login" element={<Login/>}/>

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Jobs, { fetchJobs } from "./components/Jobs"
import JobDetails, { fetchJobDetails } from "./components/JobDetails"

//     </Routes> */}

    
//     </>
//   )
// }
// export default App;


// // import './App.css'
// // //import First from "./First";
// // import Greet from './Greet';
// // import jsondata from './data.json';
// // import Test from './Test';
// // function App() {
 
  
// //   return (
// //     <>
// //       Welcome to React
// //       <div>
// //       {/* <First/> */}
// //       <Greet name="Chitkara" years={10} object={jsondata[0]}>
// //           <Test/>

// //         </Greet>

// //       {/* <Greet name="CodeQutient"/> */}
// //       {/* <Greet/>
// //       <Greet/> */}
      
// //     </div>
// //     </>
    
// //   )
// // }

// // // function Test()
// // // {
// // //   return (
// // //     <>
// // //     Welcome to Test 
// // //     </>
// // //   )
// // // }
// // export default App
// // //export {Test};

const routes=createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    
  },
  {
    path:"/about",
    element:<About/>

  }
  ,
  {
    path:"/jobs",
    element:<Jobs/>,
    loader:fetchJobs

  }
  ,
  {
    path:"/jobdetails/:id",
    element:<JobDetails/>,
    loader:fetchJobDetails

  }
])
function App()
{

  return (
    <>
    <div>App Comopnent</div>
    <RouterProvider router={routes}/>

    </>
  )
}
export default App;