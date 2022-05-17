const config = {
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
    firebase.initializeApp(config);
    
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start 
      console.log("room_name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names +" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div> <hr>";
      document.getElementById("output").innerHTML += row;  
      //End code
      });});}
getData();

 username = localStorage.getItem("username");
      
document.getElementById("user_name").innerHTML = "welcome" + username +  
 
 function add_user()
{
    username = document.getElementById("username").value;
    firebase.database().ref("/").child(username).update({
        purpose: "adding_user"
    })
}

function add_room()
{
    roomname = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
    });

localStorage.setItem("room_name" , room_name);
window.location = "kwitter_page.html";


}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "kwitter_page.html";
}

function log_out()
{
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location = "index.html";

}