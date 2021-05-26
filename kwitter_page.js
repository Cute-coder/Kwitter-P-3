//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBEIslJDC24VsYfLMZkgsXg4GqlcQumAiI",
      authDomain: "kwitter-c-94.firebaseapp.com",
      databaseURL: "https://kwitter-c-94-default-rtdb.firebaseio.com",
      projectId: "kwitter-c-94",
      storageBucket: "kwitter-c-94.appspot.com",
      messagingSenderId: "303130395801",
      appId: "1:303130395801:web:976a7f8e965bbb46d1e408"
    };
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name1:user_name,message:msg,like:0
      });
      document.getElementById("msg").value="";
}