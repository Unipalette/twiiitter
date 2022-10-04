import React, { useState } from "react";
import { authService, firebaseInstance } from "../fBase";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChage = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "emailInput") {
      setEmail((prev) => value);
    } else if (name === "passwordInput") {
      setPassword((prev) => value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      if (newAccount) {
        //Create New Account
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        // Log In
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  };

  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;

    let provider;

    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };

  return (
    <div>
      <h1>로그인 하세요</h1>
      <form onSubmit={onSubmit}>
        <input
          name="emailInput"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={onChage}
        />
        <input
          name="passwordInput"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChage}
        />
        <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? "Sign In" : "Create Account"}
      </span>
      <div>
        <button onClick={onSocialClick} name="google">
          Contiune with Google
        </button>
        <button onClick={onSocialClick} name="github">
          Contiune with Github
        </button>
      </div>
    </div>
  );
}
export default Auth;
