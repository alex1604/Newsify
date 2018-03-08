console.log("mainJS");

let signedInNowOrBefore = "before"

let whenLoggedIn = document.getElementById("whenLoggedIn");

let addTagBtn = document.getElementById("addTag");

let allUsers = []


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

    console.log("log-in button");

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
    console.log(response);
    if (response.status == 'unknown' || response.status == 'not_authorized') {
      FB.login(function (response) {
        if (response.authResponse) {
          
          accessToken = response.accessToken;

          signedInNowOrBefore = "now";
          firebase.auth().signInWithPopup(fbProvider).then(function(response){
            console.log(response);
            uid = response.user.uid;
            console.log(uid + ' first');
            uemail = response.additionalUserInfo.profile.email;
            console.log(uemail + ' first');
            uname = response.additionalUserInfo.profile.name;
            console.log(uname + ' first');
            upicture = response.additionalUserInfo.profile.picture.data.url;
            console.log(upicture);

            console.log(response);
            console.log('success authenticating fb in database');
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
      FB.getAuthResponse(function (response) {
        if (response != null) {
          uid = response.authResponse.userID;
          console.log(uid + ' second');
          accessToken = response.authResponse.accessToken;
          signedInNowOrBefore = "before";
          firebase.auth().signInWithPopup(fbProvider).then(function(){
            console.log('success authenticating fb in database');
          
          })
          .catch(function(){
            console.log('error authenticating fb in database');
          });

        } else {
          console.log('there was a problem loading your facebook user information. Please sign out and in again.');
        }
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
      localStorage.removeItem("userHeader");
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
      console.log("finns inte")
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

      console.log("finns")


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
      console.log("finns inte")
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

      console.log("finns")


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


    whenLoggedIn.style.display = "block"

    document.getElementById("tagsSliderContentChange").innerHTML = "";
    document.getElementById("tagsSliderContentChange").innerHTML = "<ul class='tags'>Scroll through your saved tags</ul>";


    tagsContentChangeWidth = tagsSlider.tagsContentChange.offsetWidth;


    addTagBtn.style.display = "inline-block";


    if (signedInNowOrBefore === "before") {


    }





    if (signedInNowOrBefore === "before") {



    }

    //when the user is logged in, runs loginHeader


    loginHeader(user);
    var search = firebase.database().ref("users/").orderByChild(user.uid);
    sammaid = user.uid;
    firebaseInsertUser(user.uid, user.displayName, user.photoURL, user.email)
    // User is signed in.
    // Put in the displayname change and whatnot?
  } else {
    console.log("logged out");
    addTagBtn.style.display = "none";
    whenLoggedIn.style.display = "none";

    // No user is signed in.
  }
});

console.log(tagsSlider.tagsPrevBtn)





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

  /*let fb_share = document.createElement('div');
  fb_share.classList.add('fb-share-button')
  fb_share.attr('data-layout') = 'button_count';
  fb_share.atrr('data-size') = 'large';
  fb_share.attr('data-mobile-iframe') = 'true';
  let fb_a = document.createElement('a');
  fb_a.classList.add('fb-xfbml-parse-ignore')
  fb_a.target = '_blank';
  fb_a.href = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
  fb_a.innerHTML = 'Share';*/

  //fb_share.appendChild(fb_a);

  let fb_share = document.createElement('button');
  fb_share.type = 'button';
  fb_share.classList.add('fb-share');
  fb_share.innerHTML = 'Share on Facebook';
  fb_share.name = '';

  readMore.appendChild(a);

  pinkAndTitle.appendChild(pinkLine);
  pinkAndTitle.appendChild(title);
  pinkAndTitle.appendChild(sumUp);
  pinkAndTitle.appendChild(readMore);
  pinkAndTitle.appendChild(fb_share);
  pinkAndTitle.appendChild(saveToFavourites)
  pinkAndTitle.appendChild(shareArticle);
  pinkAndTitle.appendChild(commentArticle);
  //pinkAndTitle.appendChild(fb_share);
  /*
 <div class="fb-share-button" data-href="https://developers.facebook.com
 /docs/plugins/" data-layout="button_count" data-size="large"
 data-mobile-iframe="true"><a target="_blank" href=
 "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.
 facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
 class="fb-xfbml-parse-ignore">Compartir</a></div>
  */

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


  //Jonathans kod //

  mainContent.addEventListener("click", function (e) {

    if (e.target.className === "readMoreLink") {

      // let href = e.target.getAttribute("href")
      // let divIframe = document.getElementById("iframe");
      //
      // let iframeElement = document.createElement("iframe");
      // iframeElement.setAttribute("src", href);
      // iframeElement.setAttribute("id", "contact");
      // iframeElement.setAttribute("allowtransparency", "true");
      // iframeElement.setAttribute("frameborder","0")
      // iframeElement.setAttribute("scrolling","yes")
      // iframeElement.setAttribute("width","100%")
      // iframeElement.setAttribute("height","500px")
      // iframeElement.setAttribute("frameborder","0")
      // iframeElement.setAttribute("align","center")
      //
      // divIframe.appendChild(iframeElement)


      // <!-- <iframe id="contact" src="http://www.bbc.com/news/world-middle-east-43219614" allowtransparency="true" frameborder="0" scrolling="yes" width="100%" height="500px" align="center"></iframe> -->

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
  let fbShare = document.getElementsByClassName('fb-share');


  let count = 0;

  do {

    titles[count].innerHTML = array[count].title;
    descriptions[count].innerHTML = array[count].description;
    images[count].src = array[count].urlToImage;
    readMore[count].href = array[count].url;
    fbShare[count].name = array[count].url;
    count++;

  } while (count < number);

  let fbBtn = document.getElementsByClassName('fb-share');
  console.log(fbBtn);

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
      console.log(myArticles)

      browseNews(myArticles, amount);
    })
    .catch(function () {
      console.log('failed');
    });
}