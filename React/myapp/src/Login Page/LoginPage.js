import React, { useState } from "react";
import { set, ref, get } from "firebase/database";
import { db } from "../Other File/FireBaseConfig.js";
import "./LoginPage.css"


function LoginPage() {
  const [_password, setPassword] = useState("");
  const [_email, setEmail] = useState("");
 

  return (
    <div class="form-container">
      <form class="form">
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={_email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
            value={_password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button type="button" class="btn btn-primary" onClick={Signup}>
          Signup
        </button>
        <button type="button" class="btn btn-primary" onClick={Signin}>
          Signin
        </button>
      </form>
      </div>
    
  );

  function Signin() {
    get(ref(db, "users/"))
      .then((snapshot) => {
        if (
          snapshot.val().password === _password &&
          snapshot.val().email === _email
        ) {
          console.log(snapshot.val().email);
          alert("oldu");
        } else {
          alert("olmadı");
        }
      })
      .catch((error) => alert(error.message));
  }

  function Signup() {
    
    set(ref(db, "users/"), { 
      email: _email,
      password: _password,
    });
   
  }
}

export default LoginPage;
