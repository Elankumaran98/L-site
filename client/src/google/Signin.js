import React, { useEffect, useState } from "react";
import { auth, gProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import Home from "../page/Home";

function Signin() {
  const [value, setValue] = useState("");
  function handleClick() {
    signInWithPopup(auth, gProvider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  }
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  },[]);
 
  return (
    <div>
      {value ? (
        <Home />
      ) : (
        <button onClick={handleClick}>Signin With Google</button>
      )}
    </div>
  );
}

export default Signin;
