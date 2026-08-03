import "../css/Signup.css";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import authImg from "../assets/files/transparent-authimg.png";
import logo from "../assets/files/logo-light 1.svg";
import googleLogo from "../assets/icons8-google-100.png";
import { useLocation, useNavigate, Link } from "react-router-dom";
import MainBtn from "../Components/LandingPage/MainBtn";
import { useDispatch } from "react-redux";
import { setCredentials } from "../Features/Auth/AuthSlice";
import { useLoginMutation } from "../Features/Auth/AuthApiSlice";
const Login = () => {
  const location = useLocation(); //imports the state.message passed from Signup.jsx
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [message, setMessage] = useState(location.state?.message || "");
  const [login, { isLoading, isError }] = useLoginMutation();

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
          const userData = await login({ username, password }).unwrap(); //send to backend for verification
          console.log(userData);
          dispatch(setCredentials({ ...userData })); //save recieved accessToken and username to global state
          navigate("/dashboard");
          // setMessage(response.data.message);
        } catch (error) {
          console.log(error);

          if (!error?.status) {
            setMessage("No server Response");
          } else if (error?.status === 400) {
            setMessage("Invalid Username or Password");
          } else if (error?.status === 401) {
            setMessage("Unauthorized");
          } else {
            setMessage("Login Failed");
          }
        }
      };
      saveUser();
    },
  });
 const handleGoogleSignIn = () => {
    try {
     
      window.location.href = 'http://localhost:5000/api/v1/auth/google';
    } catch (error) {
      console.log(error);
      
    }
  }
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
            <button className="google-signup" onClick={handleGoogleSignIn}>
              <img src={googleLogo} alt="Google Logo" /> Login with Google
            </button>
            <div className="divider">OR</div>
          </div>

          <form action="">
            <div className="message">
              {isError ||
                message == "You need to sign in or sign up before continuing." ? (
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
              <Link to="/auth/users/sign_up">Sign up for free</Link>
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
