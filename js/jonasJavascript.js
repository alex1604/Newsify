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
    //console.log(storedUser);
    
        // save article to database 
        // checks if userID is not null
        
    if (storedUser !== null){
    // this is so the click event only occurs if its on that specific class
        if(event.target.parentElement.classList.contains('saveToFavourite')){
          //console.log(storedUser);
  
          // get data from the articles shown on screen
          let saveTitle = event.target.parentElement.parentElement.children[1].textContent;
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
                  console.log('it already exists');

                } else {
                  // add article to database and 
                  firebase.database().ref('Articles').push(newsObject); 
                  console.log('added to database');

                }
            });
      
          }

    } else {
     console.log('Need to be logged in to save')
    }
  
 

  event.preventDefault();
});