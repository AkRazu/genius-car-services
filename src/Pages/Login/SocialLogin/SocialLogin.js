import React from "react";
import google from "../../../images/social/google.png";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/github.png";
import "./SocialLogin.css";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  let errorElement;

  if(loading || loading1){
    return <Loading/>
  }
  if (error || error1) {
    errorElement = (
        <p className="text-danger">Error: {error?.message} {error1?.message}</p>
    );
  }

  if (user || user1) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="w-50 bg-secondary"></div>
        <p className="mt-3 px-2">or</p>
        <div style={{ height: "1px" }} className="w-50 bg-secondary"></div>
      </div>
      {errorElement}
      <div className="d-flex justify-content-between">
        <button
          onClick={() => signInWithGoogle()}
          className="m-0 p-0 border-0 btn btn-light py-1 px-2"
        >
          <img className="img-fluid m-1 p-1 bg-light" src={google} alt="" />
          Sign in with Google
        </button>
        <button className="m-0 p-0 border-0 btn btn-outline-primary py-1 px-2">
          <img className="img-fluid m-1 p-1 " src={facebook} alt="" />
          Sign in with Facebook
        </button>
        <button onClick={()=>signInWithGithub()} className="m-0 p-0 border-0 btn btn-dark py-1 px-2">
          <img className="img-fluid m-1 p-1 bg-light" src={github} alt="" />
          Sign in with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
