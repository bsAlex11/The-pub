
    /* == toggle menu button in mobile version == */

var buton = document.getElementById("hamb-menu");

   buton.addEventListener("click",apasa);

   function apasa(){
    var list = document.getElementsByTagName("ul")[0];
     list.classList.toggle("open-on-click");
   } 

   /* == form field validation == */ 

     var inputList = document.getElementsByClassName("field");
     var textarea = document.getElementsByTagName("textarea")[0];
     var buton = document.getElementById("submit");

       function formValidation(){
       var mail = /^[^\s@]+\@[^\s@]+\.[^\s@]+$/;  
       var text = /^[\w \-\.]+$/;
         for (var i = 0; i < inputList.length; i++)
            {
               if(i==1)
                 {
                     if(!(inputList[i].value != "" && mail.test(inputList[i].value)))
                     return false;
                 }
                else 
                {
                  if(!(inputList[i].value != "" && text.test(inputList[i].value)))
                     return false;
                } 
            }

         if(!(textarea.value != "" && text.test(textarea.value)))
            return false;  

            return true;
       }
    
    function trimitere(event){
        if(!formValidation())
          {
              event.preventDefault();
              document.getElementById("failed").style.display = "block";
          }
        else 
           document.getElementById("accept").style.display = "block";  
    }

    buton.addEventListener("click",trimitere);