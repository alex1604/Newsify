


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
          sourceSlider.slider.style.opacity ="1"
          // sourceContentChangeWidth = sourceSlider.sourceContentChange.offsetWidth;
        }else {
          sourceSlider.slider.style.opacity ="0"
        }

        if(minusSlide === 3){
          countrySlider.slider.style.opacity = "1";
          // countryContentChangeWidth = countrySlider.countryContentChange.offsetWidth;


        }else{
          countrySlider.slider.style.opacity = "0"
        }

        if(minusSlide === 4){
          categorySlider.slider.style.opacity = "1"
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
      sourceSlider.slider.style.opacity ="1";
      sourceContentChangeWidth = sourceSlider.sourceContentChange.offsetWidth;

    }else {
      sourceSlider.slider.style.opacity ="0"
    }

    if(minusSlide === 3){
      countrySlider.slider.style.opacity = "1";
      sourceContentChangeWidth = countrySlider.countryContentChange.offsetWidth;

    }else{
      countrySlider.slider.style.opacity = "0"
    }

    if(minusSlide === 4){
      categorySlider.slider.style.opacity = "1"
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
        currentTag.sourceTag.innerHTML = " "
      break;
    case 2:
      currentTag.sourceTag.innerHTML = "#CNN"
      break;
      case 3:
        currentTag.sourceTag.innerHTML = "#BBC"
        break;
        case 4:
          currentTag.sourceTag.innerHTML = "#ABCNews"
          break;
          case 5:
            currentTag.sourceTag.innerHTML = "#AlJazeera"
            break;
            case 6:
              currentTag.sourceTag.innerHTML = "#ESPN"
              break;
              case 7:
                currentTag.sourceTag.innerHTML = "#FinancialTimes"
                break;
                case 8:
                  currentTag.sourceTag.innerHTML = "#FoxNews"
                  break;
                  case 9:
                    currentTag.sourceTag.innerHTML = "#DailyMail"
                    break;
                    case 10:
                      currentTag.sourceTag.innerHTML = "#TheGuardian"
                      break;
                      case 11:
                        currentTag.sourceTag.innerHTML = "#TheNewYorkTimes"
                        break;
                        case 12:
                          currentTag.sourceTag.innerHTML = "#IGN"
                          break;
                          case 13:
                            currentTag.sourceTag.innerHTML = "#CNNSpanish"
                            break;
                            case 14:
                              currentTag.sourceTag.innerHTML = "#Bloomberg"
                              break;
                              case 15:
                                currentTag.sourceTag.innerHTML = "#CBS"
                                break;
                default:

  }
}


function countrySwitch(countryMinusSlide){

  switch (countryMinusSlide) {
    case 1:
      currentTag.countryTag.innerHTML = " ";
      break;
    case 2:
      currentTag.countryTag.innerHTML = "#USA";
      break;
    case 3:
      currentTag.countryTag.innerHTML = "#Canada";
      break;
    case 4:
      currentTag.countryTag.innerHTML = "#England";
      break;
    case 5:
    currentTag.countryTag.innerHTML = "#Germany";
      break;
    case 6:
    currentTag.countryTag.innerHTML = "#France";
      break;
    case 7:
    currentTag.countryTag.innerHTML = "#Australia";
      break;
    case 8:
    currentTag.countryTag.innerHTML = "#NewZeeland";
      break;
    case 9:
    currentTag.countryTag.innerHTML = "#China";
      break;
    case 10:
    currentTag.countryTag.innerHTML = "#Japan";
      break;
    case 11:
    currentTag.countryTag.innerHTML = "#Russia";
      break;
    case 12:
    currentTag.countryTag.innerHTML = "#Spain";
      break;
    case 13:
    currentTag.countryTag.innerHTML = "#Sweden";
      break;
    case 14:
    currentTag.countryTag.innerHTML = "#Norway";
      break;
    case 15:
    currentTag.countryTag.innerHTML = "#Finland";
      break;
    case 16:
    currentTag.countryTag.innerHTML = "#Denmark";
      break;
    case 17:
    currentTag.countryTag.innerHTML = "#Iceland";
      break;
    case 18:
    currentTag.countryTag.innerHTML = "#Turkey";
      break;


    default:

  }

}


function categorySwitch(categoryMinusSlide){

  switch (categoryMinusSlide) {
    case 1:
      currentTag.categoryTag.innerHTML = " ";
      break;
    case 2:
      currentTag.categoryTag.innerHTML = "#Business";
      break;
    case 3:
      currentTag.categoryTag.innerHTML = "#Entertainment";
      break;
    case 4:
      currentTag.categoryTag.innerHTML = "#General";
      break;
    case 5:
    currentTag.categoryTag.innerHTML = "#Health";
      break;
    case 6:
    currentTag.categoryTag.innerHTML = "#Science";
      break;
    case 7:
    currentTag.categoryTag.innerHTML = "#Sport";
      break;
    case 8:
    currentTag.categoryTag.innerHTML = "#Technology";
      break;



    default:

  }

}


function languageSwitch(languageMinusSlide){

  switch (languageMinusSlide) {
    case 1:
      currentTag.languageTag.innerHTML = " ";
      break;
    case 2:
      currentTag.languageTag.innerHTML = "#Arabic";
      break;
    case 3:
      currentTag.languageTag.innerHTML = "#Danish";
      break;
    case 4:
      currentTag.languageTag.innerHTML = "#English";
      break;
    case 5:
    currentTag.languageTag.innerHTML = "#Spanish";
      break;
    case 6:
    currentTag.languageTag.innerHTML = "#French";
      break;
    case 7:
    currentTag.languageTag.innerHTML = "#Hebrew";
      break;
    case 8:
    currentTag.languageTag.innerHTML = "#Italian";
      break;
    case 9:
    currentTag.languageTag.innerHTML = "#Dutch";
      break;
    case 10:
    currentTag.languageTag.innerHTML = "#Norweigan";
      break;
    case 11:
    currentTag.languageTag.innerHTML = "#Portugues";
      break;
    case 12:
    currentTag.languageTag.innerHTML = "#Russian";
      break;
    case 13:
    currentTag.languageTag.innerHTML = "#Swedish";
      break;
    case 14:
    currentTag.languageTag.innerHTML = "#Chinese";
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
