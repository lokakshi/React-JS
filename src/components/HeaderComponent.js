
import {LOGO_URL} from "../utils/constant";
import { useState } from "react";
const HeaderComponent = () => {
  const[isLogin, setIsLogin] = useState(false);

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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