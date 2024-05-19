import React, { useState } from "react";
import { set, ref, get } from "firebase/database";
import { db } from "../Other File/FireBaseConfig.js";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();
  const auth = getAuth();

  return (
    <div class="d-flex align-items-center justify-content-center mt-5">
      <form
        action="/action_page.php"
        class="was-validated align-items-center justify-content-center"
      >
        <div class="form-group d-inline-flex">
          <input
            type="text"
            class="form-control w-100"
            id="uname"
            placeholder="Enter username"
            name="uname"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          ></input>
        </div>
        <br></br>
        <div class="form-group d-inline-flex">
          <input
            type="text"
            class="form-control w-100"
            id="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </div>
        <br></br>
        <div class="form-group d-inline-flex">
          <input
            type="password"
            class="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </div>
        <br></br>
        <div class="form-group">
          <button type="button" class="btn btn-primary mr-2" onClick={Signin}>
            Giriş Yap
          </button>
          <button type="button" class="btn btn-primary" onClick={Signup}>
            Kayıt ol
          </button>
        </div>
      </form>
    </div>
  );

  function Signin() {
    // get(ref(db, "users/" + username))
    //   .then((snapshot) => {
    //     if (
    //       snapshot.val().password === password &&
    //       snapshot.val().email === email && password!=="" && email!==""
    //     ) {
    //       alert("Başarıyla giriş Yapıldı");
    //       history("/")
    //     } else if(snapshot.val().password!==password){
    //       alert("Şifre hatalı")
    //     }
    //     else if(snapshot.val().email!==email){
    //       alert("Email hatalı")
    //     }
    //   })
    //   .catch((error) => alert(error.message));
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.email;
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }

  function Signup() {
    // set(ref(db, "users/" + username), {
    //   username: username,
    //   email: email,
    //   password: password,
    // });
    // history("/")

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
}

export default LoginPage;
