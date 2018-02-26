var callback = function(){

  console.log('Hello');

  const key = 'ca2d5b8c76a84ec68544ecdeadf04043';
  let url = 'https://newsapi.org/v2/top-headlines?q=Trump&country=us&apiKey=' + key;

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
      if (amount > 0){
        console.log(article.title);
        console.log(article.description);
        console.log(article.urlToImage);
        console.log(article.source.name);
        console.log(article.author);
      } else{
        break;
      }
      amount--;
    }

  })
  .catch(function(fail){

  });
}

window.addEventListener('load', callback);
