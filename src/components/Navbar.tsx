import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar=()=>{
  const navigate=  useNavigate();
    return (
        <>
        <div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            {/* <li><a href="/">Home</a></li>
                <li><a href="/about">About us</a></li>
                <li><a href="/contact">Contact</a></li> */}
            </ul>
            {/* <button>About us</button> */}
            {/* <NavLink to="/about">About us</NavLink> */}
            <button className="bg-red-600 p-4 text-white rounded-2xl" onClick={()=>{navigate("/login",{state:{data:20}})}}>Login</button>
        </div>
        </>
    )
}
export default Navbar;