//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBXSneQv1-XToe0eLr9UtZmKiDHPwOuNIQ",
      authDomain: "kwitter-46575.firebaseapp.com",
      databaseURL: "https://kwitter-46575-default-rtdb.firebaseio.com",
      projectId: "kwitter-46575",
      storageBucket: "kwitter-46575.appspot.com",
      messagingSenderId: "168233021846",
      appId: "1:168233021846:web:66502e22bdf213eb916db7",
      measurementId: "G-PT4Y8F82CX"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" +name+"<img class ='user_tick' src = 'tick.png' > </h4>";
message_with_tag = "<h4> "+message+"  </h4>";
like_button = "<button class='btn btn-warning' id='+firebase_messsage_id+' value="+like+" onclick='update_like(this.id)'>" ; 
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span> </button> <hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;

document.getElementById("output").innerHTML += row;

function update_like(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementsById(button_id).value;
      updated_likes = Number(likes) + 1 ;
      console.log(update_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });

}



//End code
      } });  }); }
getData();



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
