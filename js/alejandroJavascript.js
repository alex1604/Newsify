var callback = function(){

  console.log('Hello');

  const key = '&apiKey=ca2d5b8c76a84ec68544ecdeadf04043';
  let urlBase = 'https://newsapi.org/v2/everything';
  let question = '?';
  let queryStart = 'q=';
  let queryString = '';
  let url = urlBase + question + queryStart + 'Putin' + key;

  var getNews = function (url){
    var req = new Request(url);

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

  getNews(url);

  // När man är klar med att välja taggar, rubriker, land och språk, sker följande funktionen:

  ; // when 5 end of scrollbar

  //whenAllTagsChosen.addEventListener('click',function(){

  //});
}

window.addEventListener('load', callback);
