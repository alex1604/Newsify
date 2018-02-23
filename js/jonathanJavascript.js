

// tar alla inputs id i searchbar
let inputValues ={

    inputKeyword : document.getElementById("inputKeyword"),
    inputDate : document.getElementById("inputDate"),
    inputSourceName : document.getElementById("inputSourceName"),
    inputLanguages : document.getElementById("inputLanguages")
}


let currentTag = document.getElementById("currentTag")

let previousTagBtn = document.getElementById("prev");
let nextTagBtn = document.getElementById("next");
let sliderContent = document.getElementById("sliderContent");
let sliderContentChange = document.getElementById("sliderContentChange");

let inputSlider = {

    nextTagBtn: document.getElementById("nextInput"),
    prevTagBtn: document.getElementById("prevInput"),
    inputSliderContent : document.getElementById("inputSliderContent"),
    inputSliderContentChange: document.getElementById("inputSliderContentChange"),
}

// let sliderContentChangeWidth = sliderContentChange.offsetWidth;
let inputSliderContentChangeWidth = inputSlider.inputSliderContentChange.offsetWidth;


//Tillhör previousTagBtn och nextTagBtn
let minusSlide = 1;
let totalLeft = "";
/////////////////////////

let minusInputSlide = 1;
let totalLeftInputSlide = "";


inputValues.inputKeyword.addEventListener("change",function(){

    console.log(inputValues.inputKeyword.value)
    if(inputValues.inputKeyword.value !== "")
    currentTag.innerHTML+= " #"+inputValues.inputKeyword.value

})

inputValues.inputDate.addEventListener("change",function(){

      if(inputValues.inputDate.value !== "")
      currentTag.innerHTML += " #" + inputValues.inputDate.value

})

inputValues.inputSourceName.addEventListener("change",function(){

    if(inputValues.inputSourceName.value !== "")
    currentTag.innerHTML += " #"+ inputValues.inputSourceName.value

})

inputValues.inputLanguages.addEventListener("change",function(){

    if(inputValues.inputLanguages.value !== "")
    currentTag.innerHTML += " #"+ inputValues.inputLanguages.value

})



// När du klickar på NEXT button på slidern
//
//           nextTagBtn.addEventListener("click",function(){
//
//           let sliderContentChangeLength =  sliderContentChange.children.length
//
//            totalLeft = minusSlide * sliderContentChangeWidth;
//            totalLeft = totalLeft.toString()
//
//            totalLeft = "-" + totalLeft + "px";
//
//
//             if(sliderContentChangeLength > minusSlide){
//
//               sliderContentChange.style.marginLeft = totalLeft;
//               minusSlide++
//             }
//
//         })
//
//
// // När du klickar på prev button på slidern
//           previousTagBtn.addEventListener("click",function(){
//
//           let sliderContentChangeLength =  sliderContentChange.children.length
//
//           totalLeft = minusSlide * sliderContentChangeWidth;
//
//           totalLeft = totalLeft - (sliderContentChangeWidth *2);
//           totalLeft = totalLeft.toString();
//
//
//           totalLeft = "-" + totalLeft + "px";
//           console.log("totalleft är: " + totalLeft)
//           console.log("minusslide är: " + minusSlide)
//
//
//             if(minusSlide>1){
//
//               sliderContentChange.style.marginLeft = totalLeft ;
//
//               minusSlide--
//             }
//
//         })

// När du klickar på nextInput

inputSlider.nextTagBtn.addEventListener("click",function(){


    let inputSliderContentChangeLength = inputSliderContentChange.children.length;


      totalLeftInputSlide = minusInputSlide * inputSliderContentChangeWidth;
      totalLeftInputSlide = totalLeftInputSlide.toString();

      console.log(minusInputSlide)


      totalLeftInputSlide = "-" + totalLeftInputSlide + "px";

      if(inputSliderContentChangeLength > minusInputSlide){

        inputSlider.inputSliderContentChange.style.marginLeft = totalLeftInputSlide;
        minusInputSlide++
      }



})


inputSlider.prevTagBtn.addEventListener("click",function(){
  let inputSliderContentChangeLength = inputSliderContentChange.children.length;

  totalLeftInputSlide = minusInputSlide * inputSliderContentChangeWidth;

  totalLeftInputSlide = totalLeftInputSlide - (inputSliderContentChangeWidth *2);
  totalLeftInputSlide = totalLeftInputSlide.toString();
  totalLeftInputSlide = "-" + totalLeftInputSlide + "px";

  console.log(totalLeftInputSlide)

  if(minusInputSlide>1){

    inputSlider.inputSliderContentChange.style.marginLeft = totalLeftInputSlide;

    console.log(inputSlider.inputSliderContentChange)

    minusInputSlide--
  }


})
