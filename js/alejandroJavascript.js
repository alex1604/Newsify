/*
let sourceCode = '';
let countryCode = '';
let categoryCode = '';
let languageCode = '';
let tagCode = document.getElementById('inputTag').value;
*/
console.log("alejandroJavacript.js");
var callback = function () {

  var countryKey = '';
  var ltd = '';
  var lng = '';
  var urlWeather = '';
  var weatherResponse = '';
  var suggestedNews = document.getElementById('suggestedNews');


  var browseWeather = function (object, weatherLocation) {
    let dayIcon = object.DailyForecasts[0].Day.Icon;
    let min = object.DailyForecasts[0].Temperature.Minimum.Value;
    let max = object.DailyForecasts[0].Temperature.Maximum.Value;
    let weather = document.getElementById('weather');

    min = Math.ceil((min - 32) * 5 / 9);
    max = Math.ceil((max - 32) * 5 / 9);

    switch (dayIcon) {
      case 1:
        weather.classList.add('wi-day-sunny');
        weather2.classList.add('wi-day-sunny');
        break;
      case 2:
        weather.classList.add('wi-day-sunny-overcast');
        weather2.classList.add('wi-day-sunny-overcast');
      case 3:
        weather.classList.add('wi-day-cloudy-high');
        weather2.classList.add('wi-day-cloudy-high');
        break;
      case 4:
        weather.classList.add('wi-day-cloudy');
        weather2.classList.add('wi-day-cloudy');
        break;
      case 5:
        weather.classList.add('wi-day-haze');
        weather2.classList.add('wi-day-haze');
        break;
      case 6:
        weather.classList.add('wi-day-cloud');
        weather2.classList.add('wi-day-cloud');
        break;
      case 7:
        weather.classList.add('wi-cloudy');
        weather2.classList.add('wi-cloudy');
        break;
      case 8:
        weather.classList.add('wi-cloudy');
        weather2.classList.add('wi-cloudy');
        break;
      case 11:
        weather.classList.add('wi-fog');
        weather2.classList.add('wi-fog');
        break;
      case 12:
        weather.classList.add('wi-day-showers');
        weather2.classList.add('wi-day-showers');
        break;
      case 13:
        weather.classList.add('wi-day-showers');
        weather2.classList.add('wi-day-showers');
        break;
      case 14:
        weather.classList.add('wi-day-showers');
        weather2.classList.add('wi-day-showers');
        break;
      case 15:
        weather.classList.add('wi-day-storm-showers');
        weather2.classList.add('wi-day-storm-showers');
        break;
      case 16:
        weather.classList.add('wi-day-storm-showers');
        weather2.classList.add('wi-day-storm-showers');
        break;
      case 17:
        weather.classList.add('wi-day-storm-showers');
        weather2.classList.add('wi-day-storm-showers');
        break;
      case 18:
        weather.classList.add('wi-day-rain-mix');
        weather2.classList.add('wi-day-rain-mix');
        break;
      case 19:
        weather.classList.add('wi-day-cloudy-windy');
        weather2.classList.add('wi-day-cloudy-windy');
        break;
      case 20:
        weather.classList.add('wi-day-cloudy-windy');
        weather2.classList.add('wi-day-cloudy-windy');
        break;
      case 21:
        weather.classList.add('wi-day-cloudy-windy');
        weather2.classList.add('wi-day-cloudy-windy');
        break;
      case 22:
        weather.classList.add('wi-day-snow');
        weather2.classList.add('wi-day-snow');
        break;
      case 23:
        weather.classList.add('wi-day-snow');
        weather2.classList.add('wi-day-snow');
        break;
      case 24:
        weather.classList.add('wi-snowflake-cold');
        weather2.classList.add('wi-snowflake-cold');
        break;
      case 25:
        weather.classList.add('wi-day-sleet');
        weather2.classList.add('wi-day-sleet');
        break;
      case 26:
        weather.classList.add('wi-day-hail');
        weather2.classList.add('wi-day-hail');
        break;
      case 29:
        weather.classList.add('wi-day-snow-thunderstorm');
        weather2.classList.add('wi-day-snow-thunderstorm');
        break;
    }

    document.getElementById('weatherLocation').innerHTML = weatherLocation;
    document.getElementById('min').innerHTML = min + 'ºC' + ' / ';
    document.getElementById('max').innerHTML = max + 'ºC';

    document.getElementById('weatherLocation2').innerHTML = weatherLocation;
    document.getElementById('min2').innerHTML = min + 'ºC' + ' / ';
    document.getElementById('max2').innerHTML = max + 'ºC';

  };

  var getWeather = function (ltd, lng, urlWeather) {
    let reqWeather = new Request(urlWeather);
    let locationKey = '';
    let weatherLocation = '';
    fetch(reqWeather)
      .then(function (response) {
        return response.json();
      }).then(function (object) {
        //console.log(object);
        locationKey = object.Key;
        countryKey = object.Country.EnglishName;
        weatherLocation = object.LocalizedName + ' , ' + countryKey;
        //console.log(locationKey);
        //console.log(countryKey);
        //console.log(weatherLocation);
        let urlWeather2 = 'https://dataservice.accuweather.com/forecasts/v1/daily/1day/' + locationKey + '?apikey=IxakMj3SWJfAzvA9dAg428hfd18gwwVq';
        //console.log(urlWeather2);
        let reqWeather2 = new Request(urlWeather2);
        fetch(reqWeather2)
          .then(function (response) {
            return response.json();
            //console.log(response);
          }).then(function (object) {
            weatherResponse = object;
            //console.log(weatherResponse);
            browseWeather(weatherResponse, weatherLocation);
          }).catch(function (fail) {
            console.log('we can`t process this request right now');
          });
      }).catch(function (fail) {
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
    urlWeather = 'https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=IxakMj3SWJfAzvA9dAg428hfd18gwwVq'
      + '&q=' + ltd + ',' + lng;
    getWeather(ltd, lng, urlWeather);
  }

  //getLocation();
  //raden är kommenterat pga begränsat antal anrop till API:t

  /*console.log('Hello');

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
  }*/



  getAllNews();

  // Function that retrieves news corresponding to the user's criteria:

  var getSomeNews = function (queryString, category, country, language, source) {

    let tagCode = document.getElementById('inputTag').innerHTML.slice(1);
    console.log(document.getElementById('inputTag'));
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

    for (i = 0; i < completeSearchArray.length; i++) {
      let count = 0;
      if (searchArray[i] != '' && searchArray[i] != null) {
        if (count != 0) {
          completeSearchArray[i] += searchArray[i];
          completeSearchArray[i] = '&' + completeSearchArray[i] + '&';
          url += completeSearchArray[i];
        } else {
          completeSearchArray[i] += searchArray[i];
          completeSearchArray[i] += '&';
          url += completeSearchArray[i];
          count++;
        }
      }
      count = 0;
    }
    completeSearchArray = [];
    searchArray = [];
    url += key;
    console.log(url);

    if (url !== 'https://newsapi.org/v2/top-headlines?apiKey=ca2d5b8c76a84ec68544ecdeadf04043') {

      let req = new Request(url);

      fetch(req)
        .then(function (response) {

          return response.json();

        }).then(function (object) {

          let articles = object.articles;


          let myArticles = [];
          let amount = 12;

          for (article in articles) {

            if (amount > 0) {

              myArticles.push(articles[article]);

            } else {
              break;
            }
            amount--;
          }
          while (main.hasChildNodes()) {
            main.removeChild(main.lastChild);
          }
          amount = myArticles.length;
          browseNews(myArticles, amount);
        })
        .catch(function () {
          console.log('failed');
        });
    } else {
      getAllNews();
    }
    url = '';
  }

  var getSuggestedNews = function () {

    let suggestedArticles = [];
    let searchWords = [];
    let url = urlBase + question;
    let myRegExp = /(inputTag">)#.+\</;
    let myReg = [];

    db.ref('users/' + storedUser.uid + '/tags').once('value', function (snapshot) {
      let allData = snapshot.val();
      for (let object in allData) {
        console.log(allData[object]);
        let exec = myRegExp.exec(allData[object]);
        if (exec != null) {
          myReg.push(exec);
        }
        console.log(myReg);
      }
      for (let element in myReg) {
        let word = myReg[element][0];
        let length = word.length - 1;
        word = word.slice(11, length);
        if (word != null && word != '') {
          searchWords.push(word);
        } else {
          continue
        }
      }
      for (let x in searchWords) {
        url += 'q=' + searchWords[x];
        url += '&' + key;
        console.log(url);
        let req = new Request(url);

        fetch(req)
          .then(function (response) {
            return response.json();
            console.log(response.json());
          }).then(function (object) {
            let articles = object.articles;

            for (article in articles) {

              if (articles[article] != null && articles[article] != 'undefined') {
                console.log(articles[article]);
                suggestedArticles.push(articles[article]);
              } else {
                continue;
              }
            }
          })
          .then(function () {
            while (main.hasChildNodes()) {
              main.removeChild(main.lastChild);
            }
            amount = suggestedArticles.length;
            browseNews(suggestedArticles, amount);
          })
          .catch(function (error) {
            console.log('Something went wrong');
          });
        url = urlBase + question;
      }
    });
    console.log(searchWords);
    console.log(suggestedArticles);
  }


  // När man är klar med att välja taggar, rubriker, land och språk, sker följande funktionen:
  // when click on search Button:

  searchBtn.addEventListener('click', (x) => getSomeNews(queryString, category, country, language, source));
  // Regular expression for suggested articles from database ^#.+\<
  // (inputTag) ^(inputTag">#).+\<
  suggestedNews.addEventListener('click', getSuggestedNews);

}

window.addEventListener('load', callback);
