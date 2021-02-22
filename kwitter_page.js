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
console.log (firebase_message_id);
console.log(message_data);
var name = message_data['name'];
var message = message_data['message'];
var like = message_data['like'];
name_with_tag = "<h4>"+name+ "<img class = 'user_tick' src = 'tick.png'></h4>";
message_with_tag = "<h4 class = 'message_h4'>"+message+"</h4>";
like_button = "<button class = 'btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'> ";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
row = name_with_tag + message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }

      function updateLike(message_id){
            console.log("clicked on  like button - "+ message_id);
            button_id = message_id;
                  likes  = document.getElementById(button_id).value;
                  update_likes = Number(likes)+1;
            console.log(update_likes);
            firebase.database().ref(room_name).child(message_id).update({
                  like:updated_likes
            });
                  
      }


getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace = "index.html";
}
