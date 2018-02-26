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

      firebase.auth().signInWithPopup(gmailprovider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;


        console.log(user)


        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

      let sourceCode = '';
      let countryCode = '';
      let categoryCode = '';
      let languageCode = '';
      let tagCode = document.getElementById('inputTag').value;
