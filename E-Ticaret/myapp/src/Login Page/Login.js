import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./FireBase.js";
import { useNavigate } from "react-router-dom";


export default function Login() {
  //inputa girilen parolayı döndürür
  const [password, setPassword] = useState("");
  //inputa girilen e-postayı döndürür
  const [email, setEmail] = useState("");
  //istenilen durumda istenilen sayfaya gitmemize yarayan bir fonksiyondur
  const navigate = useNavigate();

  //kullanıcın bilgilerini l-kontrol eden fonksiyon
  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      //Kullanıcın bilgilerini kontrol eder
      await signInWithEmailAndPassword(auth, email, password);
      //eğer bilgiler doğruysa ana sayfaya gider
      navigate("/");
    } catch (error) {
      //eğer bilgiler yanlış ise uyarı verir
      alert("Kullanıcı adı veya şifre hatalı");
    }
  };

  ////Kullanıcı gitiş sayfasını oluştur

  return (
    <div class="d-flex align-items-center justify-content-center mt-5">
      <form
        action="/action_page.php"
        class="was-validated align-items-center justify-content-center"
      >
        <div class="form-group d-inline-flex mb-2">
          <input
            type="text"
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
          <button type="button" class="btn" onClick={handleLogin}>
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
