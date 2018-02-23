
// När du klickar på NEXT button på slidern

          nextTagBtn.addEventListener("click",function(){

          let sliderContentChangeLength =  sliderContentChange.children.length

           totalLeft = minusSlide * sliderContentChangeWidth;
           totalLeft = totalLeft.toString()

           totalLeft = "-" + totalLeft + "px";


            if(sliderContentChangeLength > minusSlide){

              sliderContentChange.style.marginLeft = totalLeft;
              minusSlide++
            }

        })


// När du klickar på prev button på slidern
          previousTagBtn.addEventListener("click",function(){

          let sliderContentChangeLength =  sliderContentChange.children.length

          totalLeft = minusSlide * sliderContentChangeWidth;

          totalLeft = totalLeft - (sliderContentChangeWidth *2);
          totalLeft = totalLeft.toString();


          totalLeft = "-" + totalLeft + "px";
          console.log("totalleft är: " + totalLeft)
          console.log("minusslide är: " + minusSlide)


            if(minusSlide>1){

              sliderContentChange.style.marginLeft = totalLeft ;

              minusSlide--
            }

        })

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
