import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handelSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  let errorElement;

  if (loading || sending) {
    return <Loading />;
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  const navigateRegister = (event) => {
    navigate("/register");
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    
    if(email){
      await sendPasswordResetEmail(email);
      toast("Sent email");
    }else{
      toast("Enter you email address");
    }
  };
  return (
    <div className="container w-50 mx-auto vh-100 mt-5">
      <h2 className="text-primary text-center">Please Login</h2>
      <Form onSubmit={handelSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Enter Password"
            required
          />
        </Form.Group>

        <Button variant="primary w-50 d-block mx-auto mb-2" type="submit">
          Login
        </Button>
      </Form>
      <p>
        New to Genius Car?{" "}
        <Link
          to="/register"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateRegister}
        >
          Please Register
        </Link>{" "}
      </p>
      <p>
        Forget Password?{" "}
        <Link
          className="text-primary pe-auto text-decoration-none"
          onClick={resetPassword}
        >
          Reset Password
        </Link>{" "}
      </p>
      <SocialLogin />
      <ToastContainer />
    </div>
  );
};

export default Login;
