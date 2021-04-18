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
        cartNumber();
    })
}

function cartNumber() {
    let productNumbers = localStorage.getItem('cartNumber');
    

    productNumbers = parseFloat(productNumbers);

    if (productNumbers){
        localStorage.setItem('cartNumber', productNumbers + 1);
    }else {
        localStorage.setItem('cartNumber', 1)
    }
    
    
}