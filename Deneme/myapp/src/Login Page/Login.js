import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../Other File/FireBaseConfig.js";
import { set, ref, get } from "firebase/database";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin =async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      alert("Kullanıcı adı veya şifre hatalı");
    }
  };
  
  

  return (
    <div class="d-flex align-items-center justify-content-center mt-5">
      <form
        action="/action_page.php"
        class="was-validated align-items-center justify-content-center"
      >
        <div class="form-group d-inline-flex mb-2">
          <input
            type="email"
            class="form-control w-100"
            id="email"
            placeholder="E-Posta"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </div>
        <br></br>
        <div class="form-group d-inline-flex mb-2">
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Şifre"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </div>
        <br></br>
        <div class="form-group">
          <button
            type="button"
            class="btn btn-primary"
            onClick={handleLogin}
          >
            Giriş Yap
          </button>
        </div>
      </form>
    </div>
  );

  // function Signin() {
  //   signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
  //     const user = userCredential.user;
  //     get(ref(db, "users/" + user.uid[3]))
  //       .then((snapshot) => {
  //         if (
  //           snapshot.val().password === password &&
  //           snapshot.val().email === email &&
  //           password !== "" &&
  //           email !== ""
  //         ) {
  //           alert("Başarıyla giriş Yapıldı");
  //         } else if (snapshot.val().password !== password) {
  //           alert("Şifre hatalı");
  //         } else if (snapshot.val().email !== email) {
  //           alert("Email hatalı");
  //         }
  //       })
  //       .catch((error) => alert(error.message));
  //   });
  // }
  
}
