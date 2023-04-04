import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../App.css";


const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <main className="container p-3 border border-danger rounded mt-2">
      <section>
        <div>
          <h1 className="text-center"> LShop </h1>
          <form>
            <div className="form-group">
              <label htmlFor="email-address">Email address</label>
              <input
                className="form-control"
                type="email"
                label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                type="password"
                label="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={onSubmit}
              >
                Sign up
              </button>
            </div>
          </form>

          <p>
            Already have an account?{" "}
            <NavLink id="Nav" to="/login">
              Sign in
            </NavLink>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Signup;
