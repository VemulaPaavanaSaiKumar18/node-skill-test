import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { signInWithPopup } from "firebase/auth";
import { auth, goggleAuthProvider } from "../../server/fireBaseConfig";
import { AuthContext } from "../../ContextStore/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignInWithGoggle = async () => {
    try {
      let userCredential = await signInWithPopup(auth, goggleAuthProvider);
      const user = userCredential.user;
      dispatch({ type: "LOGIN", payload: user });
      console.log("user", user);
      navigate("/chat");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  return (
    <div className="signupContainer">
      <h1>WELCOME TO AI POWERED CHAT BOT</h1>
      <button id="signupWithGoggle" onClick={handleSignInWithGoggle}>
        <FaGoogle />
        Continue with Goggle
      </button>
    </div>
  );
};

export default Login;
