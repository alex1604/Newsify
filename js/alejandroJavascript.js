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
  let completeSearchArray = [];

  let queryString = 'q=';
  let category = 'category=';
  let language = 'language=';
  let country = 'country=';
  let source = 'sources=';
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

  getAllNews();

  // Function that retrieves news corresponding to the user's criteria:

  var getSomeNews = function (queryString, category, country, language, source){

    let tagCode = document.getElementById('inputTag').innerHTML.slice(1);
    let url = urlBase + question;

    searchArray.push(tagCode);
    console.log(tagCode);
    searchArray.push(categoryCode);
    console.log(categoryCode);
    searchArray.push(countryCode);
    console.log(countryCode);
    searchArray.push(languageCode);
    console.log(languageCode);
    searchArray.push(sourceCode);
    console.log(sourceCode);

    completeSearchArray.push(queryString);
    completeSearchArray.push(category);
    completeSearchArray.push(country);
    completeSearchArray.push(language);
    completeSearchArray.push(source);

    for (i=0;i<completeSearchArray.length;i++){
      let count = 0;
      if (searchArray[i] == 'undefined' || searchArray[i] == 'null' || searchArray[i] == ' '){
        searchArray.splice(i,1);
        completeSearchArray.splice(i,1);
        console.log(completeSearchArray);
      } else {
        if (count != 0){
          completeSearchArray[i] += searchArray[i];
          completeSearchArray[i] = '&' + completeSearchArray[i] + '&';
          url += completeSearchArray[i];
        } else{
          completeSearchArray[i] += searchArray[i];
          completeSearchArray[i] += '&';
          url += completeSearchArray[i];
          count++;
        }
      }
      count = 0;
    }
    url += key;
    console.log(url);

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
      completeSearchArray = [];
      url = '';
    })
    .catch(function(){
      console.log('failed');
    });
  }

  // När man är klar med att välja taggar, rubriker, land och språk, sker följande funktionen:

  // when click on search Button:
  searchBtn.addEventListener('click', function(){console.log('clicked');});
  searchBtn.addEventListener('click', function(){getSomeNews(queryString, category, country, language, source)});

}

window.addEventListener('load', callback);
