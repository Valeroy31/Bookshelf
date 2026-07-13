import "../css/Signup.css";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import authImg from "../assets/files/transparent-authimg.png";
import logo from "../assets/files/logo-light 1.svg";
import googleLogo from "../assets/icons8-google-100.png";
import axios from "axios";
import { useLocation, useNavigate, Link } from "react-router-dom";
import MainBtn from "../Components/LandingPage/MainBtn";
const Login = () => {
  const location = useLocation(); //imports the state.message passed from Signup.jsx
  const navigate = useNavigate();
  const url = "https://bookshelf-backend-pahb.onrender.com/api/v1/users/login"
  const [message, setMessage] = useState(location.state?.message || "");
  const [isError, setisError] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    if (location.state?.message) {
      navigate(location.pathname, { replace: true });
    }
  }, [location.pathname, location.state, navigate]);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: (values) => {
      const { username, password } = values;
        const saveUser = async () => {
          try {
            setisLoading(true);
            const response = await axios.post(url,
              { username, password },
            );
            const token = response.data.token
            localStorage.token = token
            setMessage(response.data.message);
           window.location.href = "/dashboard"
            
          } catch (error) {
            console.log(error.response);
            
            setMessage(error.response?.data);
            setisError(true)
          } finally {
            setisLoading(false);
          }
        };
        saveUser();
    },
  });

  return (
    <>
      <div className="all-form">
        <div className="form">
          <div className="form-header">
            <a href="/">
              {" "}
              <img src={logo} alt="Bookshelf Logo" />
            </a>
            <p>Join us and be a member of the Community</p>
            <button className="google-signup">
              <img src={googleLogo} alt="Google Logo" /> Login with Google
            </button>
            <div className="divider">OR</div>
          </div>

          <form action="">
            <div className="message">
 {isError || message == "You need to sign in or sign up before continuing." ? (
              <span
                style={{
                  color: "red",
                  fontSize: "1.4rem",
                  paddingBottom: "1rem",
                }}
              >
                {message}
              </span>
            ) : (
              <span
                style={{
                  color: "green",
                  fontSize: "1.4rem",
                  paddingBottom: "1rem",
                }}
              >
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
                placeholder="Enter your Username"
                name="username"
                value={formik.values.username}
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
                placeholder="Enter your password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <a
                href="/resend-confirmation"
                style={{ marginTop: ".2rem", fontSize: "1.2rem" }}
              >
                Forgot your password?
              </a>
            </div>

            <MainBtn
              type="submit"
              disabled={
                !formik.values.username || !formik.values.password || isLoading
              }
              onClick={() => formik.handleSubmit()}
              text={isLoading ? <div className="loader"></div> : "Login"}
            />
          </form>
          <div className="cta">
            <p>
              Don't have an account yet?{" "}
              <Link to= '/auth/users/sign_up'>Sign up for free</Link>
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

export default Login;
