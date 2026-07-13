import axios from "axios";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../Components/ThemeContext";

const Dashboard = () => {
  const [User, setUser] = useState("");
  const { theme, setTheme} = useContext(ThemeContext);
  const textTheme = theme === 'powderblue' ? 'black' : 'white'
  const navigate = useNavigate();
  let token = localStorage.token;
  useEffect(() => {
    const validateToken = async () => {
      try {
        const response = await axios.get(
          "https://bookshelf-backend-pahb.onrender.com/api/v1/users/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          },
        );
        setUser(response.data.username);
      } catch (error) {
        navigate("/auth/users/login", {
          state: {
            message: "You need to sign in or sign up before continuing.",
          },
        });
        console.log(error);
      }
    };

    validateToken();
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const ThemeChange = () => {
    setTheme(theme === "#604FCD" ? "powderblue" : "#604FCD");
  
  };

  
  return (
    <>
      <div style={{ backgroundColor: theme, color: textTheme }}>
        <button onClick={ThemeChange}>Theme is {theme}</button>

        <h1>Welcome {User}!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default Dashboard;
