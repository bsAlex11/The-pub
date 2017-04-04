
 
      // == drop-down menu ==   //

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

             if(this.value == "")
                { this.previousElementSibling.innerHTML = placeHolder;
                  this.parentNode.className = "";
                }  
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
           
           var itemName = document.getElementById("clone-name").textContent;
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
              
                    if(!gasit  )
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
               minusContainer.addEventListener("click",minusFunction);
               minusContainer.appendChild(minus);
               itemDiv.appendChild(minusContainer);     // add the - sign to item div
            
               document.getElementById("numar-produse").innerHTML = parseInt(document.getElementById("numar-produse").innerHTML) + 1;
                    // add number of items to my order
               document.getElementById("pret-subtotal").innerHTML = parseInt(document.getElementById("pret-subtotal").innerHTML) + parseInt(price.innerHTML);     
                   // add the subtotal price
                
               cartContainer.appendChild(itemDiv);
               gNumberofItems++;     // global number of items

var itemDetails = {      // object with info about the item
                  nume: itemName,
                  pret: itemPrice,
                  quant: 1,
                  special: request
                }; 
          itemsInList.push(itemDetails);  // add the object to the globar array of  objects
               
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
                    {
                     itemsInList[j].quant++;
                     s =  itemsInList[j].quant;      // search for items of the same type in the array of objects and increase the quant if found
                     obj.special = request; 
                  }
          }                                      // search for all items of the same type added to the list

            for(var z = 0; z < listaDivs.length; z++)
            {
                 if(listaDivs[z].querySelector("#numeProdus").innerHTML == itemName)
                    listaDivs[z].querySelector("#numarDeIteme").innerHTML = s;
            }
               }        // find the item of which quantity is to be increased in it's parent div (from a list of parent divs, the added items)'

   
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

        var nume = this.parentNode.querySelector("#numeProdus").innerHTML;

            for (var i = 0; i < itemsInList.length; i++)
            {
              var obj = itemsInList[i];
                  if(obj.nume == nume)
                    {
                      itemsInList[i].quant++;
                      break;
                    }
            }
   
          
              // create an object with info about the product, add it to the globar array of objects with items' details
          }
      
      
           // == minus sign facts == //

           function minusFunction(){

         
           document.getElementById("numar-produse").innerHTML = parseInt(document.getElementById("numar-produse").innerHTML) - 1;  
           document.getElementById("pret-subtotal").innerHTML = parseInt(document.getElementById("pret-subtotal").innerHTML) - parseInt(this.parentNode.querySelector("#pretProdus").innerHTML);
                     // reduce the total number of items and the price


        var numeProdus = this.parentNode.querySelector("#numeProdus").innerHTML;
          

        var iteme = parseInt(document.getElementById("numar-produse").innerHTML);       
        
         if(iteme == 0)
           {                                 // display the cart image and text if the cart was emptied
             document.getElementById("bag").style.display = "block";
             document.getElementById("browse").style.display = "block";
    
           }

            var quant = parseInt(this.parentNode.querySelector("#numarDeIteme").innerHTML);
           
              if(quant == 1)        // verify if is only one item of a type in list to remove the whole div
              {
                this.parentNode.parentNode.removeChild(this.parentNode);
                gNumberofItems--; 
                 for(var i = 0; i < itemsInList.length; i++)
               {                                // remove the object with item details from the array of objects
                 var obj = itemsInList[i];
                 if(numeProdus == obj.nume)
                   itemsInList.splice(i,1);
               } 
                
              }
              else             // or reduce just the qunatity for the item
              {
                this.parentNode.querySelector("#numarDeIteme").innerHTML = parseInt(this.parentNode.querySelector("#numarDeIteme").innerHTML) - 1;
                 for(var i = 0; i < itemsInList.length; i++)
               {                                // reduce the quantity for that item in the array of objects
                 var obj = itemsInList[i];
                 if(numeProdus == obj.nume)
                   itemsInList[i].quant--;
               } 
             } 

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

         
       /* == delivery section == */

     var placeOrderButton = document.getElementById("place-delivery");
     var deliveryContent = document.getElementById("order-container");
     var mainContent = document.getElementsByTagName("main")[0];
     var footer = document.getElementsByTagName("footer")[0];
     var orderSection = document.getElementById("items-in-order");
     placeOrderButton.addEventListener("click",showDeliveryContent);
                                                                       // add the ordered items in the purchase container
        function showDeliveryContent(){

                                       // display message if cart is empty,remove it after 3 seconds
      if(itemsInList.length == 0)
          {
            document.getElementById("noItemsWarning").className = "showWarning";
            setTimeout(function(){
                 document.getElementById("noItemsWarning").className = "";
            },3000);
            return;
          } 

            mainContent.style.display = "none";
            deliveryContent.style.display = "block";
            document.getElementById("delivery").style.display = "block";
            footer.style.marginTop = "49%";
        
         document.getElementById("deliveryBubble").style.opacity = "1";

         document.getElementById("finalNrItems").textContent = parseInt(document.getElementById("numar-produse").textContent); 
         document.getElementById("ttPrice").textContent = document.getElementById("pret-subtotal").textContent;

  // clean the cart if the user exites the shop section, adds/removes items and comes back

     var addedItemsinCart = document.getElementsByClassName("added-items");
     if(addedItemsinCart.length > 0)
        for(let a = addedItemsinCart.length-1; a >= 0 ; a--)
           addedItemsinCart[a].parentNode.removeChild(addedItemsinCart[a]);

          // adding the items in the shop list div

           for (var i = 0; i < itemsInList.length; i++)
             {
                  var obj = itemsInList[i];
                  var addedItemDiv = document.createElement("div");
                  addedItemDiv.className = "added-items";

                  var p = document.createElement("p");

                  var span = document.createElement("span");
                  span.className = "finalQuant";
                  span.appendChild(document.createTextNode(obj.quant));
                  p.appendChild(span);

                  p.appendChild(document.createTextNode(" x " + obj.nume));
                  
                  var spanPret = document.createElement("span");
                  spanPret.className = "finalPrice";
                  var pret = parseInt(obj.quant)* parseInt(obj.pret);
                  pret = pret + "";
                  spanPret.appendChild(document.createTextNode(pret));
                  p.appendChild(spanPret);
                  p.appendChild(document.createTextNode("  Lei"));
 
                  addedItemDiv.appendChild(p);
                  orderSection.appendChild(addedItemDiv);
                                                           // added info about quantity, name and price of the product 
                  if(obj.special != "")
                    {
                        var specialNode = document.createElement("p");
                        specialNode.className = "finalSpecial";
                        specialNode.appendChild(document.createTextNode("Special request: " + obj.special));
                        addedItemDiv.appendChild(specialNode);
                    }                                                   // special request for each item
             }

                 var finalSpecial = document.getElementById("specialText").value;
 
                   if(finalSpecial != "")
                    {
                       var RequestNode = document.createElement("p");
                       var addedItemDiv = document.createElement("div");
                       addedItemDiv.setAttribute("id","finalSpecialRequest");
                       RequestNode.appendChild(document.createTextNode("Final Request: " + finalSpecial));
                       addedItemDiv.appendChild(RequestNode);
                       orderSection.appendChild(addedItemDiv);
                    }
                                                                // delivery special request
          // add price to the payment section    
      
        document.getElementById("finalTotal").textContent = document.getElementById("pret-subtotal").textContent + " Lei";
         document.getElementById("finalTotal2").textContent = document.getElementById("pret-subtotal").textContent + " Lei";  
         
   }  

         /* == navigate through the place order divs ==   */

          
  var toContact = document.getElementById("toContact");
  var toPayment = document.getElementById("toPayment");
  var toConfirmation = document.getElementById("toConfirmation");

  var buttonList = [toContact, toPayment, toConfirmation];

  var contactSection = document.getElementById("contact");
  var paymentSection = document.getElementById("payment");
  var confirmationSection = document.getElementById("confirmation");
  var deliverySection = document.getElementById("delivery");

  var sectionList = [contactSection, paymentSection, confirmationSection];

    // 2 arrays that store references to buttons and divs that are to be shown when clicked the specific button
    // the clicked button and the specific div that is to be show share the same index
    // when looping through the array buttons, we search for the clicked one (this) and store it's index
    // then loop through the array with divs and show the one with that index

  for(var i = 0; i < buttonList.length; i++)
      buttonList[i].addEventListener("click", showSpecificDiv,false);

      function showSpecificDiv(event){
       var progressList = document.getElementsByClassName("bubble");
       var currentButton; 

         for(var x = 0; x < buttonList.length; x++)
            {
              
            if(buttonList[x] === this)
              {
                currentButton = x;        
              }
                
            } 

              
         for (var j = 0; j < sectionList.length; j++)    // display each of purchase phase section
            {
              deliverySection.style.display = "none";


           if (currentButton == 1)            // user input validation in contact section
            {   
                var namePattern = /^[a-zA-Z ]+$/;
                var phonePattern = /^[0-9]{10}$/;
                var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                var firstName = document.getElementById("firstName").value;
                var secondName = document.getElementById("secondName").value;
                var phone = document.getElementById("phone").value;
                var email = document.getElementById("email").value;

              if(!(namePattern.test(firstName)) || !(namePattern.test(secondName)) || !(phonePattern.test(phone)) || !(emailPattern.test(email))){
                   document.getElementById("warning").style.display = "block";
                   return;
                 }
               else 
               {
                 document.getElementById("warning").style.display = "none";
               }  
                
            }
               
             if(currentButton == 2)
               {
                   document.getElementById("user-name").textContent = document.getElementById("firstName").value + " " + document.getElementById("secondName").value;
                   document.getElementById("mail").textContent = document.getElementById("email").value;
                   document.getElementById("phone-number").textContent = document.getElementById("phone").value;
                   document.getElementById("ultimPret").textContent = document.getElementById("ttPrice").textContent 
             }


                if(j == currentButton)         // if index of div == index of button show that div and hide all others
                    {
                      sectionList[j].style.display = "block";
                    }
                else
                {
                  sectionList[j].style.display = "none";
                } 


                if(currentButton >= 0 && currentButton < 3)      // display the green check mark and make the next div in progress bar lightly
                 {
                     var check = progressList[currentButton].querySelector("img");
                     check.style.display = "inline";
                     progressList[currentButton].parentNode.style.opacity = "0.7";
                     progressList[currentButton + 1].parentNode.style.opacity = "1"; 
                }  
            } 

      } 
                
                 /* == show green check mark or yellow exclamation sign == */

      var inputsList = Array.prototype.slice.call(document.getElementsByClassName("user-input"));

       for(var y = 0; y < inputsList.length; y++)
         inputsList[y].addEventListener("blur", validate);           

          function validate(){
           
            var namePattern = /^[a-zA-Z ]+$/;
            var phonePattern = /^[0-9]{10}$/;
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(this.id == "firstName" || this.id == "secondName")
              {
                 if(namePattern.test(this.value))
                   { this.parentNode.querySelector(".good").style.display = "block";
                     this.parentNode.querySelector(".bad").style.display = "none";                
                   }
                   else 
                    { this.parentNode.querySelector(".bad").style.display = "block";
                      this.parentNode.querySelector(".good").style.display = "none";
                   } 
              }
            if(this.id == "phone")
               {
                   if(phonePattern.test(this.value))
                   { this.parentNode.querySelector(".good").style.display = "block";
                     this.parentNode.querySelector(".bad").style.display = "none";                
                   }
                   else 
                    { this.parentNode.querySelector(".bad").style.display = "block";
                      this.parentNode.querySelector(".good").style.display = "none";
                   } 

               }
            if(this.id == "email")
            {
                if(emailPattern.test(this.value))
                    { this.parentNode.querySelector(".good").style.display = "block";
                     this.parentNode.querySelector(".bad").style.display = "none";                
                   }
                   else 
                    { this.parentNode.querySelector(".bad").style.display = "block";
                      this.parentNode.querySelector(".good").style.display = "none";
                   } 
            }     
          }
          
   
 
         /* == move backwards through purchase divs == */

  var backToPayment = document.getElementById("backToPayment");
  var backtoContact = document.getElementById("backToContact");
  var backToDelivery = document.getElementById("backToDelivery");
  var backToMenu = document.getElementById("backToMenu");
  
  var backwardButtonList = [backToMenu, backToDelivery, backtoContact, backToPayment ];
  var backwardDivsList = [mainContent, deliverySection, contactSection, paymentSection];
  var currentBackButton;

     for(var a = 0; a < backwardButtonList.length; a++)
        backwardButtonList[a].addEventListener("click",moveBack);

        function moveBack(event){
              
           for(var i = 0; i < backwardButtonList.length; i++)
               {
                  if(backwardButtonList[i] === this)
                      currentBackButton = i;
               } 

var progressList = document.getElementsByClassName("bubble");

            if(currentBackButton > 0 && currentBackButton < 4)      // display the green check mark and make the next div in progress bar lightly
                 {
                     var check = progressList[currentBackButton-1].querySelector("img");
                     check.style.display = "none";
                     progressList[currentBackButton-1].parentNode.style.opacity = "1";
                     progressList[currentBackButton].parentNode.style.opacity = "0.7"; 
                }     


           for(var j = 0; j < backwardDivsList.length; j++)
              {
                   if(currentBackButton == 0)
                     { deliveryContent.style.display = "none";
                       footer.style.marginTop = "-1px";
                     }
                  if(j==currentBackButton)
                    {
                       backwardDivsList[j].style.display = "block";
                       document.getElementById("confirmation").style.display = "none";
                    }
                   else 
                   {
                     backwardDivsList[j].style.display = "none";
                   } 
              }       

        }

        /*== confirmation message ==*/

        var messageBox = document.getElementById("sent"),
            placeOrdeBt = document.getElementById("sentOrder");

        placeOrdeBt.addEventListener("click",function(){

            messageBox.style.display = "block";
            setTimeout(function(){
                 messageBox.style.display = "none";
                 window.location.reload();
            },1500);
        });    

  
