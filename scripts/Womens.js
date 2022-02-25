let womens_list = JSON.parse(localStorage.getItem("Womens_Colth_list"));
function Womens(){
let addedToCart1=[];
// console.log(womens_list)

womens_list.map(function(el){
 
// let addedToCart1 = JSON.parse(localStorage.getItem("addedToCart000")) || [];
    // console.log(el)
    let div1= document.createElement("div");

let img = document.createElement("img");
img.src=el.image;
let name = document.createElement("h3");
name.textContent=el.name;
let sold = document.createElement("p");
sold.textContent=el.sold;
let Price = document.createElement("h4");
Price.textContent=el.Price;
let cash = document.createElement("p");
cash.textContent=el.cash;
let offer = document.createElement("p");
offer.textContent=el.free
let btn = document.createElement("button");
btn.textContent="Add To Cart"
 btn.onclick = function Vinayak() {
         
        // let addedToCart1 = JSON.parse(localStorage.getItem(addedToCart000))
      addedToCart1.push(el);
      console.log(addedToCart1)
      localStorage.setItem("addedToCart000", JSON.stringify(addedToCart1));
        alert("Added In Cart")
    };

div1.append(img,name,sold,Price,cash,offer,btn)

document.getElementById("womensdiv").append(div1)
})

}
Womens()



