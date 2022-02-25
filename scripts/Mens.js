let Mens_list = JSON.parse(localStorage.getItem("Mens_Colth_list"));


function mens() {
   
  
let addedToCart1 =[];
  
    // let addedToCart1 = JSON.parse(localStorage.getItem("addedToCart000")) || [];
  // console.log(Mens_list)

  Mens_list.map(function (el) {
    // console.log(el)
    
    let div1 = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.image;
    let name = document.createElement("h3");
    name.textContent = el.name;
    let sold = document.createElement("p");
    sold.textContent = el.sold;
    let Price = document.createElement("h4");
    Price.textContent = `$${el.Price}`;
    let cash = document.createElement("p");
    cash.textContent = el.cash;
    let offer = document.createElement("p");
    offer.textContent = el.free;
    let btn = document.createElement("button");
    btn.textContent = "Add To Cart";
    // btn.addEventListener("click",function(){
    //     addbtn(el)
    // })
    
    btn.onclick = function Vinayak() {
         
        // let addedToCart1 = JSON.parse(localStorage.getItem(addedToCart000))
      addedToCart1.push(el);
      console.log(addedToCart1)
      localStorage.setItem("addedToCart000", JSON.stringify(addedToCart1));
        alert("Added In Cart")
    };

    div1.append(img, name, sold, Price, cash, offer, btn);

    document.getElementById("mensdiv").append(div1);
  });
}



// function addbtn(el){

//     addedToCart1.push(el)
// localStorage.setItem("addedToCart000", JSON.stringify(addedToCart1))


// }
mens();



// let addedToCart = JSON.parse(localStorage.getItem("addedToCart")) || [];

// function addToCart(event_obj)
// {
//     if(addedToCart.length == 0)
//     {
//         addedToCart.push(makeCart(event_obj));
//         localStorage.setItem("addedToCart", JSON.stringify(addedToCart));
//         event_obj.target.textContent = "Added To Cart";
//         event_obj.target.style.backgroundColor = "black";
//     }

// image:"https://img.shop.com/Image/280000/288000/288080/products/1895035682.jpg?size=400x400",
// name:"Summer Fun Set Booty Lift - Green Top Quality Women's Fitness",
// sold:"Sold by NotJustLeggings",
// Price:"$32.95",
// cash:" $2.64 / 8% Cashback",
// free:"Free shipping",

// mens();
