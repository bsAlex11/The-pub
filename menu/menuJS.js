
function show () 
{var element1 = document.getElementById("first-main");
 var element2 = document.getElementById("second-main");

     var styleFood = window.getComputedStyle(element1);     // lista cu proprietati de style
     var typeFood = styleFood.getPropertyValue("display");
     var styleBeer = window.getComputedStyle(element2);
     var typeBeer = styleBeer.getPropertyValue("display");

   if (typeFood == "none")
     {
         document.getElementById("first-main").style.display = "block";
         document.getElementById("second-main").style.display = "none";
         document.getElementById("link1").style.color = "white";
         document.getElementById("link2").style.color = "grey";
     }
   else 
   {
      document.getElementById("first-main").style.display = "none";
      document.getElementById("second-main").style.display = "block";
      document.getElementById("link1").style.color = "grey";
      document.getElementById("link2").style.color = "white";    
        
  }  

}

var buton = document.getElementById("hamb-menu");

   buton.addEventListener("click",apasa);

   function apasa(){
    var list = document.getElementsByTagName("ul")[0];
     list.classList.toggle("open-on-click");
   } 
