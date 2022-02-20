import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../../Firebase/Firebase.utils";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setIsAuth }) => {
  let navigate = useNavigate();
  const SignInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div className="login-page">
      <h1>Sign In With Google</h1>
      <button className="login-with-google-btn" onClick={SignInWithGoogle}>
        Sign In With Google
      </button>
    </div>
  );
};

export default LoginPage;
