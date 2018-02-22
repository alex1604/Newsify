
      // Initialize Firebase

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


        // Tillhör nextTagBtn
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
