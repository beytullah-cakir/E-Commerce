import {createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth,db} from "../Other File/FireBaseConfig.js";
import { Link,useNavigate } from "react-router-dom";
import { set, ref, get } from "firebase/database";


export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (user) {
        await set(ref(db, 'users/' + user.uid), {
          username: username,
          email: email
        });
        navigate('/login');
      }
    } catch (error) {
      console.log('Kayıt başarısız: ' + error.message);
    }
  };
  return (<>
    <div class="d-flex align-items-center justify-content-center mt-5">
      <form
        action="/action_page.php"
        class="was-validated align-items-center justify-content-center"
      >
        <div class="form-group d-inline-flex">
          <input
            type="text"
            class="form-control w-100"
            id="username"
            placeholder="Kullanıcı Adı "
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          ></input>
        </div>
        
        <br></br>
        <div class="form-group d-inline-flex">
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
        <div class="form-group d-inline-flex">
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
          <button type="button" class="btn btn-primary" onClick={handleSignup}>
            Kayıt Ol
          </button>
        </div>
      </form>
    </div>
   
    
    </>
  );

  function SignUp(e) {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{
        const user = userCredential.user;
        set(ref(db, "users/"+ user.uid[3]), {
          email: email,
          password: password,
        });
    });

    
      
    
  
  }
}
