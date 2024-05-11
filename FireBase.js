import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
        import {
            getDatabase,
            ref,
            set,
            get,
            child,
        } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

        const firebaseConfig = {
            apiKey: "AIzaSyCoZq46U8TmPW5CoUcTM0rZZmUvPyaGglQ",
            authDomain: "alisverissitesi-73562.firebaseapp.com",
            databaseURL: "https://alisverissitesi-73562-default-rtdb.firebaseio.com",
            projectId: "alisverissitesi-73562",
            storageBucket: "alisverissitesi-73562.appspot.com",
            messagingSenderId: "248258162386",
            appId: "1:248258162386:web:bb1b802973fd4ace11870b",
            measurementId: "G-G2MG766T39",
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);


        document.getElementById("submit").addEventListener("click", (e) => {
            e.preventDefault();
            set(ref(db, "users/" + document.getElementById("name").value), {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,
            });
        });

        document.getElementById("read").addEventListener("click", (e) => {
            let kullanici_adi = document.getElementById("name").value;
            let sifre = document.getElementById("password").value;

            e.preventDefault();
            get(ref(db, "users/")).then((snapshot) => {
                let info=[,,];
                for(const i in snapshot.val()){
                    for(const s in snapshot.val()[i]){
                        
                        return;
                    }
                    
                }
            })
        })