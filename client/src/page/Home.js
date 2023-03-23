import React,{useEffect} from "react";
import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
         
          const uid = user.uid;
          // ...
          console.log("uid", uid)
        } else {
          // User is signed out
          // ...
          console.log("user is logged out")
        }
      });
     
}, [])

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <nav>
        <p>Welcome Home</p>
        <div>
          <button className='btn btn-outline-primary' onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </>
  );
};

export default Home;
