console.log("erikJS");
 window.addEventListener("load", getApi)
       
       function getApi() {
       
     
       
       let link = "http://numbersapi.com/3/1/date?json";
       let footer = document.getElementById("footer");
       let divHistory = document.getElementById("divHistory");
       let div1 = document.getElementById("div1"); 
       let div2 = document.getElementById("div2"); 
       
           
           
           fetch(link)
           .then(function(response) {
               console.log(response);
               return response.json();
            })
           .then(function(obj) {
               console.log(obj.year);
               console.log(obj.text);
               let year = JSON.stringify(obj.year);
               let divYear = document.createElement("div");
               let txt = JSON.stringify(obj.text);
               let divTxt = document.createElement("div");
               divYear.innerHTML = "Year: " + year;
               divYear.id = "divYear";
               divTxt.innerHTML = txt;
               divTxt.id = "divTxt";
               div1.appendChild(divYear);
               div2.appendChild(divTxt);
            })
          
           
        
    };
      