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
  let queryString = 'q=' + tagCode;
  let category = '&category=' + categoryCode;
  let language = '&language=' + languageCode;
  let country = '&country=' + countryCode;
  let source = '&sources=' + sourceCode;

  var getAllNews = function (){

    let url = urlBase + question + key;
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

  var getSomeNews = function (queryString, category, country, language, source){

    let url = urlBase + question + queryString + category + country + language + source + key;

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

  getAllNews();

  // När man är klar med att välja taggar, rubriker, land och språk, sker följande funktionen:

  // when 5 end of scrollbar

  //whenAllTagsChosen.addEventListener('click',function(){

  //getSomeNews('q=Rajoy', category, country, language, source);

  //});
}

window.addEventListener('load', callback);
