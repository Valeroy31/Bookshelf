import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setCredentials } from "../Features/Auth/AuthSlice";
const Callback = () => {
  const [searchParams] = useSearchParams();
 const dispatch = useDispatch()
  const navigate = useNavigate();
  useEffect(() => {
    const setToken = async () => {
      try {
        const accessToken = searchParams.get("state");
        const sub = searchParams.get("sub")
       
        console.log(sub);
        
        
       dispatch(setCredentials({accessToken, sub})) 
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


  // const [searchParams, setSearchParams] = useSearchParams();
  // const dispatch = useDispatch()
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const setToken = async () => {
  //     try {
  //       const token = searchParams.get("state");
  //       dispatch(setCredentials({user, token}))
  //       navigate("/dashboard");
  //     } catch (error) {
  //       console.log(error);
        
  //     }
  //   };