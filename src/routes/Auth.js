import React, { useState } from "react";
import { authService } from "../fBase";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);

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
      console.log(error);
    }
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
      </form>
      <div>
        <button>Contiune with Google</button>
        <button>Contiune with Github</button>
      </div>
    </div>
  );
}
export default Auth;
