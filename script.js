const btncart=document.getElementById('cart-icon');
const cartslide=document.querySelector('.cart-slider');
const btnclose=document.getElementById('cart-close');

btncart.addEventListener('click',()=>{
    cartslide.classList.add('cart-active');
});

btnclose.addEventListener('click',()=>{
    cartslide.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded',loadfood);

function loadfood(){
    loadcontent();
}

function loadcontent(){
    //remove food items from cart
    let btnremove=document.querySelectorAll('.cart-remove');
    btnremove.forEach((btn)=>{
      btn.addEventListener('click',removeitem) ;
    });

    // product item change event
    let qtyelement=document.querySelectorAll('.cart-qut');
    btnremove.forEach((input)=>{
      btn.addEventListener('click',Quantitychange) ;
    });
}

//remove items 
function removeitem(){
    this.parentElement.remove();
}

//change quantity

// function Quantitychange(){
//     if(isNaN(this.value) || this.value<1){
//         this.value=1;
//     }
// }