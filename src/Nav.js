import React from "react";
import "./Nav.css";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Nav() {
  // const history = useHistory();
  const navigate = useNavigate();

  return (
    <div className="nav">
      <div className="nav_contents">
        <img
          onClick={() => navigate("/")}
          height="100px"
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          onClick={() => navigate("/profile")}
          height="50px"
          className="nav_avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
