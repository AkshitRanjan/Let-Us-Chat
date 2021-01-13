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

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}
function getData()
{
  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      room_names = childKey;
      console.log("Room Name: " + room_names);
      row = "<div class = 'room_name' id = " + room_names + "onclick = 'redirectToRoomName(this.id)'>#" + room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row; 
    });
  });
}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
getData();