console.log("mainJS");

let signedInNowOrBefore = "before"

let whenLoggedIn = document.getElementById("whenLoggedIn");

let addTagBtn = document.getElementById("addTag");

let allUsers = []

whenLoggedIn.style.display = "none";



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

                    signedInNowOrBefore = "now";
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


  db.ref("users").once("value",function(snapshot){

      let obj = snapshot.val()
      for(let prop in obj){
          allUsers.push(prop)
      }


      for(let i=0; i< allUsers.length; i++){

          if(userID === allUsers[i]){
            console.log(allUsers[i])
          }

      }

  })

  var database = firebase.database;
  database().ref("/users/" + userID).set({
    username: userName,
    photoURL: userPicture,
    email: userMail,
    tags : {
      example: "Saved articles",
    },
    favourites: {
      example: "example",
    },
  })
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {


    whenLoggedIn.style.display = "block"

    let tagsContentChangeWidth = tagsSlider.tagsContentChange.offsetWidth;


    addTagBtn.style.display ="inline-block";

    console.log(signedInNowOrBefore)

        if(signedInNowOrBefore === "before"){

                tagsSlider.tagsNextBtn.addEventListener("click",function(){

                  let tagsContentChangeLength = tagsSlider.tagsContentChange.children.length;
                  sliderFunctionRight(tagsContentChangeLength, tagsTotalLeft, tagsContentChangeWidth, tagsSlider.tagsContentChange, tagsSwitch, tagsSlider.tagsNextBtn, tagsSlider.tagsPrevBtn)

                  if(tagsMinusSlide>1){

                      beforeLoggedIn.style.display = "none"
                  }

                })
        }





        if(signedInNowOrBefore === "before"){


            tagsSlider.tagsPrevBtn.addEventListener("click",function(){

              let tagsContentChangeLength = tagsSlider.tagsContentChange.children.length;
              tagsTotalLeft = tagsMinusSlide * tagsContentChangeWidth;

              tagsTotalLeft = tagsTotalLeft - (tagsContentChangeWidth *2);
              tagsTotalLeft = tagsTotalLeft.toString();

              tagsTotalLeft =  "-" +tagsTotalLeft + "px";


              if(tagsMinusSlide>1){



                tagsSlider.tagsContentChange.style.marginLeft = tagsTotalLeft;


                tagsMinusSlide--

                console.log(tagsMinusSlide)

                 if(tagsMinusSlide === 1){

                    tagsSlider.tagsPrevBtn.style.opacity = "0"
                  }
                  if(tagsMinusSlide < tagsContentChangeLength){
                    tagsSlider.tagsNextBtn.style.opacity = "1"

                  }

                  if(tagsMinusSlide===1){

                    beforeLoggedIn.style.display = "block"
                  }
                // languageSwitch(languageMinusSlide)



              }

            });
      }


      addTagBtn.addEventListener("click",function(){

          if(document.getElementById("currentTag").innerText !== ""){

             db.ref("users/"+ user.uid + "/tags").push(document.getElementById("currentTag").innerText)


          }




      })




    //when the user is logged in, runs loginHeader


      loginHeader(user);
      var search = firebase.database().ref("users/").orderByChild(user.uid);
      console.log(user.uid);
      firebaseInsertUser(user.uid, user.displayName, user.photoURL, user.email)
      // User is signed in.
      // Put in the displayname change and whatnot?
  } else {
      console.log("logged out");
      addTagBtn.style.display = "none";
      whenLoggedIn.style.display =  "none";

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

var createNews = function (){

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

   readMore.appendChild(a);

   pinkAndTitle.appendChild(pinkLine);
   pinkAndTitle.appendChild(title);
   pinkAndTitle.appendChild(sumUp);
   pinkAndTitle.appendChild(readMore);

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

  mainContent.addEventListener("click",function(e){

    if(e.target.className=== "readMoreLink"){

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

var browseNews = function (array,number){

  for (i = number; i > 0; i--){
    createNews();
  }

  let titles = document.getElementsByClassName('title');
  let descriptions = document.getElementsByClassName('sumUp');
  let images = document.getElementsByClassName('articleImageLink');
  let readMore = document.getElementsByClassName('readMoreLink');

  let count = 0;

  do{

    titles[count].innerHTML = array[count].title;
    descriptions[count].innerHTML = array[count].description;
    images[count].src = array[count].urlToImage;
    readMore[count].href = array[count].url;
    count++;

  } while (count < number);

}

var getAllNews = function (){

  let url = urlBase + question + 'country=us&' + key;
  let req = new Request(url);

  fetch(req)
  .then(function(response){

    return response.json();

  }).then(function(object){

    let articles = object.articles;

    let amount = 12;

    for (article in articles){

      if (amount > 0 && articles[article] != 'undefined' && articles[article] != null && articles[article] != ''){

        myArticles.push(articles[article]);



      } else{
        break;
      }

      amount--;
    }
    amount = myArticles.length;
    console.log(myArticles)

    browseNews(myArticles, amount);
  })
  .catch(function(){
    console.log('failed');
  });
}
