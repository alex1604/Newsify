/*
let sourceCode = '';
let countryCode = '';
let categoryCode = '';
let languageCode = '';
let tagCode = document.getElementById('inputTag').value;
*/

var callback = function(){

  var countryKey = '';
  var ltd = '';
  var lng = '';
  var urlWeather = '';
  var weatherResponse;

  var getWeather = function (ltd,lng,urlWeather){
    let reqWeather = new Request(urlWeather);
    let locationKey = '';
    fetch(reqWeather)
    .then(function(response){
      return response.json();
    }).then(function(object){
      locationKey = object.Key;
      countryKey = object.Country.EnglishName;
      console.log(locationKey);
      console.log(countryKey);
      reqWeather = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/' + locationKey + '?apikey=IxakMj3SWJfAzvA9dAg428hfd18gwwVq';
      fetch(reqWeather)
      .then(function(response){
        return response.json();
      }).then(function(object){
        weatherResponse = object;
        console.log(object);
      }).catch(function(fail){
        console.log('we can`t process this request right now');
      })
    }).catch(function(fail){
      console.log('errorLocation');
    });
  }

  var getLocation = function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(savePosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  var savePosition = function (position) {
    ltd = position.coords.latitude;
    lng = position.coords.longitude;
    console.log(ltd);
    console.log(lng);
    urlWeather = 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=IxakMj3SWJfAzvA9dAg428hfd18gwwVq'
    + '&q=' + ltd + ',' + lng;
    getWeather(ltd,lng,urlWeather);
  }
  getLocation();

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

    let a2 = document.createElement('a');
    a2.classList.add('readMoreLink');
    a2.target = '_blank';

    let i2 = document.createElement('i');
    i2.classList.add('fas');
    i2.classList.add('fa-angle-down');

    readMore.appendChild(a);
    a2.appendChild(i2);
    readMore2.appendChild(a2);


    pinkAndTitle.appendChild(pinkLine);
    pinkAndTitle.appendChild(title);
    pinkAndTitle.appendChild(sumUp);
    pinkAndTitle.appendChild(readMore);
    pinkAndTitle.appendChild(readMore2);

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

  // Define function that browses the results on the page, dynamically modifying the HTML:

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
      readMore[(count + 1)].href = array[count].url;
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

  getAllNews();

  // Function that retrieves news corresponding to the user's criteria:

  var getSomeNews = function (queryString, category, country, language, source){

    let tagCode = document.getElementById('inputTag').innerHTML.slice(1);
    let url = urlBase + question;

    searchArray.push(tagCode);

    searchArray.push(categoryCode);

    searchArray.push(countryCode);

    searchArray.push(languageCode);

    searchArray.push(sourceCode);

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


    let req = new Request(url);

    fetch(req)
    .then(function(response){

      return response.json();

    }).then(function(object){

      let articles = object.articles;


      let myArticles = [];
      let amount = 12;

      for (article in articles){

        if (amount > 0){

          myArticles.push(articles[article]);

        } else{
          break;
        }
        amount--;
      }
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
  searchBtn.addEventListener('click', function(){getSomeNews(queryString, category, country, language, source)});

}

window.addEventListener('load', callback);
