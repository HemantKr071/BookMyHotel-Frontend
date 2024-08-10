import { useContext } from "react";
import "./navbar.css"
import {Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Avatar from '@mui/material/Avatar';
//import Typography from "@mui/material/Typography";
const Navbar = () => {
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);
  
  const handleClick = () => {
     navigate("/login");
  }
  /*const storedUserData = JSON.parse(localStorage.getItem("user"));
  const username = storedUserData.user.username;
  console.log(username);   Should print "Hemant@071" */
  return (
    <div className="navbar">
      <div className="navContainer">

        <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
            <span className="logo">BookMyHotel</span>
        </Link>
 
       {user ?  <div> 
        
         <Avatar>{user.username[0].toUpperCase()}</Avatar>
        
         </div> :( 
        <div className="navItems">
          <button onClick={handleClick} className="navButton">Register</button>
          <button onClick={handleClick} className="navButton">Login</button>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar