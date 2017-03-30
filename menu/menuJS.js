
  /*== cache ==*/

   var buttons = document.getElementsByClassName("menuChoice"),
       content = document.getElementsByClassName("contents");

  /*== show section on click ==*/

     for (var i = 0; i < buttons.length; i++)
         buttons[i].addEventListener("click",show);

     function show(event){
       
        var data = this.getAttribute("data-target");
        for(var j = 0; j < buttons.length; j++)
            {
                if (buttons[j] === this)
                  buttons[j].style.color = "white";
                else 
                   buttons[j].style.color = "grey";  
            }
            
        for(var i = 0; i < content.length; i++)
          content[i].style.display = "none"; 

        for(var i = 0; i < content.length; i++)
          {   
             var id = content[i].getAttribute("data-menu");
         
              if (data == id)
                {content[i].style.display = "block";
                   return;           
                }
     }
     }        

      /*== display menu button ==*/

var buton = document.getElementById("hamb-menu");

   buton.addEventListener("click",apasa);

   function apasa(){
    var list = document.getElementsByTagName("ul")[0];
     list.classList.toggle("open-on-click");
   } 