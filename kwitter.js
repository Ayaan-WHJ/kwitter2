//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyCSyNWlBpAGipltguI40izKHlXoDl6x_kM",
  authDomain: "chatter2-34c6b.firebaseapp.com",
  databaseURL: "https://chatter2-34c6b-default-rtdb.firebaseio.com",
  projectId: "chatter2-34c6b",
  storageBucket: "chatter2-34c6b.appspot.com",
  messagingSenderId: "993542213806",
  appId: "1:993542213806:web:1a2a3c1a36463bc9479d3f",
  measurementId: "G-SPS2CFL9VQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id="+Room_names+"onclick = 'redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
  purpose: "adding room name"            
  });
  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html";

}