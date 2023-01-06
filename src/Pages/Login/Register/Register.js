import "./Register.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useState } from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  if (user) {
    navigate("/home");
  }
  const handelRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
            alert('Updated profile');
  };
  const navigateLogin = (event) => {
    navigate("/login");
  };
  return (
    <div className="register-form">
      <PageTitle
      title='Register'
      ></PageTitle>
      <h2 className="text-center my-4">Please Register</h2>
      <form onSubmit={handelRegister} action="">
        <input type="text" name="name" id="" placeholder="Your Name" />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />
        <input
          onClick={() => setAgree(!agree)}
          class="form-check-input me-2"
          type="checkbox"
          name="terms"
          id="terms"
        />

        <label
          className={`${agree ? "text-primary" : "text-danger"}`}
          htmlFor="terms"
        >
          Accept Terms and Condition
        </label>

        <input
          disabled={!agree}
          className="btn btn-primary w-50 d-block mx-auto mb-2 mt-2"
          type="submit"
          value="Register"
        />
      </form>
      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>{" "}
      </p>
      <SocialLogin />
    </div>
  );
};

export default Register;
