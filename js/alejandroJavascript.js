/*
let sourceCode = '';
let countryCode = '';
let categoryCode = '';
let languageCode = '';
let tagCode = document.getElementById('inputTag').value;
*/

var callback = function(){

  console.log('Hello');

  const key = 'apiKey=ca2d5b8c76a84ec68544ecdeadf04043';
  let urlBase = 'https://newsapi.org/v2/top-headlines';
  let question = '?';

  let searchArray = [];

  let queryString = 'q=' + tagCode;
  let category = 'category=' + categoryCode;
  let language = 'language=' + languageCode;
  let country = 'country=' + countryCode;
  let source = 'sources=' + sourceCode;
  let searchBtn = document.getElementById('searchBtn');

  // Function that retrieves all most recent and most interesting news:

  var getAllNews = function (){

    let url = urlBase + question + 'country=us&' + key;
    let req = new Request(url);

    fetch(req)
    .then(function(response){

      return response.json();

    }).then(function(object){

      let articles = object.articles;
      console.log(articles);

      let myArticles = [];
      let amount = 10;

      for (article in articles){
        console.log('hej');
        if (amount > 0){
          console.log(articles[article].title);
          console.log(articles[article].description);
          console.log(articles[article].urlToImage);
          console.log(articles[article].source.name);
          console.log(articles[article].author);
          myArticles.push(article);
        } else{
          break;
        }
        console.log(amount);
        amount--;
      }

    })
    .catch(function(){
      console.log('failed');
    });
  }

  // Function that retrieves news corresponding to the user's criteria:

  var getSomeNews = function (queryString, category, country, language, source){

    let url = urlBase + question;

    searchArray.push(queryString);
    searchArray.push(category);
    searchArray.push(country);
    searchArray.push(language);
    searchArray.push(source);

    let newSearchArray = searchArray.filter(x => x != undefined && x != 'null' && x != '');

    let length = newSearchArray.length;

    if (length != 0){

      if (length > 1){
        for (i=1; i<length-1;i++){
          newSearchArray[i] = '&' + newSearchArray[i] + '&';
        }
      }
      newSearchArray[length-1] = newSearchArray[length-1] + '&';
    }

    for (let elem in newSearchArray){
      url += newSearchArray[elem];
    }

    url += key;

    let req = new Request(url);

    fetch(req)
    .then(function(response){

      return response.json();

    }).then(function(object){

      let articles = object.articles;
      console.log(articles);

      let myArticles = [];
      let amount = 10;

      for (article in articles){
        console.log('hej');
        if (amount > 0){
          console.log(articles[article].title);
          console.log(articles[article].description);
          console.log(articles[article].urlToImage);
          console.log(articles[article].source.name);
          console.log(articles[article].author);
          myArticles.push(article);
        } else{
          break;
        }
        console.log(amount);
        amount--;
      }
      searchArray = [];
      newSearchArray = [];
    })
    .catch(function(){
      console.log('failed');
    });
  }

  getAllNews();

  // När man är klar med att välja taggar, rubriker, land och språk, sker följande funktionen:

  // when click on search Button:

  searchBtn.addEventListener('click', getSomeNews(queryString, category, country, language, source));

}

window.addEventListener('load', callback);
