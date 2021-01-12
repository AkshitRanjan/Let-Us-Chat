//Google Firebase links
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    room_names = childKey;
    //Start the code
    var firebaseConfig = {
        apiKey: "AIzaSyCO2zsLuivPr0nlvx8OAUlKoDru-htoOlU",
        authDomain: "let-s-chat-2abcd.firebaseapp.com",
        databaseURL: "https://let-s-chat-2abcd-default-rtdb.firebaseio.com",
        projectId: "let-s-chat-2abcd",
        storageBucket: "let-s-chat-2abcd.appspot.com",
        messagingSenderId: "236488985162",
        appId: "1:236488985162:web:73891732a9b20717ad34b3"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      //End the code
});});}
getData();