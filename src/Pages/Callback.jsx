import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Callback = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  useEffect(() => {
    const setToken = async () => {
      try {
        const token = searchParams.get("state");
        localStorage.setItem("token", token);
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
        
      }
    };

    setToken();
  }, [navigate, searchParams]);

  return <></>;
};

export default Callback;
