console.log("mainJS");

let signedInNowOrBefore = "before"

let whenLoggedIn = document.getElementById("whenLoggedIn");

let addTagBtn = document.getElementById("addTag");

let deleteOwnTag = document.getElementById("deleteOwnTag");
let allUsers = []

let commentBox;


whenLoggedIn.style.display = "none";



let tagsContentChangeWidth = ""

let login = document.getElementById("googleLogo");
let loginFb = document.getElementById("facebookLogo");

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

login.addEventListener("click", function (event) {
  //simple click event on the "login" div
  firebase.auth().signInWithPopup(gmailprovider).then(function (result) {

    //console.log("log-in button");

    signedInNowOrBefore = "now";
  }).catch(function (error) {
    console.log("Error: " + error);
  })
});

var fbProvider = new firebase.auth.FacebookAuthProvider();

loginFb.addEventListener("click", function () {
  //simple click event on the "facebook login" div

  let uid = '';
  let uname = '';
  let upicture = '';
  let uemail = '';
  let accessToken = '';

  FB.getLoginStatus(function (response) {
    //console.log(response);
    if (response.status == 'unknown' || response.status == 'not_authorized') {
      FB.login(function (response) {
        if (response.authResponse) {

          accessToken = response.accessToken;

          signedInNowOrBefore = "now";
          firebase.auth().signInWithPopup(fbProvider).then(function(response){
            //console.log(response);
            uid = response.user.uid;
            //console.log(uid + ' first');
            uemail = response.additionalUserInfo.profile.email;
            //console.log(uemail + ' first');
            uname = response.additionalUserInfo.profile.name;
            //console.log(uname + ' first');
            upicture = response.additionalUserInfo.profile.picture.data.url;
            //console.log(upicture);

            //console.log(response);
            //console.log('success authenticating fb in database');
          firebaseInsertUserFacebook(uid, uname, upicture, uemail);
          })
          .catch(function(){
            console.log('error authenticating fb in database');
          });

        } else {
          console.log('User cancelled login');
        }
      },
        { scope: 'public_profile,email' })

    } else {
          firebase.auth().signInWithRedirect(fbProvider);
          firebase.auth().getRedirectResult().then(function(result) {
            if (result.credential) {
              console.log(result);
              uid = response.publicProfile.id;
            console.log(uid + ' first');
            uemail = response.additionalUserInfo.profile.email;
            console.log(uemail + ' first');
            uname = response.additionalUserInfo.profile.name;
            console.log(uname + ' first');
            upicture = response.additionalUserInfo.profile.picture.data.url;
            console.log(upicture);
              firebaseInsertUserFacebook(uid, uname, upicture, uemail);
            }
          })
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            console.log(errorCode);
            var errorMessage = error.message;
            console.log(errorMessage);
          });
        }
      });
    });

let loginHeader = function (user) {
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


  signOut.addEventListener("click", function () {
    firebase.auth().signOut().then(function () {
      var header = document.getElementById("header");
      header.removeChild(header.lastChild);
      document.getElementById("login").style.display = "";
      document.getElementById("loginFb").style.display = "";
    })
    .then(function(){
      FB.logout();
    })
    .catch(function (error) {
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

let id = ""


let firebaseInsertUserFacebook = function (userID, userName, userPicture, userMail) {
  //adds user to database with username, email, photourl


  db.ref("users").once("value", function (snapshot) {

    let obj = snapshot.val()
    for (let prop in obj) {
      allUsers.push(prop);

    }


    for (let i = 0; i < allUsers.length; i++) {

      if (userID === allUsers[i]) {
        id = allUsers[i];
      }

    }


    if (id === "") {
      //console.log("finns inte")
      var database = firebase.database;
      database().ref("/users/" + userID).set({
        username: userName,
        photoURL: userPicture,
        email: userMail,
        tags: {

        },
        favourites: {
          example: "example",
        },
      })


    } else {

      //console.log("finns")


      db.ref("users/" + id + "/tags").once("value", function (snapshot) {

        let obj = snapshot.val()

        let tagsSliderContentChange = document.getElementById("tagsSliderContentChange")

        for (let prop in obj) {
          let ul = document.createElement("ul");
          ul.className = "tags";
          ul.innerHTML = obj[prop];
          tagsSliderContentChange.appendChild(ul)


        }




      })





    }

  })


}



let firebaseInsertUser = function (userID, userName, userPicture, userMail) {
  //adds user to database with username, email, photourl


  db.ref("users").once("value", function (snapshot) {

    let obj = snapshot.val()
    for (let prop in obj) {
      allUsers.push(prop)

    }


    for (let i = 0; i < allUsers.length; i++) {

      if (userID === allUsers[i]) {
        id = allUsers[i]
      }

    }


    if (id === "") {
      //console.log("finns inte")
      var database = firebase.database;
      database().ref("/users/" + userID).set({
        username: userName,
        photoURL: userPicture,
        email: userMail,
        tags: {

        },
        favourites: {
          example: "example",
        },
      })


    } else {

db.ref("/users/" + userID + "/photoURL").set(userPicture);

      db.ref("users/" + id + "/tags").once("value", function (snapshot) {

        let obj = snapshot.val()

        let tagsSliderContentChange = document.getElementById("tagsSliderContentChange")

        for (let prop in obj) {
          let ul = document.createElement("ul");
          ul.className = "tags";
          ul.innerHTML = obj[prop];
          tagsSliderContentChange.appendChild(ul)


        }




      })





    }

  })


}



firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    localStorage.setItem("username", user.displayName);
    localStorage.setItem("photoURL", user.photoURL);
    localStorage.setItem("userid", user.uid);
    //puts in related data in localstorage, feel free to use for functions

    whenLoggedIn.style.display = "block"

    document.getElementById("tagsSliderContentChange").innerHTML = "";
    document.getElementById("tagsSliderContentChange").innerHTML = "<ul class='tags'>Scroll through your saved tags</ul>";


    tagsContentChangeWidth = tagsSlider.tagsContentChange.offsetWidth;


    addTagBtn.style.display = "inline-block";

    //when the user is logged in, runs loginHeader


    loginHeader(user);
    var search = firebase.database().ref("users/").orderByChild(user.uid);
    sammaid = user.uid;
    firebaseInsertUser(user.uid, user.displayName, user.photoURL, user.email)
    // User is signed in.
    // Put in the displayname change and whatnot?
  } else {
    //console.log("logged out");
    localStorage.clear(); //clears the localstorage for the next user
    addTagBtn.style.display = "none";
    whenLoggedIn.style.display = "none";

    // No user is signed in.
  }
});



let sourceCode = '';
let countryCode = '';
let categoryCode = '';
let languageCode = '';

const key = 'apiKey=ca2d5b8c76a84ec68544ecdeadf04043';
let urlBase = 'https://newsapi.org/v2/top-headlines';
let question = '?';

let searchArray = [];
let completeSearchArray = [];

let queryString = 'q=';
let category = 'category=';
let language = 'language=';
let country = 'country=';
let source = 'sources=';
let searchBtn = document.getElementById('searchBtn');

let main = document.getElementsByTagName('main')[0];

let myArticles = [];

var createNews = function () {

  let article = document.createElement('article');
  let blackLine = document.createElement('div');
  blackLine.classList.add('blackLine');
  let mainContent = document.createElement('div');
  mainContent.classList.add('mainContent');

  let pinkAndTitle = document.createElement('div');
  pinkAndTitle.classList.add('pinkAndTitle');

  let pinkLine = document.createElement('div');
  pinkLine.classList.add('pinkLine');

  let title = document.createElement('div');
  title.classList.add('title');

  let sumUp = document.createElement('p');
  sumUp.classList.add('sumUp');

  let readMore = document.createElement('div');
  readMore.classList.add('readMore');
  let readMore2 = document.createElement('div');
  readMore.classList.add('readMore');
  let a = document.createElement('a');
  a.classList.add('readMoreLink');
  a.target = '_blank';
  a.innerHTML = 'Read full article...';

  // added save , share and comments links to articles - Jonas
  let saveToFavourites = document.createElement('a');
  let shareArticle = document.createElement('a');
  let commentArticle = document.createElement('a');

  saveToFavourites.className = 'newsFooter saveToFavourite';

  let saveIcon = document.createElement('i');
     saveIcon.className = 'far fa-star';
     saveToFavourites.appendChild(saveIcon);
  let saveToFavouritesText = document.createElement('span');
  saveToFavouritesText.className = 'newsFooterSpan';
  saveToFavouritesText.innerText = 'Save';
  saveToFavourites.appendChild(saveToFavouritesText);

  shareArticle.className = 'newsFooter shareArticle';

  let shareIcon = document.createElement('i');
    shareIcon.className = 'fas fa-share-alt';
    shareArticle.appendChild(shareIcon);
  let shareArticleText = document.createElement('span');
  shareArticleText.className = 'newsFooterSpan';
  shareArticleText.innerText = 'Share';
  shareArticle.appendChild(shareArticleText);

  commentArticle.className = 'newsFooter commentArticle';

  let commentIcon = document.createElement('i');
    commentIcon.className = 'far fa-comment';
    commentArticle.appendChild(commentIcon);
  let commentArticleText = document.createElement('span');
  commentArticleText.className = 'newsFooterSpan';
  commentArticleText.innerText = 'Comment';
  commentArticle.appendChild(commentArticleText);
// end of save,share,comment


  let commentContainer = document.createElement("div");
  commentContainer.className = "commentContainer";
  let commentDropDown = document.createElement("button");
  commentDropDown.innerText = "comments" + /*amount of comments*/ "(0)";
  commentDropDown.className = "commentDropDown";
  commentDropDown.addEventListener("click", function(event){
    if (event.target.parentElement.children.length == 1){
    let targetUrl = event.target.parentNode.parentNode.children[1].href;
    db.ref("/Articles/").once("value", function(snapshot){
      var found = "unfound";
      for (var item in snapshot.val()){
        if (snapshot.val()[item].saveUrl == targetUrl){
          for (var comment in snapshot.val()[item].comments){
            let commentWhole = document.createElement("div");
            let commentText = document.createElement("div");
            let commentUsername = document.createElement("div");
            let commentUserPicture = document.createElement("img");
            commentText.innerText = snapshot.val()[item].comments[comment].content;
            commentText.className = "commentText";
            commentUsername.innerText = snapshot.val()[item].comments[comment].username;
            commentUsername.className = "commentUsername";
            commentUserPicture.src = snapshot.val()[item].comments[comment].photoURL;
            commentUserPicture.className = "commentUserPicture";
            commentUserPicture.alt = "Userpic";
            commentWhole.appendChild(commentUserPicture);
            commentWhole.appendChild(commentUsername);
            commentWhole.appendChild(commentText);
            event.target.parentElement.insertBefore(commentWhole, event.target.parentElement.childNodes[3])
          }
          found = "found";
        }
      }
      if (found == "unfound"){
        db.ref("/Articles/").push({
          saveDescription: event.target.parentNode.parentNode.parentNode.children[2].innerText,
          saveTitle: event.target.parentNode.parentNode.parentNode.children[1].innerText,
          saveUrl: targetUrl,
          saveUrlImage: event.target.parentNode.parentNode.parentNode.parentNode.children[1].firstChild.src,
          comments: {
          }
        })
      }
    })
      let writeBox = document.createElement("textarea");
      writeBox.type = "input";
      writeBox.placeholder = "Input your comment here";
      writeBox.className = "writeBox";
      writeBox.addEventListener("keyup", function(event){
        //Comments if user clicks enter
        if (event.key == "Enter"){
          //console.log(event.target);
          let text = event.target.parentElement.childNodes[1].value;
          event.target.parentElement.childNodes[1].value = "";
          if (text !== ""){
            let commentWhole = document.createElement("div");
            let commentText = document.createElement("div");
            let commentUsername = document.createElement("div");
            let commentUserPicture = document.createElement("img");
            commentText.innerText = text;
            commentText.className = "commentText";
            commentUsername.innerText = localStorage.getItem("username");
            commentUsername.className = "commentUsername";
            commentUserPicture.src = localStorage.getItem("photoURL");
            commentUserPicture.className = "commentUserPicture";
            commentUserPicture.alt = "Userpic";
            commentWhole.appendChild(commentUserPicture);
            commentWhole.appendChild(commentUsername);
            commentWhole.appendChild(commentText);
            event.target.parentElement.insertBefore(commentWhole, event.target.parentElement.childNodes[3]);
            firebase.database().ref("/Articles/").once("value", function(snapshot){
              let snap = snapshot.val();
              for (var item in snap){
                if (snap[item].saveUrl == event.target.parentNode.parentNode.lastChild.href){
                  firebase.database().ref("/Articles/" + item + "/comments/").push({
                    content: text,
                    username: localStorage.getItem("username"),
                    photoURL: localStorage.getItem("photoURL"),
                    userID: localStorage.getItem("userid"),
                  })
                }
              }
            })
          }
        }
      });
    let commentButton = document.createElement("button");
    //comments if user clicks the comment button
    commentButton.innerText = "Comment";
    commentButton.className = "commentButton";
    commentButton.addEventListener("click", function(event){
      //console.log(event.target);
      let text = event.target.parentElement.childNodes[1].value;
      event.target.parentElement.childNodes[1].value = "";
      if (text !== ""){
        let commentWhole = document.createElement("div");
        let commentText = document.createElement("div");
        let commentUsername = document.createElement("div");
        let commentUserPicture = document.createElement("img");
        commentText.innerText = text;
        commentText.className = "commentText";
        commentUsername.innerText = localStorage.getItem("username");
        commentUsername.className = "commentUsername";
        commentUserPicture.src = localStorage.getItem("photoURL");
        commentUserPicture.className = "commentUserPicture";
        commentUserPicture.alt = "Userpic";
        commentWhole.appendChild(commentUserPicture);
        commentWhole.appendChild(commentUsername);
        commentWhole.appendChild(commentText);
        event.target.parentElement.insertBefore(commentWhole, event.target.parentElement.childNodes[3]);
        firebase.database().ref("/").push({
          content: text,
          user: localStorage.getItem("username"),
          photoURL: localStorage.getItem("photoURL"),
          userID: localStorage.getItem("userid"),
        })
      }
    });
    event.target.parentElement.append(writeBox);
    event.target.parentElement.append(commentButton);
    }
    else if (event.target.parentElement.children.length > 1){
      while (event.target.parentElement.children.length > 1){
        event.target.parentElement.removeChild(event.target.parentElement.lastChild);
      }
    }
  })
  commentContainer.appendChild(commentDropDown);
  readMore.appendChild(commentContainer)
  readMore.appendChild(a);

  pinkAndTitle.appendChild(pinkLine);
  pinkAndTitle.appendChild(title);
  pinkAndTitle.appendChild(sumUp);
  pinkAndTitle.appendChild(readMore);
  pinkAndTitle.appendChild(saveToFavourites);
  pinkAndTitle.appendChild(shareArticle);
  pinkAndTitle.appendChild(commentArticle);
  //pinkAndTitle.appendChild(fb_share);


  let articleImage = document.createElement('div');
  articleImage.classList.add('articleImage');
  let img = document.createElement('img');
  img.classList.add('articleImageLink');

  articleImage.appendChild(img);

  mainContent.appendChild(pinkAndTitle);
  mainContent.appendChild(articleImage);

  article.appendChild(blackLine);
  article.appendChild(mainContent);

  main.appendChild(article);
  mainContent.addEventListener("click", function (e) {

    if (e.target.className === "readMoreLink") {

      let href = e.target.getAttribute("href");

      window.open(href,'_blank');

    }

  })

}

var browseNews = function (array, number) {

  for (i = number; i > 0; i--) {
    createNews();
  }

  let titles = document.getElementsByClassName('title');
  let descriptions = document.getElementsByClassName('sumUp');
  let images = document.getElementsByClassName('articleImageLink');
  let readMore = document.getElementsByClassName('readMoreLink');
  let fbShare = document.getElementsByClassName('shareArticle');


  let count = 0;

  do {

    titles[count].innerHTML = array[count].title;
    descriptions[count].innerHTML = array[count].description;
    if (array[count].urlToImage == null){
      images[count].src = 'img/default.png';
    } else {
      images[count].src = array[count].urlToImage;
    }
    readMore[count].href = array[count].url;
    fbShare[count].name = array[count].url;
    count++;

  } while (count < number);

  let fbBtn = document.getElementsByClassName('shareArticle');

  for (let x of fbBtn) {
    x.addEventListener('click', function () {
      let fbUrl = x.name;
      FB.ui({
        method: 'share',
        href: fbUrl,
      }, function (response) { });
    });

  }

}

var getAllNews = function () {

  let url = urlBase + question + 'country=us&' + key;
  let req = new Request(url);

  fetch(req)
    .then(function (response) {
      return response.json();

    }).then(function (object) {

      let articles = object.articles;

      let amount = 12;

      for (article in articles) {

        if (amount > 0 && articles[article] != 'undefined' && articles[article] != null && articles[article] != '') {

          myArticles.push(articles[article]);



        } else {
          break;
        }

        amount--;
      }
      amount = myArticles.length;
      //console.log(myArticles)

      browseNews(myArticles, amount);
    })
    .catch(function (error) {
      console.log('failed', error);
    });
}
