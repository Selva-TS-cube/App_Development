import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/login_signup.css";

function Login_signup() {
  const [click, setClick] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ username: "", email: "", password: "" });
  const [loginErrors, setLoginErrors] = useState({});
  const [signupErrors, setSignupErrors] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve login credentials from localStorage if available
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (storedEmail && storedPassword) {
      setLoginData({ email: storedEmail, password: storedPassword });
    }
  }, []);

  const handleClick = () => setClick(!click);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const validateLogin = () => {
    let errors = {};
    if (!loginData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!loginData.password) {
      errors.password = "Password is required";
    }
    setLoginErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateSignup = () => {
    let errors = {};
    if (!signupData.username) {
      errors.username = "Username is required";
    }
    if (!signupData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(signupData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!signupData.password) {
      errors.password = "Password is required";
    } else if (signupData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    setSignupErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validateLogin()) {
      // Retrieve stored password from sessionStorage
      const storedPassword = sessionStorage.getItem("password");

      // Check if the input password matches the stored password
      if (loginData.password === storedPassword) {
        console.log("Login successful", loginData);
        // Navigate to home page
        navigate("/home");
      } else {
        setLoginErrors({ password: "Incorrect password" });
      }
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (validateSignup()) {
      // Store signup data in sessionStorage
      sessionStorage.setItem("username", signupData.username);
      sessionStorage.setItem("email", signupData.email);
      sessionStorage.setItem("password", signupData.password);
      console.log("Signup successful", signupData);
      // Switch to the login form
      setClick(false);
    }
  };

  return (
    <div
      className="background-box"
      style={{
        "--text1-z-index": click ? "-700" : "700",
        "--text1-transform": click ? "translateX(0)" : "translateX(100%)",
        "--text1-animation": click ? "move 1.5s" : "none",
        "--text2-z-index": click ? "700" : "-700",
        "--text2-animation": click ? "none" : "move 1.5s",
        "--text2-transform": click ? "translateX(-100%)" : "translateX(0%)",
        "--signin-z-index": click ? "-600" : "500",
        "--signin-transform": click ? "none" : "translateX(-50%)",
        "--signup-z-index": click ? "500" : "-500",
        "--signup-transform": click ? "translateX(50%)" : "none",
        "--box1-transform": click ? "translateX(90%)" : "translateX(10%)",
        "--box2-transform": click ? "translateX(-122%)" : "translateX(0%)",
        "--box2-border-radius": click ? "23px 0 0 23px" : "0 23px 23px 0",
        "--button-animate-right": click ? "52%" : "42%",
        "--button-animate-transform": click ? "rotate(360deg)" : "rotate(0)",
        "--attention-icon-right": click ? "0" : "none",
      }}
    >
      <button className="button-animate" onClick={handleClick}></button>

      <form className="form signin" onSubmit={handleLoginSubmit}>
        <h1 className="title">Sign In</h1>
        <input
          className="input"
          type="email"
          name="email"
          id="emailId"
          placeholder="Email"
          value={loginData.email}
          onChange={handleLoginChange}
        />
        {loginErrors.email && <p className="error">{loginErrors.email}</p>}
        <input
          className="input"
          type="password"
          name="password"
          id="passwordId"
          placeholder="Password"
          value={loginData.password}
          onChange={handleLoginChange}
        />
        {loginErrors.password && <p className="error">{loginErrors.password}</p>}
        <a className="link" href="#">
          Forgot Your Password?
        </a>
        <button className="button" type="submit">Sign In</button>
      </form>

      <form className="form signup" onSubmit={handleSignupSubmit}>
        <h1 className="title">Sign Up</h1>
        <input
          className="input"
          type="text"
          name="username"
          id="usernameId"
          placeholder="Username"
          value={signupData.username}
          onChange={handleSignupChange}
        />
        {signupErrors.username && <p className="error">{signupErrors.username}</p>}
        <input
          className="input"
          type="email"
          name="email"
          id="emailId"
          placeholder="Email"
          value={signupData.email}
          onChange={handleSignupChange}
        />
        {signupErrors.email && <p className="error">{signupErrors.email}</p>}
        <input
          className="input"
          type="password"
          name="password"
          id="passwordId"
          placeholder="Password"
          value={signupData.password}
          onChange={handleSignupChange}
        />
        {signupErrors.password && <p className="error">{signupErrors.password}</p>}
        <a className="link" href="#" onClick={handleClick}>
          Already have an Account?
        </a>
        <button className="button" type="submit">Sign Up</button>
      </form>

      <div className="text text1">
        <h1>Welcome!</h1>
        Don't have an account?
        <br />
        <span className="attention">Click on Emoji</span>
        <span className="attention-icon">⤶</span>
      </div>

      <div className="text text2">
        <h1>Hi There!</h1>
        Already have an account?
        <br />
        <span className="attention">Click on Emoji</span>
        <span className="attention-icon">⤷</span>
      </div>

      <div className="box1" />
      <div className="box2" />
    </div>
  );
}

export default Login_signup;
