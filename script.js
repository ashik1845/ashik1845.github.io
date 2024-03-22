  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
  import {getDatabase, ref, set, get, child} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBtX5Z4cmjNe0F8ggLsIHbig4xGXolHedc",
    authDomain: "educycle-2b6ef.firebaseapp.com",
    databaseURL: "https://educycle-2b6ef-default-rtdb.firebaseio.com",
    projectId: "educycle-2b6ef",
    storageBucket: "educycle-2b6ef.appspot.com",
    messagingSenderId: "325194483127",
    appId: "1:325194483127:web:9a6534c6df05492fe05432",
    measurementId: "G-WHNBMPNFE5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const db = getDatabase(app);

  document.getElementById("submit").addEventListener('click',function(e){
    set(ref(db, 'user/' + document.getElementById("name").value),
    {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        password: document.getElementById("password").value,
    });
    alert("Login Successful")
  })