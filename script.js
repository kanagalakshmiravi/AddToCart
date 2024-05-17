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
    let qtyelement =document.querySelectorAll('.cart-qut');
    qtyelement.forEach((input)=>{
      input.addEventListener('change',changeqty);
    });

    //product cart
    let cartbtns=document.querySelectorAll('.foodcart');
    cartbtns.forEach((btn)=>{
      btn.addEventListener('click',addcart) ;
    });


}

//remove items 
function removeitem(){
    if (confirm('Are you sure to remove'))
    this.parentElement.remove();
}

//change quantity

function changeqty(){
    if(isNaN(this.value) || this.value<1){
   this.value=1;
    }
}

//add cart
function addcart(){
   let food =this.parentElement;
   let title = food.querySelector('.foodname').innerHTML;
   let price= food.querySelector('.food-price').innerHTML;
   let imgSrc = food.querySelector('.foodimage').src;

//    console.log(title,price,imgSrc)
 let productelement= createcartproduct(title,price,imgSrc); 
 let element=document.createElement('div');
 element.innerHTML=productelement;
 let cartbasket=document.querySelector('.cart-content');
 cartbasket.append(productelement)
  loadcontent()
   
   
}

function createcartproduct(title,price,imgSrc){

return `
<div class="cart-box">
                            <img src="${imgSrc}" alt="" class="cart-image">
                            <div class="detail-box">
                                <div class="food-name">${title}</div>
                                <div class="price-box">
                                    <div class="cart-price">${price}</div>
                                    <div class="cart-amt">${price}</div>
                                </div>
                                <input type="number" value="1" class="cart-qut">

                            </div>
                            <ion-icon name="trash" class="cart-remove"></ion-icon>
                        </div>
`;

}









