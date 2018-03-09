console.log("erikJS");
 window.addEventListener("load", getApi)

    function getApi() {
       
       let datum = new Date();
       let date = datum.getDate();
       let month = datum.getMonth() + 1;
       let link = "http://cors-anywhere.herokuapp.com/http://history.muffinlabs.com/date";
//       let cors = "http://cors-anywhere.herokuapp.com/"
      /* let link = "http://numbersapi.com/"+month+"/"+date+"/date?json"; */
       let footer = document.getElementById("footer");
       let divHistory = document.getElementById("divHistory");
       let eventYear = document.getElementById("eventYear"); 
       let eventText = document.getElementById("eventText"); 
       
              
           fetch(link)
           .then(function(response) {
               return response.json();
            })
           .then(function(obj) {
               let date = JSON.stringify(obj.date);
               divHistory.innerHTML = "Today in History: " + date;
               
               
               //console.log(obj.data.Events[42]);
            let event1Year = JSON.stringify(obj.data.Events[42].year);
            let event1Text = JSON.stringify(obj.data.Events[42].text);
                console.log(event1Text);
            
               eventYear.innerHTML = "Year: " + event1Year;
               eventText.innerHTML = event1Text;
               
               /*     
               
               let divYear = document.createElement("div");
               let txt = JSON.stringify(obj.text);
               let divTxt = document.createElement("div");
               divYear.innerHTML = "Year: " + year;
               divYear.id = "divYear";
               divTxt.innerHTML = txt;
               divTxt.id = "divTxt";
               div1.appendChild(divYear);
               div2.appendChild(divTxt);
     */
     }) 
        
        var whenScroll = function(evt) {
              if(footer.style.display === "block") {
                  footer.style.display = "none";
              } else {
                  footer.style.display = "block";
              }
          }
           
        window.addEventListener("scroll", whenScroll)
};
      