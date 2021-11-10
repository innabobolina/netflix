import React from "react";
import "./LoginScreen.css";

function LoginScreen() {
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className="loginScreen_button">Sign In</button>
      </div>
      <div className="loginScreen_body">
        <>
          <h1>Unlimited films, TV programmes and more.</h1>
          <div className="loginScreen_input">
            <form>
              <input type="email" placeholder="Email Address" />
            </form>
          </div>
        </>
      </div>
    </div>
  );
}

export default LoginScreen;
