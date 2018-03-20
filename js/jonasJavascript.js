console.log("jonasJS");
// object constructor for Newsarticles
var outputSaved = [];
  class News {
    constructor(saveTitle, saveDescription, saveUrl, saveUrlImage){
        this.saveTitle = saveTitle;
        this.saveDescription = saveDescription;
        this.saveUrl = saveUrl;
        this.saveUrlImage = saveUrlImage;
    }
  }
  // to get a userid from firebase when logged in
  var storedUser = null;
  firebase.auth().onAuthStateChanged(user => {
    storedUser = user;
    if (storedUser.uid !== null){
      firebase.database().ref("users/" + storedUser.uid + "/favourites").on('value', snapshot => {
        let updateCounter = snapshot.val();
        var updateCounterOutput = [];
        for( let article in updateCounter ) {


          let r = updateCounter[article];
          //console.log(r);

          //console.log(`Article ${r.saveTitle} egenskaper är: `, data[article]);
          updateCounterOutput.push(r);

     }

        document.getElementById('addNumberCount').textContent = updateCounterOutput.length;

      });
    } else{
      console.log('not logged in')
    }
  })

  // click event for newsarticle
  let saveArticle = document.querySelector('#newsContainer');
  saveArticle.addEventListener('click', function(event){
    //console.log(storedUser.uid);

        // save article to database
        // checks if userID is not null

    if (storedUser !== null){
    // this is so the click event only occurs if its on that specific class
        if(event.target.parentElement.classList.contains('saveToFavourite')){
          //console.log(storedUser);

          // get data from the articles shown on screen

          var saveTitle = event.target.parentElement.parentElement.parentElement.children[1].textContent;
          let saveDescription = event.target.parentElement.parentElement.parentElement.children[2].textContent;
          let saveUrl = event.target.parentElement.parentElement.parentElement.children[3].firstChild.getAttribute('href');
          let saveUrlImage = event.target.parentElement.parentElement.parentElement.previousSibling.firstChild.getAttribute('src');

            // create object from the data
            const newsObject = new News(saveTitle, saveDescription, saveUrl, saveUrlImage);
            // check if variable saveTitle is equal to child "saveTitle" in firebase
            firebase.database().ref("Articles").orderByChild("saveUrl").equalTo(saveUrl).once("value", snapshot => {
              const userData = snapshot.val();
                // if article already exists it should not reupload
                if (userData){
                  console.log('it already exists in articles database');
                  firebase.database().ref("users/" + storedUser.uid + "/favourites").orderByValue().equalTo(saveUrl).once("value", snapshot => {

                    const userFavourites = snapshot.val();
                    console.log(userFavourites);
                      // if article already exists it should not reupload
                      if (userFavourites){
                        //console.log('it already exists in userprofile');
                      } else {

                        console.log('added it only to userprofile');
                        firebase.database().ref("users/" + storedUser.uid + "/favourites").push(saveUrl);
                        /*
                        var obj = {};
                          obj["title"] = saveTitle;
                          obj["description"] = saveDescription;
                          obj["urlToImage"] = saveUrlImage;
                          obj["url"] = saveUrl;
                        pages.push(obj);
                        */
                        // add it to favArray to skip refresh page to get new items
                      }

              });
                } else {
                  // add article to database and to userprofile

                  firebase.database().ref('Articles').push(newsObject);

                  firebase.database().ref("users/" + storedUser.uid + "/favourites").push(saveUrl);
                  // add it to favArray to skip refresh page to get new items

                  var obj = {};
                  obj["title"] = saveTitle;
                  obj["description"] = saveDescription;
                  obj["urlToImage"] = saveUrlImage;
                  obj["url"] = saveUrl;
                  outputSaved.push(obj);

                  console.log('added to database');
                  console.log('added to userprofile');

                }
            });

          }

    } else {
     console.log('Need to be logged in to save')
    }



  event.preventDefault();
});

let showFavourites = document.getElementById('showFavouriteList');
var allArticles = [];

firebase.database().ref("Articles").on("value", snapshot => {

  const fetchUserData = snapshot.val();
  for( let newArticle in fetchUserData){
    let newList = fetchUserData[newArticle];
    allArticles.push(newList);
  }
  //console.log(fetchUserData);

showFavourites.addEventListener('click', event => {
  // get articles from firebase

  firebase.database().ref("users/" + storedUser.uid + "/favourites").on('value', snapshot => {
    //console.log('On value: hämtar .');

    let data = snapshot.val();
    var favArray = [];
    //console.log(data);
    // this data should check if exists as articles title in db and get the whole object.
    var main = document.getElementsByTagName('main')[0];
    main.innerHTML = "";
    //console.log(allArticles);
    for( let article in data ) {


        let r = data[article];

        //console.log(r);

        //console.log(`Article ${r.saveTitle} egenskaper är: `, data[article]);
       favArray.push(r);

   }
   //console.log(favArray);



   //console.log(allArticles);
   var myArrayFiltered = allArticles.filter(function (el) {
    // console.log(el.saveUrl);
       return favArray.some(function (f) {
         //console.log(f);
           return f === el.saveUrl;
       });
       //console.log(myArrayFiltered);

      });

    //console.log(pages);
    if(favArray.length === 0){

      main.innerHTML = 'No Favourites Saved';
    } else {

      main.innerHTML = 'Saved Articles'
      outputSaved = [];
      for( let news in myArrayFiltered ) {


        let k = myArrayFiltered[news];
        //console.log(k);

      var obj = {};
      obj["title"] = k.saveTitle;
      obj["description"] = k.saveDescription;
      obj["urlToImage"] = k.saveUrlImage;
      obj["url"] = k.saveUrl;

      outputSaved.push(obj);
    }


    //console.log(outputSaved);
    //console.log(favArray);
    var myArrayFilteredOutput = outputSaved.filter(function (el) {
       //console.log(el.url);
         return favArray.some(function (f) {
           //console.log(f);
             return f === el.url;
         });
     });
     //console.log(outputSaved);

    let amount = outputSaved.length;
    browseNews(outputSaved, amount);
    let saveText = document.getElementsByClassName('showFavouriteList');
    let changeIcon = document.getElementsByClassName('far fa-star');

    let changeClassToRemove = document.getElementsByClassName('saveToFavourite');
    //changeClassToRemove.classList = "newsFooter remove";

    console.log(saveText.length);

    for (var i = changeIcon.length -1 ; i >= 0; --i) {


      changeIcon[i].className = changeIcon[i].className.replace('far fa-star', 'fas fa-times-circle');
      changeClassToRemove[i].className = changeClassToRemove[i].className.replace('newsFooter saveToFavourite', 'newsFooter saveToFavourite remove');
      saveText[i].textContent = 'Remove';

    }
    //console.log(saveText);
   // console.log(changeIcon);
    //console.log(changeClassToRemove);
    }

    })

});
})
let removeArticle = document.querySelector('#newsContainer');

  removeArticle.addEventListener('click', function(event){

    //console.log(event.target);

    if (storedUser !== null){

    // this is so the click event only occurs if its on that specific class
        if(event.target.parentElement.classList.contains('remove')){
          //console.log(storedUser);

          // get data from the articles shown on screen
          let removeUrl = event.target.parentElement.parentElement.parentElement.children[3].firstChild.getAttribute('href');
          //console.log(removeUrl);
          //find it in users profile on firebase
          firebase.database().ref("users/" + storedUser.uid + "/favourites").orderByValue().equalTo(removeUrl).once("value", snapshot => {
            const key = Object.keys(snapshot.val())[0];

           // console.log(key);
            firebase.database().ref("users/" + storedUser.uid + "/favourites").ref.child(key).remove();

            console.log('article removed from favourites');
            /*
            let removeFromDb = snapshot.val();
            console.log(removeFromDb);
            */
          })
}
    }

  })
