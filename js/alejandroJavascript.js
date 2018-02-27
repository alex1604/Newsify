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

  let main = document.getElementsByTagName('main')[0];
  console.log(main);

  let myArticles = [];

  // Function that creates the HTML for news dynamically:

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
  }

  // Define function that browses the results on the page, dynamically modifying the HTML:

  var browseNews = function (array,number){

    for (i = number; i > 0; i--){
      createNews();
      console.log('news created');
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

      let amount = 12;

      for (article in articles){
        console.log('hej');
        if (amount > 0 && articles[article] != 'undefined' && articles[article] != null && articles[article] != ''){
          console.log(articles[article].title);
          console.log(articles[article].description);
          console.log(articles[article].urlToImage);
          console.log(articles[article].source.name);
          console.log(articles[article].author);
          myArticles.push(articles[article]);
          console.log(myArticles);
        } else{
          break;
        }
        console.log(amount);
        amount--;
      }
      amount = myArticles.length;
      browseNews(myArticles, amount);
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
    console.log(completeSearchArray);
    console.log(searchArray);

    for (i=0;i<completeSearchArray.length;i++){
      let count = 0;
      if (searchArray[i] != ''){
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
        myArticles.push(articles[article]);
        console.log(myArticles);
      } else{
        break;
      }
      console.log(amount);
      amount--;
    }
    console.log(completeSearchArray);
    searchArray = [];
    completeSearchArray = [];
    url = '';
    while (main.hasChildNodes()) {
      main.removeChild(main.lastChild);
    }
    amount = myArticles.length;
    browseNews(myArticles, amount);
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
