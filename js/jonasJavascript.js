console.log("jonasJS");
// object constructor for Newsarticles

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
          var saveTitle = event.target.parentElement.parentElement.children[1].textContent;
          let saveDescription = event.target.parentElement.parentElement.children[2].textContent;
          let saveUrl = event.target.parentElement.parentElement.children[3].firstChild.getAttribute('href');
          let saveUrlImage = event.target.parentElement.parentElement.nextSibling.firstChild.getAttribute('src');
      
            // create object from the data
            const newsObject = new News(saveTitle, saveDescription, saveUrl, saveUrlImage);
            // check if variable saveTitle is equal to child "saveTitle" in firebase 
            firebase.database().ref("Articles").orderByChild("saveTitle").equalTo(saveTitle).once("value", snapshot => {
              const userData = snapshot.val();
                // if article already exists it should not reupload
                if (userData){
                  console.log('it already exists in articles database');
                  firebase.database().ref("users/" + storedUser.uid).orderByChild("favourites").once("value", snapshot => {
                    
                    const userFavourites = snapshot.val();
                    //console.log(userFavourites);
                      // if article already exists it should not reupload
                      if (userFavourites){
                        console.log('it already exists in userprofile');               
                      } else {
                        console.log('added it only to userprofile');
                        firebase.database().ref("users/" + storedUser.uid + "/favourites").push(saveTitle);
                      }

              });
                } else {
                  // add article to database and to userprofile
                  firebase.database().ref('Articles').push(newsObject); 
                  firebase.database().ref("users/" + storedUser.uid + "/favourites").push(saveTitle);
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

let showFavourites = document.getElementById('showFavourites');
var allArticles = [];
var favArray = [];
firebase.database().ref("Articles").once("value", snapshot => {

  const fetchUserData = snapshot.val();
  for( let newArticle in fetchUserData){
    let newList = fetchUserData[newArticle];
    allArticles.push(newList);
  }
  //console.log(fetchUserData);
  
})  

showFavourites.addEventListener('click', event => {
  // get articles from firebase
  firebase.database().ref("users/" + storedUser.uid + "/favourites").once('value', snapshot=> {
    //console.log('On value: hämtar .');
    
    let data = snapshot.val();
    //console.log(data);
    // this data should check if exists as articles title in db and get the whole object.
    var main = document.getElementsByTagName('main')[0];
    main.innerHTML = "";
    //console.log(allArticles);
    for( let article in data ) {
        
      
        let r = data[article];
        console.log(r);
  
        //console.log(`Article ${r.saveTitle} egenskaper är: `, data[article]);
       favArray.push(r);
  
  
        var obj = {};
        obj["title"] = r.saveTitle;
        obj["description"] = r.saveDescription;
        obj["urlToImage"] = r.saveUrlImage;
        obj["url"] = r.saveUrl;
        //pages.push(obj);
        //console.log("Adding to array");
        
    }
      
    //console.log(pages);
    if(favArray = undefined){
      main.innerHTML = 'No Favourites Saved';
    } else {
      main.innerHTML = 'Show Favourite Content'
    }
    
  //let amount = pages.length-1;
  //browseNews(pages, amount);         
    }) 
    

        //console.log(favArray);
        /*
        myArrayFilteredd(allArticles, favArray);
        //console.log(myArrayFiltered);
        */

});
/*
function myArrayFilteredd(allArticles, favArray){
console.log(favArray);
var myArrayFiltered = allArticles.filter(function (el) {
  console.log(el.saveTitle);
    return favArray.some(function (f) {
      console.log(f);
        return f === el.uid;
    });
});
console.log(myArrayFiltered);

};
*/