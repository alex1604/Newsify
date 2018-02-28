console.log("mainJS");
let login = document.getElementById("login");

      var config = {
        apiKey: "AIzaSyA2gS2ewiVDjqM1mPymAIrHEtmwlw4jsT8",
        authDomain: "newschaos-e8558.firebaseapp.com",
        databaseURL: "https://newschaos-e8558.firebaseio.com",
        projectId: "newschaos-e8558",
        storageBucket: "newschaos-e8558.appspot.com",
        messagingSenderId: "695749409670"
      };
      firebase.initializeApp(config);

      const db = firebase.database()



      let gmailprovider = new firebase.auth.GoogleAuthProvider();

      login.addEventListener("click", function(event){
        //simple click event on the "login" div
              firebase.auth().signInWithPopup(gmailprovider).then(function(result) {
                  console.log("log-in button");
                  }).catch(function(error) {
                  console.log("Error: " + error);
              })
      });

let loginHeader = function(user){
            /*// This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.*/
            // creates element in header for the user with username, profile picture
            // and a sign-out button replaces the one already there
            var header = document.getElementsByTagName("header")[0];
            let loggedIn = document.createElement("div");
            let userName = document.createElement("div");
            let userPicture = document.createElement("img");
            let signOut = document.createElement("div");
            userPicture.src = user.photoURL;
            userPicture.alt = "user image";
            userPicture.className = "userPicture"
            userName.innerText = user.displayName;
            userName.className = "userName";
            signOut.innerText = "log out";
            signOut.addEventListener("click", function(){
              firebase.auth().signOut().then(function(){
                  var header = document.getElementById("header");
                  header.removeChild(header.lastChild);
                  document.getElementById("login").style.display = "";
                  localStorage.removeItem("userHeader");
              }).catch(function(error){
                  console.log("error: " + error);
              })
            });
            signOut.className = "signOut";
            loggedIn.className = "loggedIn";
            loggedIn.appendChild(userName);
            loggedIn.appendChild(userPicture);
            loggedIn.appendChild(signOut);
            login.style.display = "none";
            header.appendChild(loggedIn);
            console.log("success");
}

let firebaseInsertUser = function (userID, userName, userPicture, userMail){
  //adds user to database with username, email, photourl
  var database = firebase.database;
  database().ref("/users/" + userID).set({
    username: userName,
    photoURL: userPicture,
    email: userMail,
    tags : {
      example: "example",
    },
    favourites: {
      example: "example",
    },
  })
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //when the user is logged in, runs loginHeader
      loginHeader(user);
      var search = firebase.database().ref("users/").orderByChild(user.uid);
      console.log(search);
      firebaseInsertUser(user.uid, user.displayName, user.photoURL, user.email)
      // User is signed in.
      // Put in the displayname change and whatnot?
  } else {
      console.log("logged out");
    // No user is signed in.
  }
});

let sourceCode = '';
let countryCode = '';
let categoryCode = '';
let languageCode = '';
