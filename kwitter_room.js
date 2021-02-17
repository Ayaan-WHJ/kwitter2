
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCKz6YQ8GYH-LvFux3P5TlqHXAmEfv9BPA",
      authDomain: "kwitter-bfc67.firebaseapp.com",
      databaseURL: "https://kwitter-bfc67-default-rtdb.firebaseio.com",
      projectId: "kwitter-bfc67",
      storageBucket: "kwitter-bfc67.appspot.com",
      messagingSenderId: "484969481516",
      appId: "1:484969481516:web:8c7afbc913d31ff9889889",
      measurementId: "G-5BVX84HFPW"
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
     var room_name = document.getElementById("room_name").value;

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

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}



























