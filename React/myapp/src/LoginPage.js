import "./LoginPage.css";
import React, { useState } from "react";
import "./LoginPage.css"
import { set, ref,get } from "firebase/database";
import { db } from "./FireBaseConfig.js";

function LoginPage() {
  const [_username, setUsername] = useState("");
  const [_password, setPassword] = useState("");
  const [_email, setEmail] = useState("");

  return (
    <form className="form">
      <div className="head">Log in Page</div>

      <input
        id="username"
        placeholder="Username"
        type="text"
        value={_username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>

      <input
        placeholder="Email"
        id="email"
        type="email"
        value={_email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>

      <input
        placeholder="Password"
        id="password"
        type="password"
        value={_password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br></br>

      <button type="button" onClick={Signin}>
        Sign in
      </button>
      <button type="button" onClick={Signup}>
        Sign up
      </button>

      
    </form>
  );

  function Signin(){
    get(ref(db, "users/" + _username)
            ).then((snapshot) => {
                if (snapshot.val().username === _username && snapshot.val().password === _password && snapshot.val().email ===_email) {
                    console.log(snapshot.val().email);
                    alert("signed in")
                }
                else {
                    alert("sg beybaba");
                }
            }
            ).catch((error) => alert(
                error.message));
    
    
  }

  function Signup(){
    set(ref(db, "users/" + _username), {
        username: _username,
        email: _email,
        password: _password
    });
    alert("signed up")

  }
}

export default LoginPage;
