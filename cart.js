let carts = document.querySelectorAll('.btn.btn-primary');
// cart will get hold of all btn primary buttons 
let products = [
    {
        name:"Tulsi",
        tag:"TULSI",
        price:200,
        inCart:0,

    },
    {
        name:"Aloe-Vera",
        tag:"ALOE-VERA",
        price:300,
        inCart:0,
    },
    {
        name:"Lavender",
        tag:"LAVENDER",
        price:600,
        inCart:0,
    },
    {
        name:"Mint",
        tag:"MINT",
        price:200,
        inCart:0,
    },
    {
        name:"Snake Plant",
        tag:"SNAKE_PLANT",
        price:700,
        inCart:0,
    },
    {
        name:"Chinese Money plant",
        tag:"CHINESE_MONEY_PLANT",
        price:400,
        inCart:0,
    },
    {
        name:"Spider Plant",
        tag:"SPIDER-PLANT",
        price:650,
        inCart:0,
    },
    {
        name:"Dancing bone Cactus",
        tag:"DANCING-BONE-CACTUS",
        price:1300,
        inCart:0,
    },
    {
        name:"Lemon",
        tag:"LEMON",
        price:600,
        inCart:0,
    },
    {
        name:"Banana",
        tag:"BANANA",
        price:800,
        inCart:0,
    },
    {
        name:"Bogainvilla Seeds",
        tag:"BOGAINVILLA",
        price:900,
        inCart:0,
    },
    {
        name:"Pumpkin Seeds",
        tag:"PUMPKIN_SEEDS",
        price:300,
        inCart:0,
    },
    {
        name:"Apple",
        tag:"APPLE",
        price:100,
        inCart:0,
    },
    {
        name:"Green chilly",
        tag:"CHILLY",
        price:500,
        inCart:0,
    },
    {
        name:"Tomato",
        tag:"TOMATO",
        price:300,
        inCart:0,
    },
    {
        name:"Brinjal",
        tag:"BRINJAL",
        price:800,
        inCart:0,
    },
    
]

// if u click on the carts thing the following will happen
for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
}
function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers+1);

    }else{
        localStorage.setItem('cartNumbers',1);
    }
    setItems(product);
}


function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
   
    
    if(cartItems!=null){
        if(cartItems[product.tag] == undefined){
            cartItems={
                ...cartItems,
                [product.tag]:product
            }
        }
            cartItems[product.tag].inCart += 1;
    }
    else{
        product.inCart=1;
        cartItems={
            [product.tag]:product
        }
     }
localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}

function totalCost(product){
    

    // console.log("The product price is ",product.price);
    let cartCost = localStorage.getItem('totalCost');
    // console.log("My cart is ",cartCost);
    
    if(cartCost !=null){
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost',cartCost + product.price);
    }else{
        localStorage.setItem('totalCost',product.price);
    }
    
}
onLoadCartNumbers();
function remove(){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if(products.tag.inCart==0){

    }
    else{
        products.tag.inCart -= 1;
    }
}
function displayCart(){
    let cartItems = localStorage.getItem('productsInCart');
    let cartCost = localStorage.getItem('totalCost');
    cartItems = JSON.parse(cartItems);
    // console.log(cartItems);
    let productContainer = document.querySelector(".products");

    if(cartItems && productContainer){
        // console.log("running");
        productContainer.inerHTML = '';
        Object.values(cartItems).map(item=>{
productContainer.innerHTML +=`

<div class="row g-4">   
<div class="a_item" style="display:flex; width=100%; max-width:650px; justify-content:flex-start;margin:0 auto">
            <div class="product" >
            <button type="button" class="btn btn-dark" onclick="remove()">x</button>
            <div class="col-lg m-5">
            <img src="${item.tag}.jpeg">
            <span>${item.name}</span>
            </div>
            
            </div>
            <div class="col-lg m-5">
            <div class="price">
                ${item.price}
            </div>
            </div>
            <div class="col-lg m-5">
            <div class = "quantity">

                
                <span>${item.inCart}</span>

                
                
               
            </div>
            </div>
            <div class="col-lg m-5">
<div class="total">
${item.inCart * item.price}
</div>
            
</div>

            </div>
           

    </div>


            `;
        });
        productContainer.innerHTML +=
        `
        <div class="bg-dark text-light">
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
        Basket Total : 
        </h4>
        <h4 class = "basketTotal">
        ${cartCost}
        </h4>
        </div>
        </div>
        `

    }

}
displayCart();