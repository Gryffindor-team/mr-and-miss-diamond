"use strict";

console.log("hello script");
// ------------------- global array ------
let allProduct=[];
let productName=[];


// ------------ global get the element 

let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
// let div4 = document.getElementById("div4");
// let div5 = document.getElementById("div5");
// let div6 = document.getElementById("div6");
// let div7 = document.getElementById("div7");
// let div8 = document.getElementById("div8");
// let div9 = document.getElementById("div9");





let LeftElement = document.getElementById("left-image");
let CenterElement = document.getElementById("Center-image");
let RightElement = document.getElementById("Right-image");


// let LeftElement2 = document.getElementById("left-image2");
// let CenterElement2 = document.getElementById("Center-image2");
// let RightElement2 = document.getElementById("Right-image2");


// let LeftElement3 = document.getElementById("left-image3");
// let CenterElement3 = document.getElementById("Center-image3");
// let RightElement3 = document.getElementById("Right-image3");




// -------------------- constructore function for the img 

function MenImges (name , source ,price){
    this.name=name;
    this.source=source;
    this.price=price;
    this.vote=0;

    allProduct.push(this);
}
  

new MenImges("ronaldo", "../img/menImg/img1.jpg",200);
new MenImges("messi", "../img/menImg/img1.jpg", 200);
new MenImges("mbabe", "../img/menImg/img1.jpg", 300);


  //----------   function for set item -----------
  // function setItems (){
    
  //    let storeData = JSON.stringify(allProduct);
  //    localStorage.setItem('photo',storeData);
  
  //  }
 


  // ----------------------- function for render the img 

   let div =[div1,div2,div3]

  // function renderImgMen (){
     
  //       LeftElement.src=allProduct[0].source;
  //       CenterElement.src=allProduct[1].source;
  //       RightElement.src=allProduct[2].source;

       

        // for(let i=0 ;i<allProduct.length;i++){
            
        //     let h4 =document.createElement('h4');
        //     div[i].appendChild(h4);
        //     h4.textContent=`${allProduct[i].name}`
        //     let p =document.createElement('p');
        //     div[i].appendChild(p);
        //     p.textContent=`${allProduct[i].price}`
        //     let a =document.createElement('a');
        //     div[i].appendChild(a);
        //     a.href='#'
        //     a.textContent='add to cart'
        //     a.addEventListener('click',()=>{
        //       cartNumber();
        //     })

         
            // a.onclick= function () {
            //     if(typeof(Storage) !== "undefined") {
                  
            //       if (localStorage.clickcount) {
            //         localStorage.clickcount = JSON.stringify(allProduct[i].name);

            //         alert('added to cart');
            //       } 
            //       else {
            //         localStorage.clickcount = 1;
            //       }
            //       document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
            //     } else {
            //       document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
            //     }
            //   
  //         }

    
  // }


  let carts =document.querySelectorAll('.add-cart');
  for(let i=0 ;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
      cartNumber (allProduct[i]);
      totalCost (allProduct[i]);
    })
  }

  function oldNumberCart (){
    let prodectNubmer =localStorage.getItem('cartNumbers');
    if(prodectNubmer){
      document.getElementById('result').textContent=prodectNubmer;
    }
  }


    function cartNumber (prodects){
      console.log(prodects)
let prodectNubmer =localStorage.getItem('cartNumbers');
prodectNubmer=parseInt(prodectNubmer);

if(prodectNubmer){
  localStorage.setItem('cartNumbers', prodectNubmer + 1);
  document.getElementById('result').textContent=prodectNubmer+1;
}
else{

  localStorage.setItem('cartNumbers',1);
  document.getElementById('result').textContent=1;
}
setItems(prodects);
    }

    function setItems(prodects){
      let cartItem=localStorage.getItem('prodectInCart');
      cartItem=JSON.parse(cartItem);
      if(cartItem!==null){

        if(cartItem[prodects.name]==undefined){
          cartItem={
          ...cartItem,
          [prodects.name]:prodects
          }
        }
        cartItem[prodects.name].vote+=1;

      }else{
        prodects.vote=1;
        cartItem ={
         [prodects.name]:prodects
      }

     
      }
      localStorage.setItem('prodectInCart', JSON.stringify(cartItem))
    }


    function totalCost (prodects){
      let cartCost = localStorage.getItem('totalCost');
      if(cartCost!==null){
        cartCost=parseInt(cartCost);
        localStorage.setItem('totalCost',cartCost +prodects.price);
      }
    else {
      localStorage.setItem('totalCost',prodects.price);
    }

  }
















    // renderImgMen();
    console.log(allProduct)

    // LeftElement.addEventListener('click',clicker)
    // CenterElement.addEventListener('click',clicker)
    // RightElement.addEventListener('click',clicker)
    // LeftElement2.addEventListener('click',clicker)
    // CenterElement2.addEventListener('click',clicker)
    // RightElement2.addEventListener('click',clicker)
    // LeftElement3.addEventListener('click',clicker)
    // CenterElement3.addEventListener('click',clicker)
    // RightElement3.addEventListener('click',clicker)
   
    
    // function clicker (event){
    //     if(event.target.id==="left-image"){
    //         // location.href = "../pages/prodect.html";
    //         allProduct[0].vote++;
    //     }
    //     else if(event.target.id==="Center-image"){
    //         // location.href = "../pages/prodect.html";
    //         allProduct[1].vote++;
    //     }
    //     else if(event.target.id==="Right-image"){
    //         // location.href = "../pages/prodect.html";
    //         allProduct[2].vote++;
            
    //     }

    //     // setItems ()
    // }



    oldNumberCart ();


