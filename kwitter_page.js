//YOUR FIREBASE LINKS
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
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

