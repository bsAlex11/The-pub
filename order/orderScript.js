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


       // == Special request box in right-side cart == //

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

   var itemsToRemove = [];

       for(var i=0; i<items.length; i++)
       {
         items[i].addEventListener("click",showModal);
       }    

     function showModal(event){

        overlay.style.display = "initial";
         modal.style.display = "initial";               // show modal section
   

         var image = this.querySelector("#food");        // add content to modal section
         var cloneImage = image.cloneNode();
          modal.appendChild(cloneImage);
          itemsToRemove.push(cloneImage);  
          
          var numeProdus = this.querySelector("p");
          var cloneNume = numeProdus.cloneNode(true);
           cloneNume.id = "clone-name";
          modal.appendChild(cloneNume);
          itemsToRemove.push(cloneNume);
         
          var pret = this.querySelector("#secondpara");
          var clonePret = pret.cloneNode(true);
           clonePret.setAttribute("id", "clone-pret")
          modal.appendChild(clonePret);
          itemsToRemove.push(clonePret);
         

          var details = this.querySelector("#item-details");
          var cloneDetails = details.cloneNode(true);
          modal.appendChild(cloneDetails);
          itemsToRemove.push(cloneDetails);

          var specialRequestNode = document.createElement("p");
          var specialText = document.createTextNode("Special Requests?");
          specialRequestNode.appendChild(specialText);
          modal.appendChild(specialRequestNode);
          itemsToRemove.push(specialRequestNode);

          }

    
                  // ==== Add to cart Section ==== //
           
          
        var modalButton = document.getElementById("order-button");
        var gNumberofItems = 0;
        var itemsInList = [];
        modalButton.addEventListener("click",puneComanda);   
       
               function puneComanda(){             
                 

                                 // info for cart added in object
           
           var itemName = document.getElementById("clone-name").innerHTML;
           var itemPrice = document.getElementById("clone-pret").innerHTML;
           var request = document.getElementById("special-request").value;
           
        
                                                   // hide the cart image and text
               var cartImage = document.getElementById("bag");
               var cartText = document.getElementById("browse");
               cartImage.style.display = "none";
               cartText.style.display = "none";

              for (var i=0; i<itemsInList.length; i++)     // search for added items in the array of objects
              {  var gasit = 0;                            // if added, change only the numbers or add the item if there are less than 4 already added
                var alt = itemsInList[i];
                  if(itemName == alt.nume)
                     {
                       gasit++;
                       break;
                     }
                     else 
                       gasit = 0;
              }
              
                    if(!gasit && gNumberofItems < 4)
               {                                  // add products to cart
         
               var cartContainer = document.getElementById("cart");
               var itemDiv = document.createElement("div");
               itemDiv.className = "item-div";               // product item div container

               var quantContent = document.createTextNode("1");
               var sign = document.createTextNode(" x");
               var span = document.createElement("span");
               span.setAttribute("id","numarDeIteme");
               span.appendChild(quantContent);
               var para = document.createElement("p");
               para.appendChild(span);
               para.appendChild(sign);
               itemDiv.appendChild(para);
               para.setAttribute("id","quant");    // add the qunatity for each item in cart

               var cartP = document.createElement("P");
               var text = document.createTextNode(itemName);
               cartP.setAttribute("id", "numeProdus");
               cartP.appendChild(text);
               itemDiv.appendChild(cartP);           // create and append the name of the product
              
               var price = document.createElement("p");
               var priceText = document.createTextNode(itemPrice);
               price.setAttribute("id","pretProdus");
               price.appendChild(priceText);
               itemDiv.appendChild(price);        // create and append the price

               var plus = document.createTextNode("+");
               var plusContainer = document.createElement("div");
               plusContainer.className = "plus-sign";
               plusContainer.addEventListener("click",plusFunction);   // add event for adding the 1 more of the same item
               plusContainer.appendChild(plus);
               itemDiv.appendChild(plusContainer);     // add the + sign to item div

               var minus = document.createTextNode("-");
               var minusContainer = document.createElement("div");
               minusContainer.setAttribute("id","minus-sign");
               minusContainer.appendChild(minus);
               itemDiv.appendChild(minusContainer);     // add the - sign to item div
            
               document.getElementById("numar-produse").innerHTML = parseInt(document.getElementById("numar-produse").innerHTML) + 1;
                    // add number of items to my order
               document.getElementById("pret-subtotal").innerHTML = parseInt(document.getElementById("pret-subtotal").innerHTML) + parseInt(price.innerHTML);     
                   // add the subtotal price
                
               cartContainer.appendChild(itemDiv);
               gNumberofItems++;     // global number of items
               }
              
               else 
               {
                  document.getElementById("numar-produse").innerHTML = parseInt(document.getElementById("numar-produse").innerHTML) + 1;
                    // add number of items to my order
               document.getElementById("pret-subtotal").innerHTML = parseInt(document.getElementById("pret-subtotal").innerHTML) + parseInt(itemPrice);     
                   // add the subtotal price
       
               
      var s = 0;   
      var listaDivs = document.getElementsByClassName("item-div");          
        for(var j = 0; j < itemsInList.length; j++)
          {
              var obj = itemsInList[j];
                  if(obj.nume == itemName)
                    s++;
          }                                      // search for all items of the same type added to the list

            for(var z = 0; z < listaDivs.length; z++)
            {
                 if(listaDivs[z].querySelector("#numeProdus").innerHTML == itemName)
                    listaDivs[z].querySelector("#numarDeIteme").innerHTML = s + 1;
            }
               }        // find the item of which quantity is to be increased in it's parent div (from a list of parent divs, the added items)'


                var itemDetails = {      // object with info about the item
                  nume: itemName,
                  pret: itemPrice,
                }; 

              itemsInList.push(itemDetails);     // create a global array of objects with info about the items
          
               var subtotal = document.getElementById("subtotal");
               subtotal.style.marginTop = "205px"; 
                        
   
                                                    // hide the modal  and remove the nodes
                   overlay.style.display = "none";
                modal.style.display = "none";
                for(var i=0; i<itemsToRemove.length; i++)
                  itemsToRemove[i].parentNode.removeChild(itemsToRemove[i]);             
         itemsToRemove.length = 0;                        

               }

          // == plus sign facts == //
     
    
          function plusFunction(event){
            
            document.getElementById("numar-produse").innerHTML = parseInt(document.getElementById("numar-produse").innerHTML) + 1;
            document.getElementById("pret-subtotal").innerHTML = parseInt(document.getElementById("pret-subtotal").innerHTML) + parseInt(this.parentNode.querySelector("#pretProdus").innerHTML); 
            this.parentNode.querySelector("#numarDeIteme").innerHTML = parseInt(this.parentNode.querySelector("#numarDeIteme").innerHTML) + 1;
    
                    //  add the item in my order, increase the price, increase the individual quantity

            var obj = { nume: this.parentNode.querySelector("#numeProdus").innerHTML,
                        pret: this.parentNode.querySelector("#pretProdus").innerHTML,
            };
           itemsInList.push(obj);
          
              // create an object with info about the product, add it to the globar array of objects with items' details
          }
      


            // == hide the modal == //

          function hideModal(){          
            overlay.style.display = "none";
                modal.style.display = "none";
    
             //   empty the modal//
            
               for(var i=0; i<itemsToRemove.length; i++)
                  itemsToRemove[i].parentNode.removeChild(itemsToRemove[i]);             
         itemsToRemove.length = 0;

          }

          //  ==== Special request  in modal =====  //

 var special = document.getElementById("add-special");
 var specialInput = document.getElementById("special-request");
 
 special.addEventListener("click",showRequest);
specialInput.addEventListener("blur", addSpecial);

     function showRequest(){
       modal.className = "show-special";    // show text input 
       specialInput.focus();
     }          

     function addSpecial(){                // leave input with text or return to initial text
         var spaces = 0;
         if(this.value == "")
            {
              modal.className = "";
            }
        for(var j=0; j<this.value.length; j++)
            if(this.value[j] ==" ")
                spaces++;
           if(spaces == this.value.length)
               modal.className = "";         
     }

         

          