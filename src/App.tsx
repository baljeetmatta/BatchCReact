import './App.css';
import Button from './Button';
const clickHandlerSend=((e:MouseEvent)=>{
  let target=e.target as HTMLButtonElement;

  alert("Clicked on send button"+target.innerText)
});

const clickHandlerClick=()=>{
  alert("Clicked on click button")
}


const App=()=>{

  return (
    <>
    App Component
    <Button value="Send" click={clickHandlerSend}/>
    <Button value="Click" click={clickHandlerClick}/>


    </>
  )
}
export default App;


// import './App.css'
// //import First from "./First";
// import Greet from './Greet';
// import jsondata from './data.json';
// import Test from './Test';
// function App() {
 
  
//   return (
//     <>
//       Welcome to React
//       <div>
//       {/* <First/> */}
//       <Greet name="Chitkara" years={10} object={jsondata[0]}>
//           <Test/>

//         </Greet>

//       {/* <Greet name="CodeQutient"/> */}
//       {/* <Greet/>
//       <Greet/> */}
      
//     </div>
//     </>
    
//   )
// }

// // function Test()
// // {
// //   return (
// //     <>
// //     Welcome to Test 
// //     </>
// //   )
// // }
// export default App
// //export {Test};

