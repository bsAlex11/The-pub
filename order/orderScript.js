
/* var img = document.getElementById("image");
var select = document.getElementById("list");

   for(var i=0; i<select.length; i++)
      if(select[i].checked) 
  img.style.webkitTransform = "rotate(180deg)";
 */
      // == drop-down menu code ==   //

var buton = document.getElementById("hamb-menu");
   buton.addEventListener("click",apasa);

   function apasa(){
    var list = document.getElementsByTagName("ul")[0];
     list.classList.toggle("open-on-click");
   } 

     // == display menu code == //

   var wid = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var selectFood, selectDrink;    
         if(wid >= 1080)
          {
             selectFood = document.getElementsByName("food-large")[0];
             selectDrink = document.getElementsByName("drinks-large")[0];
          }
          else 
          {
             selectFood = document.getElementsByName("food-min")[0];
             selectDrink = document.getElementsByName("drinks-min")[0];
          }
  
  var listaMeniu = document.getElementsByClassName("menu-presentation");

  selectFood.addEventListener("change",valoare);
  selectFood.addEventListener("blur",ascunde);

  selectDrink.addEventListener("change",valoare);
  selectDrink.addEventListener("blur",ascunde);
  
      function valoare(){
           for(var i=0; i<listaMeniu.length; i++)
                listaMeniu[i].style.display= "none";
        
    document.getElementById(this.value).style.display = "block";
         return this.defaultSelected;
                         }

       function ascunde(){
          this.selectedIndex=0;
       }         


       // == Special request == //

    var special = document.getElementById("special");
    var input = special.querySelector("textarea");
    var placeHolder =  special.querySelector("p").innerHTML; 


    special.addEventListener("click",edit);
    input.addEventListener("blur",adauga);

        function edit(){
          this.className="edit";
           var text = this.querySelector("textarea");
           text.focus();
        }            

        function adauga(){

           this.previousElementSibling.innerHTML = this.value;
           this.parentNode.className = "";
             if(this.value == "")
                 this.previousElementSibling.innerHTML = placeHolder;
        }

        //  === Modal Box ===//

    var items = document.getElementsByClassName("wrap");
    var overlay = document.getElementById("overlay");
    var modal = document.getElementById("modal");
    var close = document.getElementById("close-modal");
        close.addEventListener("click",hideModal);

       for(var i=0; i<items.length; i++)
       {
         items[i].addEventListener("click",showModal);
       }    

     function showModal(event){
        overlay.style.display = "initial";
         modal.style.display = "initial";               // show modal section
   console.log(this);

         var image = this.querySelector("#food");        // add content to modal section
         var cloneImage = image.cloneNode();
          modal.appendChild(cloneImage);
          cloneImage.style.height = "230px";
          
          var numeProdus = this.querySelector("p");
          var cloneNume = numeProdus.cloneNode(true);
          modal.appendChild(cloneNume);

          var pret = this.querySelector("#secondpara");
          var clonePret = pret.cloneNode(true);
          modal.appendChild(clonePret);

          var details = this.querySelector("#item-details");
          var cloneDetails = details.cloneNode(true);
          modal.appendChild(cloneDetails);

          var specialRequestNode = document.createElement("p");
          var specialText = document.createTextNode("Special Requests?");
          specialRequestNode.appendChild(specialText);
          modal.appendChild(specialRequestNode);

          }

          function hideModal(){
            overlay.style.display = "none";
                modal.style.display = "none";
          }
