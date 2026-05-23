
import {LOGO_URL} from "../utils/constant";
import { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
const HeaderComponent = () => {
  const[isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Login button clicked");
    setIsLogin(true);
  }
  const handleLogout = () => {
    console.log("Logout button clicked");
    setIsLogin(false);
  }
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src={LOGO_URL}
          alt="logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
        {/* ways to navigate in ReactJS application Link or navigate */}
          <li onClick={()=>navigate('/')}>Home</li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          {isLogin ? (
            <button className="login-btn" onClick={handleLogout}>Logout</button>
          ) : (
            <button className="login-btn" onClick={handleLogin}>
              Login
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;