//Firebase Links
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA-tEEw4ogh_4SlgC3ngWwFOAA22pOwlxA",
    authDomain: "kwitter-web-app-daa71.firebaseapp.com",
    databaseURL: "https://kwitter-web-app-daa71-default-rtdb.firebaseio.com",
    projectId: "kwitter-web-app-daa71",
    storageBucket: "kwitter-web-app-daa71.appspot.com",
    messagingSenderId: "207080918807",
    appId: "1:207080918807:web:e04be112698c6c94d4f152"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    });
    
    document.getElementById("msg").value = "";
  }