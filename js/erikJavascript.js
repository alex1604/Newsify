console.log("erikJS");
 window.addEventListener("load", getApi)

       function getApi() {



       let datum = new Date();
       let date = datum.getDate();
       let month = datum.getMonth() + 1;
       let link = "https://numbersapi.com/"+month+"/"+date+"/date?json";
       let footer = document.getElementById("footer");
       let divHistory = document.getElementById("divHistory");
       let div1 = document.getElementById("div1");
       let div2 = document.getElementById("div2");
       let timeDiv = document.getElementById("time");
       let timeLink = "https://api.timezonedb.com/v2/get-time-zone?key=982P7H46YD1D&format=json&by=zone&zone=Europe/Stockholm"
       let time = document.getElementById("time");


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

         fetch(timeLink)
               .then(function(response) {
                  // console.log(response)
                   return response.json();
               })
               .then(function(obj) {
                  // console.log(obj);
                   let timeNow = JSON.stringify(obj.formatted);
                   let divTimeNow = document.createElement("div");
                   divTimeNow.id = "divTimeNow";
                   let country = JSON.stringify(obj.countryName)
                   let divZone = document.createElement("div");
                   divZone.id = "divZone";
                   divTimeNow.innerHTML = timeNow;
                   divZone.innerHTML = country;
                   time.appendChild(divTimeNow);
                   time.appendChild(country);
               })


    };
