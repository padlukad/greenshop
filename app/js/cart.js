const shipping = 16;
let discount = 0;
let totalCartSum = 0;
// cart content container
const cartWrapper = document.querySelector('.cart__wrapper');
// get data from localstorage from product page
const productCart = localStorage.getItem('item');
//parsing an object from string
const cartItem = JSON.parse(productCart);
//get numbers from string
const productPrice = parseInt(cartItem.price);
const productNum = parseInt(cartItem.num);
// value to insert  in div from start
let productTotal = productPrice * productNum;
// function for calculating cart sum (subtotal aside)
function calcСartSum() {
    let cartItems = document.querySelectorAll('.cart-content');

    cartItems.forEach(function(cartItem){
        let quantity = cartItem.querySelector('input[name="counter"]').value;
        const price = cartItem.querySelector('.product-price').innerText;
        let subTotal = parseInt(price) * parseInt(quantity);
        totalCartSum +=subTotal;
        console.log(totalCartSum);
    });
}
// Insert data in cart item template
const cartItemHTML =    `<div class="cart__inner-item cart-content">
                             <div class="cart-content__info">
                                <div class="cart-content__inner">
                                     <div class="cart-content__imgbox">
                                         <img src="${cartItem.imageSrc}" alt="${cartItem.name}">
                                     </div>
                                     <div class="cart-content__wrapper">
                                         <div class="cart-content__name">
                                             ${cartItem.name}
                                         </div>                                      
                                         <div class="cart-content__sku">
                                             SKU: <span>${cartItem.skuNumber}</span>
                                         </div>
                                     </div>
                                 </div>
                                 <div class="cart-content__price">
                                    $<span class="product-price">${cartItem.price}</span> 
                                 </div>
                             </div>
                             <div class="cart-content__quantity">
                                 <form class="cart-content__form" action="#">
                                     <input class="cart-content__form-input" type="number" value="${productNum}" min="1" name="counter">
                                 </form>
                             </div>
                             <div class="cart-content__total">
                                $<span class="product-total">${productTotal}</span> 
                             </div>
                             <div class="cart-content__kill">
                                 <button class="cart-content__kill-btn">
                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                         <g id="Iconly/Curved/Delete">
                                         <g id="Delete">
                                         <path id="Stroke 1" d="M18.8892 9.55408C18.8892 17.5731 20.0435 21.1979 12.2797 21.1979C4.5149 21.1979 5.693 17.5731 5.693 9.55408" stroke="#727272" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                         <path id="Stroke 3" d="M20.3651 6.47979H4.2146" stroke="#727272" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                         <path id="Stroke 5" d="M15.7148 6.47979C15.7148 6.47979 16.2434 2.71408 12.2891 2.71408C8.33578 2.71408 8.86435 6.47979 8.86435 6.47979" stroke="#727272" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                         </g>
                                         </g>
                                     </svg>
                                 </button>
                             </div>
                        </div>`;
// Show product in cart
cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
// calculate sum for preload
calcСartSum();
// write sum in it's place
let subtotalEl = document.querySelector('.subtotal-sum');
subtotalEl.innerText = totalCartSum;

let totalEl = document.querySelector('.total-sum');
totalEl.innerText = totalCartSum - discount + shipping;
// after page has been loaded
window.onload=function(){
    //click on window
    window.addEventListener('click', function(e){
        let counter;
        let priceWrapper;
        let priceEl;
        let price;
        let newProductTotal;
        //click strictly on plus or minus
        if(e.target.classList.contains('plus') || e.target.classList.contains('minus')) {
            // wrapper of counter
            const counterWrapper = e.target.closest('.cart-content__form');           
            //input value of counter
            counter = counterWrapper.querySelector('input[name="counter"]').value;
            priceWrapper = counterWrapper.closest('.cart-content');
            priceEl = priceWrapper.querySelector('.product-price').innerText;
            newProductTotal = priceWrapper.querySelector('.product-total');
        }
        //is it button plus
        if(e.target.classList.contains('plus')) {
            counter=++counter;
        }
        //is it button minus
        if(e.target.classList.contains('minus')) {
            if(counter>1) {
                counter=--counter;
            }
        }
        totalCartSum = 0;
        productTotal = 0;
        calcСartSum();
        productTotal = parseInt(priceEl) * counter;
        newProductTotal.innerText = productTotal;
        subtotalEl.innerText = totalCartSum;
        totalEl.innerText = totalCartSum - discount + shipping;           
    });
}