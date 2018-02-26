


let currentTag = {

  inputTag : document.getElementById("inputTag"),
  sourceTag : document.getElementById("sourceTag"),
  countryTag: document.getElementById("countryTag"),
  categoryTag : document.getElementById("categoryTag"),
  languageTag: document.getElementById("languageTag")
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

let sourceSlider = {
    nextBtn : document.getElementById("nextBtn"),
    prevBtn : document.getElementById("prevBtn"),
    sourceContentChange : document.getElementById("sourceContentChange"),
    slider : document.getElementById("sourceSlider")
}

let countrySlider = {
    countryNextBtn : document.getElementById("countryNextBtn"),
    countryPrevBtn : document.getElementById("countryPrevBtn"),
    countryContentChange : document.getElementById("countryContentChange"),
    slider: document.getElementById("countrySlider")

}

let categorySlider = {
  categoryNextBtn: document.getElementById("categoryNextBtn"),
  categoryPrevBtn: document.getElementById("categoryPrevBtn"),
  categoryContentChange : document.getElementById("categoryContentChange"),
  slider: document.getElementById("categorySlider")
}

let languageSlider = {

  languangeNextBtn : document.getElementById("languangeNextBtn"),
  languangePrevBtn : document.getElementById("languangePrevBtn"),
  languageContentChange : document.getElementById("languageContentChange"),
  slider : document.getElementById("languageSlider")
}

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




slider.inputKeyword.addEventListener("change",function(){
  currentTag.inputTag.innerHTML = "#"+slider.inputKeyword.value;

})





// När du klickar på nextInput

slider.nextTagBtn.addEventListener("click",function(){


    let sliderContentChangeLength = sliderContentChange.children.length;


      totalLeft = minusSlide * sliderContentChangeWidth;
      totalLeft = totalLeft.toString();



      totalLeft = "-" + totalLeft + "px";

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
          if(countryMinusSlide> 1 || categoryMinusSlide > 1){
            sourceSlider.slider.style.opacity ="0";

          }else{
            sourceSlider.slider.style.opacity ="1";

          }

          // sourceContentChangeWidth = sourceSlider.sourceContentChange.offsetWidth;
        }else {
          sourceSlider.slider.style.opacity ="0"
        }

        if(minusSlide === 3){
          if(sourceMinusSlide>1){
            countrySlider.slider.style.opacity = "0";



          }else{
            countrySlider.slider.style.opacity = "1";
          }
          // countryContentChangeWidth = countrySlider.countryContentChange.offsetWidth;


        }else{
          countrySlider.slider.style.opacity = "0"
        }

        if(minusSlide === 4){

          if(sourceMinusSlide>1){
            categorySlider.slider.style.opacity = "0"

          }else{
            categorySlider.slider.style.opacity = "1"

          }


        }else{
          categorySlider.slider.style.opacity = "0"
        }

        if(minusSlide === 5){
          languageSlider.slider.style.opacity = "1"
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

      if(sourceMinusSlide>1){
        countrySlider.slider.style.opacity = "0";

      }else{
        countrySlider.slider.style.opacity = "1";

      }


      sourceContentChangeWidth = countrySlider.countryContentChange.offsetWidth;

    }else{
      countrySlider.slider.style.opacity = "0"
    }

    if(minusSlide === 4){
      if(sourceMinusSlide>1){
        categorySlider.slider.style.opacity = "0"

      }else{
        categorySlider.slider.style.opacity = "1"

      }
    }else{
      categorySlider.slider.style.opacity = "0"
    }
    if(minusSlide === 5){
      languageSlider.slider.style.opacity = "1"
    }else{
      languageSlider.slider.style.opacity = "0"
    }

  }


})


function sourceSwitch(sourceMinusSlide){

  switch (sourceMinusSlide) {
    case 1:
        currentTag.sourceTag.innerHTML = " ";
        sourceCode = ' ';
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
      countryCode = ' ';
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
      countryCode = 'en';
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
      categoryCode = ' ';
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
      languageCode = ' ';
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



sourceSlider.nextBtn.addEventListener("click", function(){



  let sourceContentChangeLength = sourceSlider.sourceContentChange.children.length;
  sourceTotalLeft = sourceMinusSlide * sourceContentChangeWidth;
  sourceTotalLeft = sourceTotalLeft.toString();



  sourceTotalLeft = "-" + sourceTotalLeft + "px";


  if(sourceContentChangeLength > sourceMinusSlide){

    sourceSlider.sourceContentChange.style.marginLeft = sourceTotalLeft;


    sourceMinusSlide++

    console.log(sourceMinusSlide)

    sourceSwitch(sourceMinusSlide)




  }


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


    sourceSwitch(sourceMinusSlide)




  }

})


countrySlider.countryNextBtn.addEventListener("click",function(){

  let countryContentChangeLength = countrySlider.countryContentChange.children.length;

  countryTotalLeft = countryMinusSlide * countryContentChangeWidth;
  countryTotalLeft = countryTotalLeft.toString();



  countryTotalLeft = "-" + countryTotalLeft + "px";

  if(countryContentChangeLength > countryMinusSlide){



    countrySlider.countryContentChange.style.marginLeft = countryTotalLeft;


    countryMinusSlide++

    countrySwitch(countryMinusSlide)
  }


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
    countrySwitch(countryMinusSlide)



  }


})

categorySlider.categoryNextBtn.addEventListener("click",function(){


  let categoryContentChangeLength = categorySlider.categoryContentChange.children.length;

  categoryTotalLeft = categoryMinusSlide * categoryContentChangeWidth;
  categoryTotalLeft = categoryTotalLeft.toString();



  categoryTotalLeft = "-" + categoryTotalLeft + "px";

  if(categoryContentChangeLength > categoryMinusSlide){



    categorySlider.categoryContentChange.style.marginLeft = categoryTotalLeft;


    categoryMinusSlide++

    categorySwitch(categoryMinusSlide)

  }



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

    categorySwitch(categoryMinusSlide)


  }

})

languageSlider.languangeNextBtn.addEventListener("click",function(){

  let languageContentChangeLength = languageSlider.languageContentChange.children.length;

  languageTotalLeft = languageMinusSlide * languageContentChangeWidth;
  languageTotalLeft = languageTotalLeft.toString();



  languageTotalLeft = "-" + languageTotalLeft + "px";


    if(languageContentChangeLength > languageMinusSlide){



      languageSlider.languageContentChange.style.marginLeft = languageTotalLeft;


      languageMinusSlide++

      languageSwitch(languageMinusSlide)

    }


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
    languageSwitch(languageMinusSlide)



  }

});
