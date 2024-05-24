import { createUserWithEmailAndPassword} from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { set, ref } from "firebase/database";
import { auth, db } from "./FireBase.js";

export default function Register() {
  //inputa girilen kullanıcı adını döndürür
  const [username, setUsername] = useState("");
  //inputa girilen parolayı döndürür
  const [password, setPassword] = useState("");
  //inputa girilen e-postayı döndürür
  const [email, setEmail] = useState("");
  //istenilen durumda istenilen sayfaya gitmemize yarayan bir fonksiyondur
  const navigate = useNavigate();

  //kullanıcı adı, parola ve e-posta girildikten sonra kaydolma işlemini yapan fonksiyondur
  const handleSignup = (e) => {
    //sayfanın kontrolünü bize bırakır
    e.preventDefault();
    try {
      //parola ve e-posta ile kullacıyı authentication veri tabanına kaydeder
      const userCredential = createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //burada ise kullanıcı adını, şifreyi ve e-postayı realtime database'e kaydeder
      set(ref(db, "users/" + username), {
        username: username,
        email: email,
        password: password,
      });
      //giriş sayfasına gider
      navigate("/login");
    } catch (error) {
      //Kullanıcıyı oluşturmadığı anda hata verir
      console.log("Kayıt başarısız: " + error.message);
    }
  };


  //Kullanıcı kayıt sayfasını oluştur
  return (
    <>
      <div class="d-flex align-items-center justify-content-center mt-5">
        <form
          action="/action_page.php"
          class="was-validated align-items-center justify-content-center"
        >
          <div class="form-group d-inline-flex mb-2">
            <input
              type="text"
              class="form-control w-100"
              id="username"
              placeholder="Kullanıcı Adı"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            ></input>
          </div>

          <br></br>
          <div class="form-group d-inline-flex mb-2">
            <input
              type="email"
              class="form-control w-100"
              id="email"
              placeholder="E-posta"
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
          <div>
            <p>
              Zaten bir <Link to="/login">hesabım </Link> var
            </p>
          </div>
          <div class="form-group">
            <button type="button" class="btn" onClick={handleSignup}>
              Kayıt Ol
            </button>
          </div>
        </form>
      </div>
    </>
  );

  // function SignUp(e) {
  //   createUserWithEmailAndPassword(auth, email, password).then(
  //     (userCredential) => {
  //       const user = userCredential.user;
  //       set(ref(db, "users/" + user.uid[3]), {
  //         email: email,
  //         password: password,
  //       });
  //     }
  //   );
  // }
}
