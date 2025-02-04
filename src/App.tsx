import './App.css'
//import First from "./First";
import Greet from './Greet';
function App() {
 
  return (
    <>
      Welcome to React
      <div>
      {/* <First/> */}
      <Greet name="Chitkara" years={10}/>
      <Greet name="CodeQutient"/>
      {/* <Greet/>
      <Greet/> */}
      
    </div>
    </>
    
  )
}
function Test()
{
  return (
    <>
    Welcome to Test 
    </>
  )
}
export default App
export {Test};

