


let currentTag = document.getElementById("currentTag")

let previousTagBtn = document.getElementById("prev");
let nextTagBtn = document.getElementById("next");
let sliderContent = document.getElementById("sliderContent");
let sliderContentChange = document.getElementById("sliderContentChange");

let slider = {

    nextTagBtn: document.getElementById("nextInput"),
    prevTagBtn: document.getElementById("prevInput"),
    sliderContent : document.getElementById("sliderContent"),
    sliderContentChange: document.getElementById("sliderContentChange"),
    sourceName : document.getElementById("sourceName")
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

// function slider(sliderContentChangeLength, totalLeft, minusSlide, sliderContentChangeWidth,slider, sliderContentChange){
//
//
//
//
// }

sourceSlider.nextBtn.addEventListener("click", function(){


  let sourceContentChangeLength = sourceSlider.sourceContentChange.children.length;

  sourceTotalLeft = sourceMinusSlide * sourceContentChangeWidth;
  sourceTotalLeft = sourceTotalLeft.toString();



  sourceTotalLeft = "-" + sourceTotalLeft + "px";


  if(sourceContentChangeLength > sourceMinusSlide){

    sourceSlider.sourceContentChange.style.marginLeft = sourceTotalLeft;


    sourceMinusSlide++


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



  }

});
