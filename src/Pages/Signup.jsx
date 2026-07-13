import "../css/Signup.css";
import { useFormik } from "formik";
import { useState } from "react";
import authImg from "../assets/files/transparent-authimg.png";
import logo from "../assets/files/logo-light 1.svg";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../assets/icons8-google-100.png";
import axios from "axios";
import MainBtn from "../Components/LandingPage/MainBtn";
const Signup = () => {
  const [message, setMessage] = useState("");
  const [isError, setisError] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();
  const url = 'https://bookshelf-backend-pahb.onrender.com/api/v1/users/sign_up'
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    onSubmit: (values) => {

      if (values.password !== values.confirmPassword) {
        setMessage("Passwords do not match");
        setisError(true);
      } else if (values.password.length < 6) {
        setMessage("Password must be at least 6 characters long");
        setisError(true);
      } else {
        const saveUser = async () => {
          try {
            setisLoading(true);
            // ""
          await axios.post( url ,values);
            navigate("/users/login", {
              state: { message: "Signup successful. Please log in." },
            });
          } catch (error) {
            console.log(error.response?.data?.message);
            
            setMessage(
              error.response?.data?.message ||
                error.message ||
                "Something went wrong",
            );
            setisError(true);
            setisLoading(false);
          }
        };
        saveUser();
      }
    },
  });

   const handleGoogleSignIn = () => {
    try {
      setisLoading(true);
      window.location.href = 'https://bookshelf-backend-pahb.onrender.com/api/v1/auth/google';
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };

  return (
    <>
      <div className="all-form">
        <div className="form">
          <div className="form-header">
            <a href="/"> <img src={logo} alt="Bookshelf Logo" /></a>
            <p>Join us and be a member of the Community</p>

            <button onClick={handleGoogleSignIn} disabled={isLoading} className="google-signup">
              <img src={googleLogo} alt="Google Logo" />
             {isLoading ? <div className="loader"></div> : 'Sign Up with Google'}
            </button>
            <div className="divider">OR</div>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="message">
              {isError ? (
                <span style={{ color: "red", fontSize: "1.6rem" }}>
                  {message}
                </span>
              ) : (
                <span style={{ color: "green", fontSize: "1.6rem" }}>
                  {message}
                </span>
              )}
            </div>
            <div className="form-field">
              <span>
                {" "}
                <strong>USERNAME</strong>{" "}
              </span>
              <input
                type="text"
                placeholder="Choose a unique username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
            </div>

            <div className="form-field">
              <span>
                {" "}
                <strong>EMAIL</strong>{" "}
              </span>
              <input
                type="text"
                placeholder="Enter your email address"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>

            <div className="form-field">
              <span>
                {" "}
                <strong>PASSWORD</strong>{" "}
              </span>
              <input
                type="password"
                placeholder="Choose a password (min 6 chars)"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </div>

            <div className="form-field">
              <span>
                {" "}
                <strong>CONFIRM PASSWORD</strong>{" "}
              </span>
              <input
                type="password"
                placeholder="Confirm your password"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
              />
            </div>
            <MainBtn
              type="submit"
              disabled={
                !formik.values.username ||
                !formik.values.email ||
                !formik.values.password ||
                !formik.values.confirmPassword ||
                isLoading
              }
              text={isLoading ? <div className="loader"></div> : "Sign Up"}
            />
          </form>
          <div className="cta">
            <p>
              Already got an account? <Link to='/auth/users/login'>Login</Link>
            </p>
            <p>
              Didn't receive a confirmation email?{" "}
              <a href="/resend-confirmation">Resend it</a>
            </p>
          </div>
        </div>

        <div className="form-img">
          <img src={authImg} alt="" />
          <div className="form-img-text">
            <h2>Bookshelf is free for every reader, everywhere</h2>
            <p>
              Track 14,200+ books across 14 genres, share reviews with 3,800+
              readers, and discover your next great read through people — not
              algorithms. <strong>Bookshelf is 100% free, forever.</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
