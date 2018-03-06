let beforeLoggedIn = document.getElementById("beforeLoggedIn")

let deleteCurrentTag = document.getElementById("deleteTag");


let tagsSlider ={

    tagsNextBtn : document.getElementById('tagsNextBtn'),
    tagsPrevBtn: document.getElementById("tagsPrevBtn"),
    tagsContentChange : document.getElementById("tagsSliderContentChange"),
    slider: document.getElementById("tagsSlider")
}

let currentTag = {

  inputTag : document.getElementById("inputTag"),
  sourceTag : document.getElementById("sourceTag"),
  countryTag: document.getElementById("countryTag"),
  categoryTag : document.getElementById("categoryTag"),
  languageTag: document.getElementById("languageTag"),

}

let previousTagBtn = document.getElementById("prev");
let nextTagBtn = document.getElementById("next");
let sliderContent = document.getElementById("sliderContent");
let sliderContentChange = document.getElementById("sliderContentChange");

let slider = {

    nextTagBtn: document.getElementById("nextInput"),
    prevTagBtn: document.getElementById("prevInput"),
    sliderContent : document.getElementById("sliderContent"),
    sliderContentChange: document.getElementById("sliderContentChange"),
    sourceName : document.getElementById("sourceName"),
    inputKeyword: document.getElementById("inputKeyword")
}

slider.prevTagBtn.style.opacity = "0"

let sourceSlider = {
    nextBtn : document.getElementById("nextBtn"),
    prevBtn : document.getElementById("prevBtn"),
    sourceContentChange : document.getElementById("sourceContentChange"),
    slider : document.getElementById("sourceSlider")
}

sourceSlider.prevBtn.style.opacity = "0"


let countrySlider = {
    countryNextBtn : document.getElementById("countryNextBtn"),
    countryPrevBtn : document.getElementById("countryPrevBtn"),
    countryContentChange : document.getElementById("countryContentChange"),
    slider: document.getElementById("countrySlider")

}


countrySlider.countryPrevBtn.style.opacity ="0"

let categorySlider = {
  categoryNextBtn: document.getElementById("categoryNextBtn"),
  categoryPrevBtn: document.getElementById("categoryPrevBtn"),
  categoryContentChange : document.getElementById("categoryContentChange"),
  slider: document.getElementById("categorySlider")
}

categorySlider.categoryPrevBtn.style.opacity = "0"

let languageSlider = {

  languangeNextBtn : document.getElementById("languangeNextBtn"),
  languangePrevBtn : document.getElementById("languangePrevBtn"),
  languageContentChange : document.getElementById("languageContentChange"),
  slider : document.getElementById("languageSlider")
}
languageSlider.languangePrevBtn.style.opacity ="0"




// let sliderContentChangeWidth = sliderContentChange.offsetWidth;
let sliderContentChangeWidth = slider.sliderContentChange.offsetWidth;
let sourceContentChangeWidth = sourceSlider.sourceContentChange.offsetWidth;
let countryContentChangeWidth = countrySlider.countryContentChange.offsetWidth;
let categoryContentChangeWidth = categorySlider.categoryContentChange.offsetWidth;
let languageContentChangeWidth = languageSlider.languageContentChange.offsetWidth;


//Tillhör previousTagBtn och nextTagBtn
let minusSlide = 1;
let totalLeft = "";
/////////////////////////

// För sourceSlider

let sourceMinusSlide = 1;
let sourceTotalLeft = ""

//For countrySlider

let countryMinusSlide = 1;
let countryTotalLeft = ""

//For categorySlider

let categoryMinusSlide = 1;
let categoryTotalLeft = "";

// For languageSlider

let languageMinusSlide = 1;
let languageTotalLeft = "";

//For tagsSlider

let tagsMinusSlide = 1;
let tagsTotalLeft = "";


slider.inputKeyword.addEventListener("change",function(){

  if(slider.inputKeyword.value === ""){
    console.log(slider.inputKeyword.innerHTML)

    currentTag.inputTag.innerHTML = ""
    tagsSlider.tagsNextBtn.style.display = "block";
    tagsSlider.tagsPrevBtn.style.display = "block";
    tagsSlider.tagsContentChange.children[0].innerHTML = "Scroll through your saved tags"

  }else{
    console.log(slider.inputKeyword.innerHTML)

    currentTag.inputTag.innerHTML = "#"+slider.inputKeyword.value;
    tagsSlider.tagsNextBtn.style.display = "none";
    tagsSlider.tagsPrevBtn.style.display = "none";
    // tagsSlider.tagsContentChange.children[0].innerHTML = "Delete current tag to be able to scroll"


  }


})


slider.inputKeyword.addEventListener("keydown",function(e){


  console.log(e.key)
  if(e.key !== " " && e.key !== "Backspace"){
    currentTag.inputTag.innerHTML += e.key;
  }else if(e.key === "Backspace"){
    currentTag.inputTag.innerHTML = currentTag.inputTag.innerHTML.substring(0,currentTag.inputTag.innerHTML.length-1)
  }

})



// När du klickar på nextInput

slider.nextTagBtn.addEventListener("click",function(){


    let sliderContentChangeLength = sliderContentChange.children.length;

      totalLeft = minusSlide * sliderContentChangeWidth;
      totalLeft = totalLeft.toString();




      totalLeft = "-" + totalLeft + "px";

      if(minusSlide> 0){
        slider.prevTagBtn.style.opacity = "1";
      }

      if(minusSlide === sliderContentChangeLength-1){
        slider.nextTagBtn.style.opacity = "0";
      }

      if(minusSlide === 1){

        if(slider.inputKeyword.value === ""){

            currentTag.inputTag.innerHTML = ""


        }else{
            currentTag.inputTag.innerHTML = "#"+slider.inputKeyword.value;

        }
      }

      if(sliderContentChangeLength > minusSlide){

        slider.sliderContentChange.style.marginLeft = totalLeft;
        minusSlide++
        if(minusSlide === 2){
          if(countryMinusSlide> 1 || categoryMinusSlide > 1 ){
            sourceSlider.slider.style.opacity ="0";

          }else{
            sourceSlider.slider.style.opacity ="1";

          }

          // sourceContentChangeWidth = sourceSlider.sourceContentChange.offsetWidth;
        }else {
          sourceSlider.slider.style.opacity ="0"
        }

        if(minusSlide === 3){


          if(sourceMinusSlide>1 || slider.inputKeyword.value !== "" || languageMinusSlide>1){
            countrySlider.slider.style.opacity = "0";



          }else{
            countrySlider.slider.style.opacity = "1";
          }
          // countryContentChangeWidth = countrySlider.countryContentChange.offsetWidth;


        }else{
          countrySlider.slider.style.opacity = "0"
        }

        if(minusSlide === 4){

          if(sourceMinusSlide>1 || slider.inputKeyword.value !== "" || languageMinusSlide>1){
            categorySlider.slider.style.opacity = "0"

          }else{
            categorySlider.slider.style.opacity = "1"

          }


        }else{
          categorySlider.slider.style.opacity = "0"
        }

        if(minusSlide === 5){
          if(countryMinusSlide> 1 || categoryMinusSlide > 1){
            languageSlider.slider.style.opacity = "0"

          }else{
            languageSlider.slider.style.opacity = "1"

          }
        }else{
          languageSlider.slider.style.opacity = "0"
        }

      }



})


slider.prevTagBtn.addEventListener("click",function(){
  let sliderContentChangeLength = sliderContentChange.children.length;

  totalLeft = minusSlide * sliderContentChangeWidth;

  totalLeft = totalLeft - (sliderContentChangeWidth *2);
  totalLeft = totalLeft.toString();
  totalLeft = "-" + totalLeft + "px";



  if(minusSlide === 1){

    if(slider.inputKeyword.value === ""){
    currentTag.inputTag.innerHTML = ""
  }else{
      currentTag.inputTag.innerHTML = "#"+slider.inputKeyword.value;
  }
  }

  if(minusSlide>1){

    slider.sliderContentChange.style.marginLeft = totalLeft;


    minusSlide--

    if(minusSlide === 1){
      slider.prevTagBtn.style.opacity = "0"
    }
    if(minusSlide < sliderContentChangeLength){
      slider.nextTagBtn.style.opacity = "1"

    }



    if(minusSlide === 2){

      if(countryMinusSlide> 1 || categoryMinusSlide > 1){
        sourceSlider.slider.style.opacity ="0";

      }else{
        sourceSlider.slider.style.opacity ="1";

      }
      sourceContentChangeWidth = sourceSlider.sourceContentChange.offsetWidth;

    }else {
      sourceSlider.slider.style.opacity ="0"
    }

    if(minusSlide === 3){
      if(sourceMinusSlide>1 || slider.inputKeyword.value !== "" || languageMinusSlide>1){
        countrySlider.slider.style.opacity = "0";

      }else{
        countrySlider.slider.style.opacity = "1";

      }


      sourceContentChangeWidth = countrySlider.countryContentChange.offsetWidth;

    }else{
      countrySlider.slider.style.opacity = "0"
    }

    if(minusSlide === 4){
      if(sourceMinusSlide>1 || slider.inputKeyword.value !== "" || languageMinusSlide>1){
        categorySlider.slider.style.opacity = "0"

      }else{
        categorySlider.slider.style.opacity = "1"

      }
    }else{
      categorySlider.slider.style.opacity = "0"
    }
    if(minusSlide === 5){
      if(countryMinusSlide> 1 || categoryMinusSlide > 1){
        languageSlider.slider.style.opacity = "0"

      }else{
        languageSlider.slider.style.opacity = "1"

      }
    }else{
      languageSlider.slider.style.opacity = "0"
    }

  }


})


function sourceSwitch(sourceMinusSlide){

  switch (sourceMinusSlide) {
    case 1:
        currentTag.sourceTag.innerHTML = " ";
        sourceCode = null;
      break;
    case 2:
      currentTag.sourceTag.innerHTML = "#CNN";
      sourceCode = 'cnn';
      break;
      case 3:
        currentTag.sourceTag.innerHTML = "#BBC";
        sourceCode = 'bbc-news';
        break;
        case 4:
          currentTag.sourceTag.innerHTML = "#ABCNews";
          sourceCode = 'abc-news';
          break;
          case 5:
            currentTag.sourceTag.innerHTML = "#AlJazeera";
            sourceCode = 'al-jazeera-english';
            break;
            case 6:
              currentTag.sourceTag.innerHTML = "#ESPN";
              sourceCode = 'espn';
              break;
              case 7:
                currentTag.sourceTag.innerHTML = "#FinancialTimes";
                sourceCode = 'financial-times';
                break;
                case 8:
                  currentTag.sourceTag.innerHTML = "#FoxNews";
                  sourceCode = 'fox-news';
                  break;
                  case 9:
                    currentTag.sourceTag.innerHTML = "#DailyMail";
                    sourceCode = 'daily-mail';
                    break;
                    case 10:
                      currentTag.sourceTag.innerHTML = "#TheGuardian";
                      sourceCode = 'the-guardian-uk';
                      break;
                      case 11:
                        currentTag.sourceTag.innerHTML = "#TheNewYorkTimes";
                        sourceCode = 'the-new-york-times';
                        break;
                        case 12:
                          currentTag.sourceTag.innerHTML = "#IGN";
                          sourceCode = 'ign';
                          break;
                          case 13:
                            currentTag.sourceTag.innerHTML = "#CNNSpanish";
                            sourceCode = 'cnn-es';
                            break;
                            case 14:
                              currentTag.sourceTag.innerHTML = "#Bloomberg";
                              sourceCode = 'bloomberg';
                              break;
                              case 15:
                                currentTag.sourceTag.innerHTML = "#CBS";
                                sourceCode = 'cbs-news';
                                break;
                default:

  }
}


function countrySwitch(countryMinusSlide){

  switch (countryMinusSlide) {
    case 1:
      currentTag.countryTag.innerHTML = " ";
      countryCode = null;
      break;
    case 2:
      currentTag.countryTag.innerHTML = "#USA";
      countryCode = 'us';
      break;
    case 3:
      currentTag.countryTag.innerHTML = "#Canada";
      countryCode = 'ca';
      break;
    case 4:
      currentTag.countryTag.innerHTML = "#England";
      countryCode = 'gb';
      break;
    case 5:
    currentTag.countryTag.innerHTML = "#Germany";
    countryCode = 'de';
      break;
    case 6:
    currentTag.countryTag.innerHTML = "#France";
    countryCode = 'fr';
      break;
    case 7:
    currentTag.countryTag.innerHTML = "#Australia";
    countryCode = 'au';
      break;
    case 8:
    currentTag.countryTag.innerHTML = "#NewZeeland";
    countryCode = 'nz';
      break;
    case 9:
    currentTag.countryTag.innerHTML = "#China";
    countryCode = 'ch';
      break;
    case 10:
    currentTag.countryTag.innerHTML = "#Japan";
    countryCode = 'jp';
      break;
    case 11:
    currentTag.countryTag.innerHTML = "#Russia";
    countryCode = 'ru';
      break;
    case 12:
    currentTag.countryTag.innerHTML = "#Spain";
    countryCode = 'es';
      break;
    case 13:
    currentTag.countryTag.innerHTML = "#Sweden";
    countryCode = 'se';
      break;
    case 14:
    currentTag.countryTag.innerHTML = "#Norway";
    countryCode = 'no';
      break;
    case 15:
    currentTag.countryTag.innerHTML = "#Turkey";
    countryCode = 'tr';
      break;


    default:

  }

}


function categorySwitch(categoryMinusSlide){

  switch (categoryMinusSlide) {
    case 1:
      currentTag.categoryTag.innerHTML = " ";
      categoryCode = null;
      break;
    case 2:
      currentTag.categoryTag.innerHTML = "#Business";
      categoryCode = 'business';
      break;
    case 3:
      currentTag.categoryTag.innerHTML = "#Entertainment";
      categoryCode = 'entertainment';
      break;
    case 4:
      currentTag.categoryTag.innerHTML = "#General";
      categoryCode = 'general';
      break;
    case 5:
    currentTag.categoryTag.innerHTML = "#Health";
      categoryCode = 'health';
      break;
    case 6:
    currentTag.categoryTag.innerHTML = "#Science";
      categoryCode = 'science';
      break;
    case 7:
    currentTag.categoryTag.innerHTML = "#Sport";
      categoryCode = 'sports';
      break;
    case 8:
    currentTag.categoryTag.innerHTML = "#Technology";
      categoryCode = 'technology';
      break;



    default:

  }

}


function languageSwitch(languageMinusSlide){

  switch (languageMinusSlide) {
    case 1:
      currentTag.languageTag.innerHTML = " ";
      languageCode = null;
      break;
    case 2:
      currentTag.languageTag.innerHTML = "#Arabic";
      languageCode = 'ar';
      break;
    case 3:
      currentTag.languageTag.innerHTML = "#English";
      languageCode = 'en';
      break;
    case 4:
    currentTag.languageTag.innerHTML = "#Spanish";
    languageCode = 'es';
      break;
    case 5:
    currentTag.languageTag.innerHTML = "#French";
    languageCode = 'fr';
      break;
    case 6:
    currentTag.languageTag.innerHTML = "#Hebrew";
    languageCode = 'he';
      break;
    case 7:
    currentTag.languageTag.innerHTML = "#Italian";
    languageCode = 'it';
      break;
    case 8:
    currentTag.languageTag.innerHTML = "#Dutch";
    languageCode = 'nl';
      break;
    case 9:
    currentTag.languageTag.innerHTML = "#Norweigan";
    languageCode = 'no';
      break;
    case 10:
    currentTag.languageTag.innerHTML = "#Portugues";
    languageCode = 'pt';
      break;
    case 11:
    currentTag.languageTag.innerHTML = "#Russian";
    languageCode = 'ru';
      break;
    case 12:
    currentTag.languageTag.innerHTML = "#Swedish";
    languageCode = 'se';
      break;

    default:

  }

}

function showArrowsOrNot(minusSlide,prevBtn,nextBtn, contentChangeLength ){

  console.log("minusSlide: ", minusSlide);
  console.log("prevBtn: ", prevBtn);
  console.log("nextBtn: ", nextBtn);
  console.log("contentChangeLength: ", contentChangeLength)



  if(minusSlide> 1){
    prevBtn.style.opacity = "1";
    console.log("prevBtn: ", prevBtn);

  }

  if(minusSlide === contentChangeLength-1){
    nextBtn.style.opacity = "0";
  }

}

function sliderFunctionRight(contentChangeLength, totalLeft, contentChangeWidth, sliderContentChange, funktionen, nextBtn, prevBtn){



  switch (sliderContentChange.id) {

    case "sourceContentChange":

    totalLeft = sourceMinusSlide * contentChangeWidth;
    totalLeft = totalLeft.toString();

    totalLeft = "-" + totalLeft + "px";

      if(contentChangeLength> sourceMinusSlide){

        sliderContentChange.style.marginLeft = totalLeft;
        sourceMinusSlide++
        tagsSlider.tagsNextBtn.style.display = "none";
        tagsSlider.tagsPrevBtn.style.display = "none";
        tagsSlider.tagsContentChange.children[0].innerHTML = "Delete current tag to be able to scroll"
                showArrowsOrNot(sourceMinusSlide, prevBtn, nextBtn, contentChangeLength+1 )
        funktionen(sourceMinusSlide)
      }
      break;

    case "countryContentChange":
    totalLeft = countryMinusSlide * contentChangeWidth;
    totalLeft = totalLeft.toString();

    totalLeft = "-" + totalLeft + "px";

      if(contentChangeLength> countryMinusSlide){

        sliderContentChange.style.marginLeft = totalLeft;
        countryMinusSlide++

        tagsSlider.tagsNextBtn.style.display = "none";
        tagsSlider.tagsPrevBtn.style.display = "none";
        tagsSlider.tagsContentChange.children[0].innerHTML = "Delete current tag to be able to scroll"

        if(countryMinusSlide>1){
          slider.inputKeyword.disabled = true;
          slider.inputKeyword.setAttribute("placeholder", "You can not combine that tag")


        }else{
          slider.inputKeyword.disabled = false;
          slider.inputKeyword.setAttribute("placeholder", "Search keyword or phrase")


        }
        showArrowsOrNot(countryMinusSlide, prevBtn, nextBtn, contentChangeLength+1 )

        funktionen(countryMinusSlide)
      }

      break;

    case "categoryContentChange":
    totalLeft = categoryMinusSlide * contentChangeWidth;
    totalLeft = totalLeft.toString();

    totalLeft = "-" + totalLeft + "px";

      if(contentChangeLength> categoryMinusSlide){

        sliderContentChange.style.marginLeft = totalLeft;
        categoryMinusSlide++

        tagsSlider.tagsNextBtn.style.display = "none";
        tagsSlider.tagsPrevBtn.style.display = "none";
        tagsSlider.tagsContentChange.children[0].innerHTML = "Delete current tag to be able to scroll"

        if(categoryMinusSlide>1){
          slider.inputKeyword.disabled = true;
          slider.inputKeyword.setAttribute("placeholder", "You can not combine that tag")


        }else{
          slider.inputKeyword.disabled = false;
          slider.inputKeyword.setAttribute("placeholder", "Searc keyword or phrase")



        }
        showArrowsOrNot(categoryMinusSlide, prevBtn, nextBtn, contentChangeLength+1 )

        funktionen(categoryMinusSlide)
      }

      break;
    case "languageContentChange":
    totalLeft = languageMinusSlide * contentChangeWidth;
    totalLeft = totalLeft.toString();

    totalLeft = "-" + totalLeft + "px";

      if(contentChangeLength> languageMinusSlide){

        sliderContentChange.style.marginLeft = totalLeft;
        languageMinusSlide++
        tagsSlider.tagsNextBtn.style.display = "none";
        tagsSlider.tagsPrevBtn.style.display = "none";
        tagsSlider.tagsContentChange.children[0].innerHTML = "Delete current tag to be able to scroll"

        showArrowsOrNot(languageMinusSlide, prevBtn, nextBtn, contentChangeLength+1 )

        funktionen(languageMinusSlide)
      }


      break;

    case "tagsSliderContentChange":

          totalLeft = tagsMinusSlide * contentChangeWidth;
          totalLeft = totalLeft.toString();

          totalLeft = "-" + totalLeft + "px";

          if(contentChangeLength> tagsMinusSlide){

            sliderContentChange.style.marginLeft = totalLeft;
            tagsMinusSlide++

            showArrowsOrNot(tagsMinusSlide, prevBtn,nextBtn,contentChangeLength+1)



          }



      break;



    default:

  }




}

sourceSlider.nextBtn.addEventListener("click", function(){



  let sourceContentChangeLength = sourceSlider.sourceContentChange.children.length;
  sliderFunctionRight(sourceContentChangeLength, sourceTotalLeft, sourceContentChangeWidth, sourceSlider.sourceContentChange, sourceSwitch, sourceSlider.nextBtn, sourceSlider.prevBtn)



})


sourceSlider.prevBtn.addEventListener("click", function(){

  let sourceContentChangeLength = sourceSlider.sourceContentChange.children.length;

  sourceTotalLeft = sourceMinusSlide * sourceContentChangeWidth;

  sourceTotalLeft = sourceTotalLeft - (sourceContentChangeWidth *2);
  sourceTotalLeft = sourceTotalLeft.toString();

  sourceTotalLeft = "-" + sourceTotalLeft + "px";



  if(sourceMinusSlide>1){



    sourceSlider.sourceContentChange.style.marginLeft = sourceTotalLeft;


    sourceMinusSlide--

    if(sourceMinusSlide === 1){

      sourceSlider.prevBtn.style.opacity = "0"
      tagsSlider.tagsNextBtn.style.display = "block";
      tagsSlider.tagsPrevBtn.style.display = "block";
      tagsSlider.tagsContentChange.children[0].innerHTML = "Scroll through your saved tags"

    }
    if(sourceMinusSlide < sourceContentChangeLength){
      sourceSlider.nextBtn.style.opacity = "1"

    }
    sourceSwitch(sourceMinusSlide)




  }

})


countrySlider.countryNextBtn.addEventListener("click",function(){

  let countryContentChangeLength = countrySlider.countryContentChange.children.length;

  sliderFunctionRight(countryContentChangeLength, countryTotalLeft, countryContentChangeWidth, countrySlider.countryContentChange, countrySwitch, countrySlider.countryNextBtn, countrySlider.countryPrevBtn)



})

countrySlider.countryPrevBtn.addEventListener("click",function(){

  let countryContentChangeLength = countrySlider.countryContentChange.children.length;

  countryTotalLeft = countryMinusSlide * countryContentChangeWidth;

  countryTotalLeft = countryTotalLeft - (countryContentChangeWidth *2);
  countryTotalLeft = countryTotalLeft.toString();

  countryTotalLeft =  "-" +countryTotalLeft + "px";


  if(countryMinusSlide>1){



    countrySlider.countryContentChange.style.marginLeft = countryTotalLeft;


    countryMinusSlide--
    if(countryMinusSlide>1){
      slider.inputKeyword.disabled = true;

    }else{
      slider.inputKeyword.disabled = false;


    }
    if(countryMinusSlide === 1){

      countrySlider.countryPrevBtn.style.opacity = "0";
      tagsSlider.tagsNextBtn.style.display = "block";
      tagsSlider.tagsPrevBtn.style.display = "block";
      tagsSlider.tagsContentChange.children[0].innerHTML = "Scroll through your saved tags"

    }
    if(countryMinusSlide < countryContentChangeLength){
      countrySlider.countryNextBtn.style.opacity = "1"

    }
    countrySwitch(countryMinusSlide)



  }


})

categorySlider.categoryNextBtn.addEventListener("click",function(){
  let categoryContentChangeLength = categorySlider.categoryContentChange.children.length;

  sliderFunctionRight(categoryContentChangeLength, categoryTotalLeft, categoryContentChangeWidth, categorySlider.categoryContentChange, categorySwitch, categorySlider.categoryNextBtn, categorySlider.categoryPrevBtn)

})

categorySlider.categoryPrevBtn.addEventListener("click",function(){
  let categoryContentChangeLength = categorySlider.categoryContentChange.children.length;

  categoryTotalLeft = categoryMinusSlide * categoryContentChangeWidth;

  categoryTotalLeft = categoryTotalLeft - (categoryContentChangeWidth *2);
  categoryTotalLeft = categoryTotalLeft.toString();

  categoryTotalLeft =  "-" +categoryTotalLeft + "px";


  if(categoryMinusSlide>1){



    categorySlider.categoryContentChange.style.marginLeft = categoryTotalLeft;


    categoryMinusSlide--


    if(categoryMinusSlide>1){
      slider.inputKeyword.disabled = true;
      slider.inputKeyword.setAttribute("placeholder", "You can not combine that tag")

    }else{
      slider.inputKeyword.disabled = false;
      slider.inputKeyword.setAttribute("placeholder", "Search keyword or phrase")


    }
    if(categoryMinusSlide === 1){

      categorySlider.categoryPrevBtn.style.opacity = "0";
      tagsSlider.tagsNextBtn.style.display = "block";
      tagsSlider.tagsPrevBtn.style.display = "block";
      tagsSlider.tagsContentChange.children[0].innerHTML = "Scroll through your saved tags"

    }
    if(categoryMinusSlide < categoryContentChangeLength){
      categorySlider.categoryNextBtn.style.opacity = "1"

    }

    categorySwitch(categoryMinusSlide)


  }

})

languageSlider.languangeNextBtn.addEventListener("click",function(){

  let languageContentChangeLength = languageSlider.languageContentChange.children.length;

    sliderFunctionRight(languageContentChangeLength, languageTotalLeft, languageContentChangeWidth, languageSlider.languageContentChange, languageSwitch, languageSlider.languangeNextBtn, languageSlider.languangePrevBtn)

})


languageSlider.languangePrevBtn.addEventListener("click",function(){

  let languageContentChangeLength = languageSlider.languageContentChange.children.length;
  languageTotalLeft = languageMinusSlide * languageContentChangeWidth;

  languageTotalLeft = languageTotalLeft - (languageContentChangeWidth *2);
  languageTotalLeft = languageTotalLeft.toString();

  languageTotalLeft =  "-" +languageTotalLeft + "px";


  if(languageMinusSlide>1){



    languageSlider.languageContentChange.style.marginLeft = languageTotalLeft;


    languageMinusSlide--

     if(languageMinusSlide === 1){

        languageSlider.languangePrevBtn.style.opacity = "0";
        tagsSlider.tagsNextBtn.style.display = "block";
        tagsSlider.tagsPrevBtn.style.display = "block";
        tagsSlider.tagsContentChange.children[0].innerHTML = "Scroll through your saved tags"

      }
      if(languageMinusSlide < languageContentChangeLength){
        languageSlider.languangeNextBtn.style.opacity = "1"

      }
    languageSwitch(languageMinusSlide)



  }

});


deleteCurrentTag.addEventListener("click",function(){

  currentTag.inputTag.innerHTML = "";
  currentTag.sourceTag.innerHTML = "";
  currentTag.countryTag.innerHTML = "";
  currentTag.categoryTag.innerHTML = "";
  currentTag.languageTag.innerHTML = "";

  slider.inputKeyword.value = ""

sourceSlider.sourceContentChange.style.marginLeft = "0";
countrySlider.countryContentChange.style.marginLeft = "0";
categorySlider.categoryContentChange.style.marginLeft = "0";
languageSlider.languageContentChange.style.marginLeft = "0"



sourceMinusSlide = 1;
countryMinusSlide = 1;
categoryMinusSlide = 1;
languageMinusSlide = 1

showArrowsOrNot(sourceMinusSlide, sourceSlider.nextBtn ,sourceSlider.prevBtn, sourceSlider.sourceContentChange.children.length )

tagsSlider.tagsNextBtn.style.display = "block";
tagsSlider.tagsPrevBtn.style.display = "block";
tagsSlider.tagsContentChange.children[0].innerHTML = "Scroll through your saved tags"



})


tagsSlider.tagsNextBtn.addEventListener("click", function () {

  let tagsContentChangeLength = tagsSlider.tagsContentChange.children.length;
  sliderFunctionRight(tagsContentChangeLength, tagsTotalLeft, tagsContentChangeWidth, tagsSlider.tagsContentChange, tagsSwitch, tagsSlider.tagsNextBtn, tagsSlider.tagsPrevBtn)

  if (tagsMinusSlide > 1) {

    beforeLoggedIn.style.display = "none"
  }

})


tagsSlider.tagsPrevBtn.addEventListener("click", function () {

  let tagsContentChangeLength = tagsSlider.tagsContentChange.children.length;
  tagsTotalLeft = tagsMinusSlide * tagsContentChangeWidth;

  tagsTotalLeft = tagsTotalLeft - (tagsContentChangeWidth * 2);
  tagsTotalLeft = tagsTotalLeft.toString();

  tagsTotalLeft = "-" + tagsTotalLeft + "px";


  if (tagsMinusSlide > 1) {



    tagsSlider.tagsContentChange.style.marginLeft = tagsTotalLeft;


    tagsMinusSlide--

    console.log(tagsMinusSlide)

    if (tagsMinusSlide === 1) {

      tagsSlider.tagsPrevBtn.style.opacity = "0"
    }
    if (tagsMinusSlide < tagsContentChangeLength) {
      tagsSlider.tagsNextBtn.style.opacity = "1"

    }

    if (tagsMinusSlide === 1) {

      beforeLoggedIn.style.display = "block"
    }
    // languageSwitch(languageMinusSlide)



  }

});

addTagBtn.addEventListener("click", function () {

  let innerText = document.getElementById("currentTag").innerText;

  console.log(sammaid)

  if (document.getElementById("currentTag").innerText !== "") {


    db.ref("users/" + sammaid + "/tags").push(innerText)
    let ul = document.createElement("ul");
    ul.className = "tags";
    ul.innerHTML = innerText;
    tagsSliderContentChange.appendChild(ul)

  }


})

function tagsSwitch(){
  return "hej"
}
