var arr = JSON.parse(localStorage.getItem("addedToCart000"))||[];
var left_div = document.querySelector("#cartdiv1");
var right_div = document.querySelector("#cartdiv2");
var bag=0;
if (arr.length==0) {
    console.log(left_div.textContent = "Your cart is Empty!")
    right_div.style.display = "none";
}
else{

    arr.map((elem,index) => {
        
        console.log(elem.Price)
        bag=bag+(+elem.Price);
        var main_div = document.createElement("div")
        main_div.setAttribute("id","main_div")

        var div1 = document.createElement("div")
        div1.setAttribute("id","div11")

        var div2 = document.createElement("div")
        div2.setAttribute("id","div22")


        var div3 = document.createElement("button")
        div3.setAttribute("id","div33")
        div3.textContent = "X"
        div3.addEventListener("click",function(){
            deletetask(index);
        })
        div3.addEventListener("click",function(e){
            e.target.parentNode.remove();
            location.reload();
        })


        var img = document.createElement("img");
        img.setAttribute("id","meal_img");
        img.src = elem.image;
        div1.append(img);

        var h31 = document.createElement("h4");
        h31.textContent = ` ${elem.name}`

        var h32 = document.createElement("p");
        h32.textContent = ` ${elem.sold}`;

        var h36 = document.createElement("h5");
        h36.textContent = `Price : $${elem.Price}`;

        var h34 = document.createElement("p")
        h34.textContent = `Discount: ${elem.cash}`;

        var h35 = document.createElement("p");
        h35.textContent = `Delivery: ${elem.free}`;

        div2.append(h31,h32,h36,h34,h35)
        main_div.append(div1,div2,div3);
        left_div.append(main_div)



        // rigth div


    })










    localStorage.setItem("bag",JSON.stringify(bag));
    var p1 = document.createElement("h2");
    p1.textContent = `ORDER SUMMARY | ${arr.length} ITEM(S)`

    var div111 = document.createElement("div");
    div111.setAttribute("id","div111");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    p2.textContent =`Item(s) subtotal`
    console.log(bag)
    p3.textContent =`$ ${Math.floor(bag)}`;

    div111.append(p2,p3)

    var div222 = document.createElement("div");
    div222.setAttribute("class","div222");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    p4.textContent =`Delivery Fee`
    // p5.textContent =`Rs ${30}`;
    p5.textContent ="Free";

    div222.append(p4,p5)

    var div333 = document.createElement("div");
    div333.setAttribute("class","div222");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    p6.textContent =`Packaging Charge`
    p7.textContent =`$ ${5}`;

    div333.append(p6,p7)

    var div444 = document.createElement("div");
    div444.setAttribute("class","div222");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    p8.textContent =`Taxes`
    p9.textContent =`$ ${Math.ceil(bag*0.05)}`;

    div444.append(p8,p9)

    var div555 = document.createElement("div");
    div555.setAttribute("class","div222");
    var p10 = document.createElement("h2");
    var p11 = document.createElement("h2");
    p10.textContent =`To Pay`
    p11.textContent =`$ ${Math.ceil(bag+5+(bag*0.05))}`;
    div555.append(p10,p11)
    

    var btn1 = document.createElement("Button");
    btn1.setAttribute("id","btn1");
    btn1.textContent = "Checkout";
    btn1.onclick = function(){
        window.location.href = "checkout.html"
    }
    

    right_div.append(p1,div111,div222,div333,div444,div555,btn1)
    function deletetask(index){
        let array1 ;
        arr.splice(index, 1);
        array1=arr
        localStorage.setItem("addedToCart000", JSON.stringify(array1));
        
    }
}









///////////////////
 // image:"https://img.shop.com/Image/280000/288000/288080/products/1895035682.jpg?size=400x400",
    // name:"Summer Fun Set Booty Lift - Green Top Quality Women's Fitness",
    // sold:"Sold by NotJustLeggings",
    // Price:"$32.95",
    // cash:" $2.64 / 8% Cashback",
    // free:"Free shipping",