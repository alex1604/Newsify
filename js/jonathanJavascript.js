
// Kollar vart man är i den första slidern. den man är på ska få klassen tags zIndex och de andra bara tags eftersom att man vill att den ska vara längst fram och synas beroende på vart minusSlide är.
function checkZIndex(contentChangeLength, contentChangeCorrect, andraLength, andraContentChange, tredjeLength, tredjeContentChange, fjardeLength, fjardeContentChange){



    for(let i=0; i< contentChangeLength; i++){

        contentChangeCorrect[i].className = "tags zIndex"

    }

    for(let i=0; i< andraLength; i++){

        andraContentChange[i].className = "tags"


    }

    for(let i=0; i< tredjeLength; i++){

        tredjeContentChange[i].className = "tags"


    }

    for(let i=0; i< fjardeLength; i++){

        fjardeContentChange[i].className = "tags"


    }



}



function whatMinusSlideNumber(minusSlide,sourceMinus, countryMinus, categoryMinus, languageMinus, tagsMinus){

    if(minusSlide === 1){
      if(slider.inputKeyword.value === ""){
          currentTag.inputTag.innerHTML = ""
      }
    }

    if(sliderContentChangeLength > minusSlide){

      slider.sliderContentChange.style.marginLeft = totalLeft;
      minusSlide++
      if(minusSlide === 2){


        // När minusSlide är 2 så visas sourceSlider längst fram och de andra längre bak.
        checkZIndex(sourceSlider.children.length, sourceSlider.children, countrySlider.children.length, countrySlider.children, categorySlider.children.length, categorySlider.children, languageSlider.children.length, languageSlider.children )

        if(countryMinus> 1 || categoryMinus > 1 ){
          sourceSlider.slider.style.opacity ="0";

        }else{
          sourceSlider.slider.style.opacity ="1";

        }

        // sourceContentChangeWidth = sourceSlider.sourceContentChange.offsetWidth;
      }else {
        sourceSlider.slider.style.opacity ="0"
      }

      if(minusSlide === 3){

        // När minusSlide är 3 så visas countrySlider längst fram och de andra längre bak.
            checkZIndex( countrySlider.children.length, countrySlider.children, categorySlider.children.length, categorySlider.children, languageSlider.children.length, languageSlider.children,sourceSlider.children.length, sourceSlider.children );

        if(sourceMinus>1 || slider.inputKeyword.value !== "" || languageMinus>1){
          countrySlider.slider.style.opacity = "0";



        }else{
          countrySlider.slider.style.opacity = "1";
        }
        // countryContentChangeWidth = countrySlider.countryContentChange.offsetWidth;


      }else{
        countrySlider.slider.style.opacity = "0"
      }

      if(minusSlide === 4){

        // När minusSlide är 4 så visas categorySlider längst fram och de andra längre bak.
        checkZIndex(  categorySlider.children.length, categorySlider.children, languageSlider.children.length, languageSlider.children,sourceSlider.children.length, sourceSlider.children, countrySlider.children.length, countrySlider.children );

        if(sourceMinus>1 || slider.inputKeyword.value !== "" || languageMinus>1){
          categorySlider.slider.style.opacity = "0"

        }else{
          categorySlider.slider.style.opacity = "1"

        }


      }else{
        categorySlider.slider.style.opacity = "0"
      }

      if(minusSlide === 5){

        // När minusSlide är 5 så visas languageSlider längst fram och de andra längre bak.
        checkZIndex( languageSlider.children.length, languageSlider.children,sourceSlider.children.length, sourceSlider.children, countrySlider.children.length, countrySlider.children );


        if(countryMinus> 1 || categoryMinus > 1){
          languageSlider.slider.style.opacity = "0"

        }else{
          languageSlider.slider.style.opacity = "1"

        }
      }else{
        languageSlider.slider.style.opacity = "0"
      }

    }
}





function showArrowsOrNot(minusSlide,prevBtn,nextBtn, contentChangeLength ){




  if(minusSlide> 1){
    prevBtn.style.opacity = "1";

  }

  if(minusSlide === contentChangeLength-1){
    nextBtn.style.opacity = "0";
  }

}



function clear(){

  canNotShow.style.display = "none"
  document.getElementById("ownCurrentTag").innerHTML = ""
  slider.sliderContent.style.display = "block"

  tagsSlider.tagsContentChange.style.marginLeft = "0";
  tagsMinusSlide = 0;

  beforeLoggedIn.style.display = "block"


  currentTag.inputTag.innerHTML = "";
  currentTag.sourceTag.innerHTML = "";
  currentTag.countryTag.innerHTML = "";
  currentTag.categoryTag.innerHTML = "";
  currentTag.languageTag.innerHTML = "";

  slider.inputKeyword.value = ""
  slider.inputKeyword.placeholder ="Search"
  slider.inputKeyword.disabled = false;

  countrySlider.slider.style.opacity = "0";
  countrySlider.countryContentChange.style.display = "none"
  categorySlider.slider.style.opacity = "0";
  categorySlider.categoryContentChange.style.display = "none"
  sourceSlider.slider.style.opacity = "0";
  sourceSlider.sourceContentChange.style.display = "none"
  languageSlider.slider.style.opacity = "0";
  languageSlider.languageContentChange.style.display = "none"
  slider.sliderContentChange.style.marginLeft = "0";
  sourceSlider.sourceContentChange.style.marginLeft = "0";
  countrySlider.countryContentChange.style.marginLeft = "0";
  categorySlider.categoryContentChange.style.marginLeft = "0";
  languageSlider.languageContentChange.style.marginLeft = "0"



  sourceMinusSlide = 1;
  countryMinusSlide = 1;
  categoryMinusSlide = 1;
  languageMinusSlide = 1

  if(tagsSlider.children.length === 1 || tagsSlider.children.length >2){
    tagsSlider.children[0].innerHTML= "<ul class='tags'>" +(tagsSlider.children.length -1) + " saved tags</ul>";

  }else{
    tagsSlider.children[0].innerHTML= "<ul class='tags'>" +(tagsSlider.children.length -1) + " saved tag</ul>";

  }



}




addTagBtn.addEventListener("click", function () {



  let innerHTML = document.getElementById("currentTag").innerHTML;

  if(tagsSlider.children.length === 1 || tagsSlider.children.length >2){
    tagsSlider.children[0].innerHTML= "<ul class='tags'>" +(tagsSlider.children.length -1) + " saved tags</ul>";

  }else{
    tagsSlider.children[0].innerHTML= "<ul class='tags'>" +(tagsSlider.children.length -1) + " saved tag</ul>";

  }


    if (currentTag.inputTag.innerText !== "" || currentTag.sourceTag.innerText !== "" || currentTag.countryTag.innerText !== "" || currentTag.categoryTag.innerText !== "" || currentTag.languageTag.innerText !== "") {

      console.log("hej")


    let div = document.createElement("div");

    div.className = "tags";
    div.innerHTML = innerHTML;
    for(let i =0; i< div.children.length; i++){
        console.log(div.children[i])
        console.log(Math.random().toFixed(2))
        div.children[i].setAttribute("id", Math.random().toFixed(2))
    }
    db.ref("users/" + sammaid + "/tags").push(div.innerHTML)

    tagsSliderContentChange.appendChild(div)


    console.log(div.children)


    for(let i=0; i< tagsSlider.children.length; i++){

      if(tagsSlider.children[i] !== undefined){

          tagsSlider.children[i].addEventListener("click",function(){

              let tag = tagsSlider.children[i];

              tagsContentChangeClick(tag, tagsSlider.children.length, i, tagsSlider.tagsContentChange, tagsMinusSlide, tagsContentChangeWidth)


          })

      }
    }

    showAWhile.style.display = "block"
    showAWhile.style.backgroundColor = "#00cc00"
    showAWhile.innerHTML = "<h2>Added "+ innerHTML + " successfully!</h2>"
    function displayNone(){
      showAWhile.style.display = "none"

    }
    setTimeout(displayNone, 2000);








  }


    clear()

})


deleteCurrentTag.addEventListener("click",function(){
  clear()

})




let y=2;

deleteOwnTag.addEventListener("click",function(){



    console.log("length", tagsSlider.children.length)



    db.ref("/users/"+ id + "/tags/").once("value",function(snapshot){


          let obj = snapshot.val()

          console.log(tagsSlider.children[tagsMinusSlide])

        let found = false;
        let proppet = ""
        let tag = tagsSlider.children[tagsMinusSlide];
        for(let prop in obj){



          if(tag.innerHTML !== undefined){
            if(tag.innerHTML === obj[prop]){

                found = true;

                proppet = prop
              // tagsSlider.tagsContentChange.removeChild(tagsSlider.tagsContentChange.children[tagsMinusSlide-1])


            }
          }



        }

        if(found){

          tag.parentNode.removeChild(tag);


          db.ref("/users/"+ id + "/tags/"+ proppet).remove()



            console.log(tagsMinusSlide)
            console.log(tagsSlider.children.length)

          if(tagsMinusSlide === tagsSlider.children.length){

            let totalLeft;

            totalLeft = (tagsMinusSlide-1) * tagsSliderContentChangeWidth;
            totalLeft = totalLeft.toString()

              console.log(totalLeft)


             tagsSlider.tagsContentChange.style.marginLeft = "-"+totalLeft + "px";


            tagsMinusSlide--



             if(tagsMinusSlide === 1){

               beforeLoggedIn.style.display = "block"

             }


          }
          if(tagsSlider.children.length === 1 || tagsSlider.children.length >2){
            tagsSlider.children[0].innerHTML= "<ul class='tags'>" +(tagsSlider.children.length -1) + " saved tags</ul>";

          }else{
            tagsSlider.children[0].innerHTML= "<ul class='tags'>" +(tagsSlider.children.length -1) + " saved tag</ul>";

          }

          if(tagsSlider.children.length === 1){

            slider.sliderContent.style.display = "block"

          }
          document.getElementById("ownCurrentTag").innerHTML =  tagsSlider.children[tagsMinusSlide].innerHTML

          found = false;
        }else{
          showAWhile.style.display = "block"
          showAWhile.style.backgroundColor = "#ff3333"
          showAWhile.innerHTML = "<h5>Press the saved tag that you want to delete and then press delete</h5>"
          function displayNone(){
            showAWhile.style.display = "none"

          }
          setTimeout(displayNone, 3000);
        }

    })

    if(document.querySelectorAll("#tagsSliderContentChange .tags").length === 2){
      document.getElementById("ownCurrentTag").innerHTML = "";
    }





})






function contentChangeClick(tag, length, i, contentChange, minus, offsetWidth){



    let totalLeft = offsetWidth;

    switch (i) {
      case 0:
          contentChange.style.marginLeft = "0"
          minus = 1;

          switch (contentChange.id) {
            case "sliderContentChange":
                  minusSlide = minus;
                          sourceSlider.slider.style.opacity ="0";
                           countrySlider.slider.style.opacity = "0";
                           categorySlider.slider.style.opacity = "0"
                           languageSlider.slider.style.opacity = "0"
              break;
            case "sourceContentChange":
                  sourceMinusSlide = minus;

              break;
              case "countryContentChange":
                    countryMinusSlide = minus;
                break;
            case "categoryContentChange":

                categoryMinusSlide = minus;
                break;
            case "languageContentChange":

                languageMinusSlide = minus;
                break;

            default:

          }




      break;

      case 1:
            totalLeft = "-" + totalLeft.toString() + "px"
            contentChange.style.marginLeft = totalLeft;
            minus = 2;

            switch (contentChange.id) {
              case "sliderContentChange":
                    minusSlide = minus;
                    checkZIndex(sourceSlider.children.length, sourceSlider.children, countrySlider.children.length, countrySlider.children, categorySlider.children.length, categorySlider.children, languageSlider.children.length, languageSlider.children )

                    sourceSlider.slider.style.opacity ="1";
                    countrySlider.slider.style.opacity = "0";
                    categorySlider.slider.style.opacity = "0"
                    languageSlider.slider.style.opacity = "0"
                break;
              case "sourceContentChange":
                    sourceMinusSlide = minus;
                break;
                case "countryContentChange":
                      countryMinusSlide = minus;
                  break;
                  case "categoryContentChange":

                      categoryMinusSlide = minus;
                      break;
                  case "languageContentChange":

                      languageMinusSlide = minus;
                      break;
              default:

            }
        break;
      case 2:
          let twoTotalLeft = totalLeft * 2;

          twoTotalLeft = "-" + twoTotalLeft.toString() + "px"
          contentChange.style.marginLeft = twoTotalLeft;
          minus = 3;

          switch (contentChange.id) {
            case "sliderContentChange":
                  minusSlide = minus;
                  checkZIndex( countrySlider.children.length, countrySlider.children, categorySlider.children.length, categorySlider.children, languageSlider.children.length, languageSlider.children,sourceSlider.children.length, sourceSlider.children );

                  sourceSlider.slider.style.opacity ="0";
                          categorySlider.slider.style.opacity = "0"
                          languageSlider.slider.style.opacity = "0"

                          countrySlider.slider.style.opacity = "1";
              break;
            case "sourceContentChange":
                  sourceMinusSlide = minus;
              break;
              case "countryContentChange":
                    countryMinusSlide = minus;
                break;
                case "categoryContentChange":

                    categoryMinusSlide = minus;
                    break;
                case "languageContentChange":

                    languageMinusSlide = minus;
                    break;
            default:

          }

        break;
      case 3:

        let threeTotalLeft = totalLeft *3;
        threeTotalLeft = "-" + threeTotalLeft.toString() + "px"
        contentChange.style.marginLeft = threeTotalLeft;
        minus = 4;

        switch (contentChange.id) {
          case "sliderContentChange":
                minusSlide = minus;

                checkZIndex(  categorySlider.children.length, categorySlider.children, languageSlider.children.length, languageSlider.children,sourceSlider.children.length, sourceSlider.children, countrySlider.children.length, countrySlider.children );

                          categorySlider.slider.style.opacity = "1"

                                    countrySlider.slider.style.opacity = "0";
                                    sourceSlider.slider.style.opacity ="0";
                                    languageSlider.slider.style.opacity = "0"
            break;
          case "sourceContentChange":
                sourceMinusSlide = minus;
            break;
            case "countryContentChange":
                  countryMinusSlide = minus;
              break;
              case "categoryContentChange":

                  categoryMinusSlide = minus;
                  break;
              case "languageContentChange":

                  languageMinusSlide = minus;
                  break;
          default:

        }

        break;
      case 4:

      let fourTotalLeft = totalLeft *4;
      fourTotalLeft = "-" + fourTotalLeft.toString() + "px"
      contentChange.style.marginLeft = fourTotalLeft;
      minus = 5;

      switch (contentChange.id) {

        case "sliderContentChange":
              minusSlide = minus;
              checkZIndex( languageSlider.children.length, languageSlider.children,sourceSlider.children.length, sourceSlider.children, countrySlider.children.length, countrySlider.children );
                        languageSlider.slider.style.opacity = "1"
                        categorySlider.slider.style.opacity = "0"

                                  countrySlider.slider.style.opacity = "0";
                                  sourceSlider.slider.style.opacity ="0";
          break;
        case "sourceContentChange":
              sourceMinusSlide = minus;
          break;

          case "countryContentChange":
                countryMinusSlide = minus;
            break;
            case "categoryContentChange":

                categoryMinusSlide = minus;
                break;
            case "languageContentChange":

                languageMinusSlide = minus;
                break;
        default:

      }

        break;
      case 5:

      let fiveTotalLeft = totalLeft *5;
      fiveTotalLeft = "-" + fiveTotalLeft.toString() + "px"
      contentChange.style.marginLeft = fiveTotalLeft;
      minus = 6;

      switch (contentChange.id) {
        case "sliderContentChange":
              minusSlide = minus;
          break;
        case "sourceContentChange":
              sourceMinusSlide = minus;
          break;
          case "countryContentChange":
                countryMinusSlide = minus;
            break;
            case "categoryContentChange":

                categoryMinusSlide = minus;
                break;
            case "languageContentChange":

                languageMinusSlide = minus;
                break;
        default:

      }

        break;
      case 6:

      let sixTotalLeft = totalLeft *6;
      sixTotalLeft = "-" + sixTotalLeft.toString() + "px"
      contentChange.style.marginLeft = sixTotalLeft;
      minus = 7;

      switch (contentChange.id) {
        case "sliderContentChange":
              minusSlide = minus;
          break;
        case "sourceContentChange":
              sourceMinusSlide = minus;
          break;

          case "countryContentChange":
                countryMinusSlide = minus;
            break;

            case "categoryContentChange":

                categoryMinusSlide = minus;
                break;
            case "languageContentChange":

                languageMinusSlide = minus;
                break;
        default:

      }

        break;
      case 7:

      let sevenTotalLeft = totalLeft *7;
      sevenTotalLeft = "-" + sevenTotalLeft.toString() + "px"
      contentChange.style.marginLeft = sevenTotalLeft;
      minus = 8;

      switch (contentChange.id) {
        case "sliderContentChange":
              minusSlide = minus;
          break;
        case "sourceContentChange":
              sourceMinusSlide = minus;
          break;

          case "countryContentChange":
                countryMinusSlide = minus;
            break;

            case "categoryContentChange":

                categoryMinusSlide = minus;
                break;
            case "languageContentChange":

                languageMinusSlide = minus;
                break;
        default:

      }

        break;
      case 8:

      let eightTotalLeft = totalLeft *8;
      eightTotalLeft = "-" + eightTotalLeft.toString() + "px"
      contentChange.style.marginLeft = eightTotalLeft;
      minus = 9;

      switch (contentChange.id) {
        case "sliderContentChange":
              minusSlide = minus;
          break;
        case "sourceContentChange":
              sourceMinusSlide = minus;
          break;
          case "countryContentChange":
                countryMinusSlide = minus;
            break;
            case "categoryContentChange":

                categoryMinusSlide = minus;
                break;
            case "languageContentChange":

                languageMinusSlide = minus;
                break;
        default:

      }

        break;
      case 9:

      let nineTotalLeft = totalLeft *9;
      nineTotalLeft = "-" + nineTotalLeft.toString() + "px"
      contentChange.style.marginLeft = nineTotalLeft;
      minus = 10;

      switch (contentChange.id) {
        case "sliderContentChange":
              minusSlide = minus;
          break;
        case "sourceContentChange":
              sourceMinusSlide = minus;
          break;

          case "countryContentChange":
                countryMinusSlide = minus;
            break;

            case "categoryContentChange":

                categoryMinusSlide = minus;
                break;
            case "languageContentChange":

                languageMinusSlide = minus;
                break;
        default:

      }

        break;
      case 10:

      let tenTotalLeft = totalLeft *10;
      tenTotalLeft = "-" + tenTotalLeft.toString() + "px"
      contentChange.style.marginLeft = tenTotalLeft;
      minus = 11;


      switch (contentChange.id) {
        case "sliderContentChange":
              minusSlide = minus;
          break;
        case "sourceContentChange":
              sourceMinusSlide = minus;
          break;

          case "countryContentChange":
                countryMinusSlide = minus;
            break;

            case "categoryContentChange":

                categoryMinusSlide = minus;
                break;
            case "languageContentChange":

                languageMinusSlide = minus;
                break;
        default:

      }

        break;
      case 11:

        let elevenTotalLeft = totalLeft *11;
        elevenTotalLeft = "-" + elevenTotalLeft.toString() + "px"
        contentChange.style.marginLeft = elevenTotalLeft;
        minus = 12;

        switch (contentChange.id) {
          case "sliderContentChange":
                minusSlide = minus;
            break;
          case "sourceContentChange":
                sourceMinusSlide = minus;
            break;
          case "countryContentChange":
                countryMinusSlide = minus;
            break;

            case "categoryContentChange":

                categoryMinusSlide = minus;
                break;
            case "languageContentChange":

                languageMinusSlide = minus;
                break;
          default:

        }

        break;
      case 12:

      let twelveTotalLeft = totalLeft *12;
      twelveTotalLeft = "-" + twelveTotalLeft.toString() + "px"
      contentChange.style.marginLeft = twelveTotalLeft;
      minus = 13;


      switch (contentChange.id) {
        case "sliderContentChange":
              minusSlide = minus;
          break;
        case "sourceContentChange":
              sourceMinusSlide = minus;
          break;
        case "countryContentChange":
                countryMinusSlide = minus;
            break;

            case "categoryContentChange":

                categoryMinusSlide = minus;
                break;
            case "languageContentChange":

                languageMinusSlide = minus;
                break;
        default:

      }

        break;
      case 13:

      let thirteenTotalLeft = totalLeft *13;
      thirteenTotalLeft = "-" + thirteenTotalLeft.toString() + "px"
      contentChange.style.marginLeft = thirteenTotalLeft;
      minus = 14;

      switch (contentChange.id) {
        case "sliderContentChange":
              minusSlide = minus;
          break;
        case "sourceContentChange":
              sourceMinusSlide = minus;
          break;
        case "countryContentChange":
                countryMinusSlide = minus;
            break;

            case "categoryContentChange":

                categoryMinusSlide = minus;
                break;
            case "languageContentChange":

                languageMinusSlide = minus;
                break;
        default:

      }

        break;
      case 14:

      let fifteenTotalLeft = totalLeft *14;
      fifteenTotalLeft = "-" + fifteenTotalLeft.toString() + "px"
      contentChange.style.marginLeft = fifteenTotalLeft;
      minus = 15;

      switch (contentChange.id) {
        case "sliderContentChange":
              minusSlide = minus;
          break;
        case "sourceContentChange":
              sourceMinusSlide = minus;
          break;
          case "countryContentChange":
                countryMinusSlide = minus;
            break;

            case "categoryContentChange":

                categoryMinusSlide = minus;
                break;
            case "languageContentChange":

                languageMinusSlide = minus;
                break;
        default:

      }

        break;
      case 15:

      let sixteenTotalLeft = totalLeft *15;
      sixteenTotalLeft = "-" + sixteenTotalLeft.toString() + "px"
      contentChange.style.marginLeft = sixteenTotalLeft;
      minus = 16;

      switch (contentChange.id) {
        case "sliderContentChange":
              minusSlide = minus;
          break;
        case "sourceContentChange":
              sourceMinusSlide = minus;
          break;
          case "countryContentChange":
                countryMinusSlide = minus;
            break;

            case "categoryContentChange":

                categoryMinusSlide = minus;
                break;
            case "languageContentChange":

                languageMinusSlide = minus;
                break;
        default:

      }

        break;



      }

      minusFunction(minusSlide,sourceMinusSlide, countryMinusSlide, categoryMinusSlide, languageMinusSlide)





}

function showOrNot(slider, contentChange){



}

function minusFunction(minusSlide,sourceMinusSlide, countryMinusSlide,categoryMinusSlide,languageMinusSlide){

  console.log("sourceMinusSlide: ", sourceMinusSlide);
  console.log("countryMinusSlide: ", countryMinusSlide )
  console.log("categoryMinusSlide: ", categoryMinusSlide )
  console.log("languageMinusSlide: ", languageMinusSlide )
  console.log("minusSlide: ", minusSlide )


sourceSwitch(sourceMinusSlide)
countrySwitch(countryMinusSlide)
categorySwitch(categoryMinusSlide)
languageSwitch(languageMinusSlide)

  if(minusSlide !==5){
    languageSlider.slider.style.opacity = "0";
    languageSlider.languageContentChange.style.display = "none"
  }else{
    languageSlider.slider.style.opacity = "1";
    languageSlider.languageContentChange.style.display = "block"

  }

  if(minusSlide !==4){
    categorySlider.slider.style.opacity = "0";
    categorySlider.categoryContentChange.style.display = "none"
  }else{
    categorySlider.slider.style.opacity = "1";
    categorySlider.categoryContentChange.style.display = "block"

  }

  if(minusSlide !==3){
    countrySlider.slider.style.opacity = "0";
    countrySlider.countryContentChange.style.display = "none"

  }else{
    countrySlider.slider.style.opacity = "1";
    countrySlider.countryContentChange.style.display = "block"

  }
  if(minusSlide !==2){
    sourceSlider.slider.style.opacity = "0";
    sourceSlider.sourceContentChange.style.display = "none"

  }else{
    sourceSlider.slider.style.opacity = "1";
    sourceSlider.sourceContentChange.style.display = "block"

  }

  if(sourceMinusSlide>1 || languageMinusSlide > 1 || slider.children[0].value !== ""){

    countrySlider.slider.style.opacity = "0";
    countrySlider.countryContentChange.style.display = "none"

      if(minusSlide === 3 || minusSlide === 4){
        canNotShow.style.display = "block"
        if(sourceMinusSlide>1 && languageMinusSlide >1 && slider.children[0].value !== ""){

            if(minusSlide === 3){
              canNotShow.innerHTML = "<h4>Sorry you can not combine Country with Sourcename, Language or Key press clear to reset your tag</h4>"

            }else{
              canNotShow.innerHTML = "<h4>Sorry you can not combine Category with Sourcename, Language or Key press clear to reset your tag</h4>"

            }

        }
        else if(sourceMinusSlide>1 && languageMinusSlide >1){
          if(minusSlide === 3){
            canNotShow.innerHTML = "<h4>Sorry you can not combine Country with Sourcename or Language press clear to reset your tag</h4>"

          }else{
            canNotShow.innerHTML = "<h4>Sorry you can not combine Category with Sourcename or Language press clear to reset your tag</h4>"

          }

        }else if(languageMinusSlide>1 && slider.children[0].value !== ""){
          if(minusSlide === 3){
            canNotShow.innerHTML = "<h4>Sorry you can not combine Country with Language or Key press clear to reset your tag</h4>"

          }else{
            canNotShow.innerHTML = "<h4>Sorry you can not combine Category with Language or Key press clear to reset your tag</h4>"

          }

        }else if(sourceMinusSlide>1 && slider.children[0].value !== ""){
          if(minusSlide === 3){
            canNotShow.innerHTML = "<h4>Sorry you can not combine Country with Sourcename or Key press clear to reset your tag</h4>"

          }else{
            canNotShow.innerHTML = "<h4>Sorry you can not combine Category with Sourcename or Key press clear to reset your tag</h4>"

          }


        }else if(slider.children[0].value !== ""){
          if(minusSlide === 3){
            canNotShow.innerHTML = "<h4>Sorry you can not combine Country with Key press clear to reset your tag</h4>"

          }else{
            canNotShow.innerHTML = "<h4>Sorry you can not combine Category with Sourcename press clear to reset your tag</h4>"

          }

        }
        else if(sourceMinusSlide>1){

          if(minusSlide === 3){

            canNotShow.innerHTML = "<h4>Sorry you can not combine Country with Sourcename press clear to reset your tag</h4>"

          }else{
            canNotShow.innerHTML = "<h4>Sorry you can not combine Category with Sourcename press clear to reset your tag</h4>"

          }
        }else if(languageMinusSlide >1){
          if(minusSlide === 3){

            canNotShow.innerHTML = "<h4>Sorry you can not combine Country with Language press clear to reset your tag</h4>"

          }else{
            canNotShow.innerHTML = "<h4>Sorry you can not combine Category with Language press clear to reset your tag</h4>"

          }

        }else if(    slider.children[0].value !== ""){
          if(minusSlide === 3){

            canNotShow.innerHTML = "<h4>Sorry you can not combine Country with Key press clear to reset your tag</h4>"
          }else{
            canNotShow.innerHTML = "<h4>Sorry you can not combine Category with Key press clear to reset your tag</h4>"

          }

        }

      }else{
        canNotShow.innerHTML= ""
      }


    categorySlider.slider.style.opacity = "0";
    categorySlider.categoryContentChange.style.display = "none"
  }

  if(countryMinusSlide >1 || categoryMinusSlide >1){
    sourceSlider.slider.style.opacity = "0";
    sourceSlider.sourceContentChange.style.display = "none"
    languageSlider.slider.style.opacity = "0";
    languageSlider.languageContentChange.style.display = "none"

    slider.inputKeyword.disabled = true
    slider.inputKeyword.placeholder = "Clear tag"

    if(minusSlide === 1 || minusSlide === 2 || minusSlide === 5){
      canNotShow.style.display = "block"
      if(countryMinusSlide >1 && categoryMinusSlide >1){

        if(minusSlide ===1){
          canNotShow.innerHTML = "<h4>Sorry you can not combine Key with Country or Category press clear to reset your tag</h4>"

        }else if(minusSlide === 2){
          canNotShow.innerHTML = "<h4>Sorry you can not combine Sourcename with Country or Category press clear to reset your tag</h4>"

        }else{
          canNotShow.innerHTML = "<h4>Sorry you can not combine Language with Country or Category press clear to reset your tag</h4>"

        }

      }  else if(countryMinusSlide>1){

          if(minusSlide === 1){
            canNotShow.innerHTML = "<h4>Sorry you can not combine Key with Country press clear to reset your tag</h4>"

          }else if(minusSlide=== 2){
            canNotShow.innerHTML = "<h4>Sorry you can not combine Sourcename with Country press clear to reset your tag</h4>"

          }else{
            canNotShow.innerHTML = "<h4>Sorry you can not combine Language with Country press clear to reset your tag</h4>"

          }

        }else if(categoryMinusSlide>1){

            if(minusSlide === 1){
              canNotShow.innerHTML = "<h4>Sorry you can not combine Key with Category press clear to reset your tag</h4>"

            }else if(minusSlide === 2){
              canNotShow.innerHTML = "<h4>Sorry you can not combine Sourcename with Category press clear to reset your tag</h4>"

            }else {
              canNotShow.innerHTML = "<h4>Sorry you can not combine Language with Category press clear to reset your tag</h4>"

            }


        }


    }else{
      canNotShow.innerHTML= ""
    }



  }else{
    slider.inputKeyword.disabled = false
    slider.inputKeyword.placeholder = "Search"

  }





}












for(let i=0; i< sourceSlider.children.length; i++){



    if(sourceSlider.children[i] !== undefined){
      sourceSlider.children[i].addEventListener("click",function(){

          let tag = sourceSlider.children[i];
          contentChangeClick(tag, sourceSlider.children.length, i, sourceSlider.sourceContentChange, sourceMinusSlide, sourceContentChangeWidth )

        })

  }
}

for(let i=0; i< countrySlider.children.length; i++){



    if(countrySlider.children[i] !== undefined){
      countrySlider.children[i].addEventListener("click",function(){

          let tag = countrySlider.children[i];
          contentChangeClick(tag, countrySlider.children.length, i, countrySlider.countryContentChange, countryMinusSlide, countryContentChangeWidth)

        })

  }
}

for(let i=0; i< categorySlider.children.length; i++){



    if(categorySlider.children[i] !== undefined){
      categorySlider.children[i].addEventListener("click",function(){

          let tag = categorySlider.children[i];
          contentChangeClick(tag, categorySlider.children.length, i, categorySlider.categoryContentChange, categoryMinusSlide, categoryContentChangeWidth)

        })

  }
}

for(let i=0; i< languageSlider.children.length; i++){



    if(languageSlider.children[i] !== undefined){
      languageSlider.children[i].addEventListener("click",function(){

          let tag = languageSlider.children[i];
          contentChangeClick(tag, languageSlider.children.length, i, languageSlider.languageContentChange, languageMinusSlide, languageContentChangeWidth)

        })

  }
}


for( let i =0; i< slider.children.length; i++){


  if(slider.children[i] !== undefined){

      slider.children[i].addEventListener("click",function(){

          let tag = slider.children[i];

          contentChangeClick(tag, slider.children.length, i, slider.sliderContentChange, minusSlide, sliderContentChangeWidth)


      })

  }


}



function tagsContentChangeClick(tag, length, i, contentChange, minus, offsetWidth){

  let totalLeft = offsetWidth;

  let nummer = i;

  tagsMinusSlide = nummer
  console.log(tagsMinusSlide)
  totalLeft =  (nummer * totalLeft).toString()

  contentChange.style.marginLeft = "-" + totalLeft + "px"

  if(contentChange.children[i].innerText !== "Your tags"){

      console.log(contentChange.children.length)
      let length = contentChange.children[i].children.length
      let string = ""
      for(let x = 0; x< length; x++ ){

        if(x === 0){
          let ownInputTag = document.createElement("span");
          ownInputTag.setAttribute("id", "ownInputTag");
          ownInputTag.innerHTML = contentChange.children[i].children[x].innerHTML;


          string += "<span id='ownInputTag'>"+ownInputTag.innerHTML+"</span>"
          console.log(contentChange.children[i].children[x])

        }
        if(x === 1){
          let ownSourceTag = document.createElement("span");
          ownSourceTag.setAttribute("id", "ownSourceTag");
          ownSourceTag.innerHTML = contentChange.children[i].children[x].innerHTML;


          string += "<span id='ownSourceTag'>"+ownSourceTag.innerHTML+"</span>"
        }

        if(x === 2){
          let ownCountryTag = document.createElement("span");
          ownCountryTag.setAttribute("id", "ownCountryTag");
          ownCountryTag.innerHTML = contentChange.children[i].children[x].innerHTML;


          string += "<span id='ownCountryTag'>"+ownCountryTag.innerHTML+"</span>"
        }

        if(x === 3){
          let ownCategoryTag = document.createElement("span");
          ownCategoryTag.setAttribute("id", "ownCategoryTag");
          ownCategoryTag.innerHTML = contentChange.children[i].children[x].innerHTML;


          string += "<span id='ownCategoryTag'>"+ownCategoryTag.innerHTML+"</span>"
        }
        if(x=== 4){
          let ownLanguageTag = document.createElement("span");
          ownLanguageTag.setAttribute("id", "ownLanguageTag");
          ownLanguageTag.innerHTML = contentChange.children[i].children[x].innerHTML;


          string += "<span id='ownLanguageTag'>"+ownLanguageTag.innerHTML+"</span>"
        }
      }

      console.log(string)

      console.log(contentChange.children[i].innerHTML)

    // let ownSourceTag = document.createElement("span");
    // ownSourceTag.innerText = contentChange.children[i].children[1].innerHTML
    // ownSourceTag.setAttribute("id", "ownSourceTag")

      // contentChange.children[i].children[0].setAttribute("id","ownInputTag")
      // contentChange.children[i].children[1].setAttribute("id","ownSourceTag")



  document.getElementById("ownCurrentTag").innerHTML =  string
}else{
  document.getElementById("ownCurrentTag").innerHTML =  ""

}

  if(tagsMinusSlide> 0){
    slider.sliderContent.style.display = "none"
    sourceSlider.slider.style.opacity = "0";
    sourceSlider.sourceContentChange.style.display = "none"
    languageSlider.slider.style.opacity = "0";
    languageSlider.languageContentChange.style.display = "none"
    countrySlider.slider.style.opacity = "0";
    countrySlider.countryContentChange.style.display = "none"
    categorySlider.slider.style.opacity = "0";
    categorySlider.categoryContentChange.style.display = "none"

    currentTag.inputTag.innerHTML = "";
    currentTag.sourceTag.innerHTML = "";
    currentTag.countryTag.innerHTML = "";
    currentTag.categoryTag.innerHTML = "";
    currentTag.languageTag.innerHTML = "";

  }else{
    slider.sliderContent.style.display = "block"
    clear()

  }

  console.log(tagsMinusSlide)

}





function tagsSwitch(){
  return "hej"
}
