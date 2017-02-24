

    /* == image slider == */

  var imageList = document.getElementsByClassName("photo");
  var close = document.getElementById("close");
  var back = document.getElementById("back");
  var forward = document.getElementById("forward");

  var overlay = document.getElementsByClassName("grey")[0];
  var modal = document.getElementsByClassName("modal")[0];

  var imageContainer = document.getElementsByClassName("content")[0];

  //var images = ["drinks.jpg", "sofa.jpg", "sticle.jpg", "faces.jpg","tables.jpg","ham.jpg", "front.jpg", "friends.jpg", "shots.jpg", "malts.jpg","lux.jpg", "foods.jpg", "eggs.jpg", "rose.jpg", "cube.jpg", "wine.jpg"];

  var currentImage;
      // globally declared, to be used by multiple functions

    for (var i = 0; i < imageList.length; i++)
       imageList[i].addEventListener("click",showModal);

            // looping through all imageContainer divs

 close.addEventListener("click",closeModal);      
 back.addEventListener("click",leftArrow);
 forward.addEventListener("click",rightArrow);


   function showModal(){
      overlay.style.display = "block";
      modal.style.display = "block";

   var image = this.currentStyle || window.getComputedStyle(this, false);
   var bi = image.backgroundImage.slice(4, -1);
   var final = "url("+bi+")";
   
        // get the background Image from the clicked div using getComputedStyle
        // and complete the obtained string by adding an url

   currentImage = final;
   imageContainer.style.backgroundImage = final;

       // save the url of the image from the clicked div for further use with another function
      // set the backgroundImage of the div inside the modal with the url of the image from the clicked div 
  }     


   function closeModal(){
         overlay.style.display = "none";
      modal.style.display = "none"; 
   }


  function leftArrow(){

   var position;

      for(var i = 0; i < imageList.length; i++)
        {
          var image = imageList[i].currentStyle || window.getComputedStyle(imageList[i], false);
          var bi = image.backgroundImage.slice(4, -1);
          var final = "url("+bi+")";

            if(final.indexOf(currentImage) > -1)
               {
                 position = i;
                 break;
               }
    // find the position of the img that is displayed in the modal
    // loop through all divs and get their backgroundImage value using getComputedStyle
    // compare each of the url strings with the string of currentImage (the image displayed in the modal)
    // if it fits, the value of i is the position of the image 

        }
       
          position--;
           if(position == 0 || position < 0)
          position = imageList.length-1; 

          // move  one position to the left or start at the end of the array if 0 is reached

        var image = imageList[position].currentStyle || window.getComputedStyle(imageList[position], false);
          var bi = image.backgroundImage.slice(4, -1);
          var final = "url("+bi+")";
          imageContainer.style.backgroundImage = final;
          currentImage = final;
         
        // get the image from the next div (left) through getComputedStyle and assing it to the div container in modal
  }

     function rightArrow(){

       var position;

      for(var i = 0; i < imageList.length; i++)
        {
          var image = imageList[i].currentStyle || window.getComputedStyle(imageList[i], false);
          var bi = image.backgroundImage.slice(4, -1);
          var final = "url("+bi+")";

            if(final.indexOf(currentImage) > -1)
               {
                 position = i;
                 console.log(i +"i");
                 break;
               }
        }

      // same ideea as in leftArrow function, but going right 
        
          position++;
          console.log(position);
           if(position == imageList.length)
          position = 0; 

        var image = imageList[position].currentStyle || window.getComputedStyle(imageList[position], false);
          var bi = image.backgroundImage.slice(4, -1);
          var final = "url("+bi+")";
          imageContainer.style.backgroundImage = final;
          currentImage = final;
        
     }


     /* ==slider menu == */

     var buton = document.getElementById("hamb-menu");

   buton.addEventListener("click",apasa);

   function apasa(){
    var list = document.getElementsByTagName("ul")[0];
     list.classList.toggle("open-on-click");
   } 