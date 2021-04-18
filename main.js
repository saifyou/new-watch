let carts = document.querySelectorAll('.add-cart');
let product = [
    {
    name:'Red Rolex',
    tag : 'redrolex',
    price : 20.000,
    incart:0
    },

    {
    name:'Gold Rolex',
    tag : 'goldrolex',
    price : 120.000,
    incart:0
    },

    {
    name:'Diamond Rolex',
    tag : 'diamandrolex',
    price : 50.000,
    incart:0
    },
]
for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumber(product[i]);
        totalCost(product[i])
    })
}
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumber');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}
function cartNumber(product) {
    let productNumbers = localStorage.getItem('cartNumber');
    productNumbers = parseInt(productNumbers);
    if (productNumbers){
        localStorage.setItem('cartNumber', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }else {
        localStorage.setItem('cartNumber', 1)
        document.querySelector('.cart span').textContent = 1;
    } 
    setItem(product); 
}
function setItem(product){
   let cartItems = localStorage.getItem('productInCart');
   cartItems = JSON.parse(cartItems)
   console.log(cartItems);
    if(cartItems != null){
       if(cartItems[product.tag] == undefined) {
           cartItems = {
               ...cartItems,
               [product.tag]: product
           }
       }
       cartItems[product.tag].incart += 1;
    }else{
        product.incart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productInCart", JSON.stringify(cartItems));
}
function totalCost(product){
    //console.log("the product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("my cartCost is", cartCost );
    console.log(typeof cartCost );

    if (cartCost != null){
        cartCost = parseFloat(cartCost);
        localStorage.setItem("totalCost",cartCost + product.price);
    } else {
    localStorage.setItem("totalCost", product.price);
} 


}
onLoadCartNumbers();