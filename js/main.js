$(function() { 
 
    $('.shop__mix-btn').on('click', function(){
        $('.shop__mix-btn').removeClass('shop__mix-btn--active');
        $(this).addClass('shop__mix-btn--active');
    });

    $('#login-button').on('click', function(){
        $('.login').addClass('login-active');
        $('.overlay').addClass('overlay-active');
    });

    $('.login__link-register').on('click', function(){
        $('.login').removeClass('login-active');
        $('.register').addClass('register-active');
    });

    $('.register__link-login').on('click', function(){
        $('.register').removeClass('register-active');
        $('.login').addClass('login-active');
    });

    $('.register__close, .overlay').on('click', function(){
        $('.register').removeClass('register-active');
        $('.overlay').removeClass('overlay-active');
    });

    $('.login__close, .overlay').on('click', function(){
        $('.login').removeClass('login-active');
        $('.overlay').removeClass('overlay-active');
    });

    $(function() {
        const UPLOAD_BUTTON = document.getElementById("upload-button");
        const FILE_INPUT = document.querySelector("input[type=file]");
        const AVATAR = document.getElementById("avatar");
    
        UPLOAD_BUTTON.addEventListener("click", () => FILE_INPUT.click());
    
        FILE_INPUT.addEventListener("change", event => {
        const file = event.target.files[0];
    
        const reader = new FileReader();
        reader.readAsDataURL(file);
    
        reader.onloadend = () => {
            AVATAR.setAttribute("aria-label", file.name);
            AVATAR.style.background = `url(${reader.result}) center center/cover`;
            };
        });
    });
   
    $('.shop__sort-select, .product-page__input-num, .cart-content__form-input, .input-state, .input-country').styler({
        selectSmartPositioning: false,
    });  
    
    $('.payment-form__btn').on('click',function(e){
        e.preventDefault();
        $('.confirm').addClass('confirm-active');
        $('.overlay').addClass('overlay-active');
    });

    $('.confirm__close, .overlay').on('click',function(){
        $('.confirm').removeClass('confirm-active');
        $('.overlay').removeClass('overlay-active');
    });

    $('.account-menu__link').on('click',function(e){
        $('.account-menu__link').removeClass('account-menu__link-active');
        $(this).addClass('account-menu__link-active');
    });

    $('.cart-content__kill-btn').on('click', function(){      
        $($(this).closest('.cart-content')).addClass('cart-content__killed');
    });

    $('.tabs__top-link').on('click', function(e){
        e.preventDefault();

        $('.tabs__top-link').removeClass('tabs__top-active');
        $(this).addClass('tabs__top-active');

        $('.tabs__item').removeClass('tabs__item-active');
        $($(this).attr('href')).addClass('tabs__item-active');
    });

    $(".star").rateYo({
        ratedFill: "#FFAC0C",
        normalFill: "#C4C4C4",
        starWidth: "15px",
        spacing: "3px",
        readOnly: true,
    });

    $('.product-page__slider-thumb').slick({
        vertical: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        draggable: false,
        asNavFor: '.product-page__slider-big'
    });

    $('.product-page__slider-big').slick({
        slidesToShow: 1,
        arrows: false,
        draggable: false,
        fade: true,
        asNavFor: '.product-page__slider-thumb'
    });

    $('.related__slider').slick({
        arrows: false,
        dots: true,
        initialSlide: 7,
        slidesToShow: 5,
        slidesToScroll: 5,
    });

    $('.pagination__list-link').on('click', function(){
        $('.pagination__list-link').removeClass('current-page');
        $(this).addClass('current-page');
    });

    $(".filter__price-input").ionRangeSlider({
        type: 'double',
        prefix: "$",
        onStart: function(data) {
            $('.filter__price-from').text(data.from);
            $('.filter__price-to').text(data.to); 
        },
        onChange: function(data) {
            $('.filter__price-from').text(data.from);
            $('.filter__price-to').text(data.to);
        },
    });

    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        initialSlide: 1,
        fade: true,
    });

    var mixer = mixitup('.shop__content-items');
    // $(function(){

    //     const cartWrapper = document.querySelector('.cart__wrapper');
    //     // отслеживаем клик на странице
    //     window.addEventListener('click', function(event){    
    //         //проверяем клик по "добавить в корзину"
    //         if (event.target.classList.contains('product-page__form-cart')) {
    //             // Находим товар, внутри которого был совершен клик
    //             const productPage = event.target.closest('.product-page__inner');
    //             // Собираем данные с этого товара и записываем их в единый обьект
    //             const productInfo = {
    //                 name: productPage.querySelector('.product-page__title').innerText,
    //                 imageSrc: productPage.querySelector('.product-page__big-img').getAttribute('src'),
    //                 skuNumber: productPage.querySelector('.sku__number').innerText,
    //                 price: productPage.querySelector('.product-page__price').innerText,
    //                 num: productPage.querySelector('#counter').value,
    //                 size: productPage.querySelector('input[name="size"]:checked').value,
    //             }
    //             console.log (productInfo);
    //         }
    //         // Собранные данные подставляем в шаблон товара в корзине
    //         const cartItemHTML = `<div class="cart__inner-item cart-content">
    //                                     <div class="cart-content__info">
    //                                         <div class="cart-content__inner">
    //                                             <div class="cart-content__imgbox">
    //                                                 <img src="${productInfo.imageSrc}" alt="${productInfo.name}">
    //                                             </div>
    //                                             <div class="cart-content__wrapper">
    //                                                 <div class="cart-content__name">
    //                                                     ${productInfo.name}
    //                                                 </div>                                      
    //                                                 <div class="cart-content__sku">
    //                                                     SKU: <span>${productInfo.skuNumber}</span>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <div class="cart-content__price">
    //                                             $<span class="product-price">${productInfo.price}</span> 
    //                                         </div>
    //                                     </div>
    //                                     <div class="cart-content__quantity">
    //                                         <form class="cart-content__form" action="#">
    //                                             <input class="cart-content__form-input" type="number" value="${productInfo.num}" min="1">
    //                                         </form>
    //                                     </div>
    //                                     <div class="cart-content__total">
    //                                         $<span class="product-total">238.00</span> 
    //                                     </div>
    //                                     <div class="cart-content__kill">
    //                                         <button class="cart-content__kill-btn">
    //                                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                                 <g id="Iconly/Curved/Delete">
    //                                                 <g id="Delete">
    //                                                 <path id="Stroke 1" d="M18.8892 9.55408C18.8892 17.5731 20.0435 21.1979 12.2797 21.1979C4.5149 21.1979 5.693 17.5731 5.693 9.55408" stroke="#727272" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    //                                                 <path id="Stroke 3" d="M20.3651 6.47979H4.2146" stroke="#727272" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    //                                                 <path id="Stroke 5" d="M15.7148 6.47979C15.7148 6.47979 16.2434 2.71408 12.2891 2.71408C8.33578 2.71408 8.86435 6.47979 8.86435 6.47979" stroke="#727272" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    //                                                 </g>
    //                                                 </g>
    //                                             </svg>
    //                                         </button>
    //                                     </div>
    //                                 </div>`;
    //             // Отображаем товар в корзине
    //         cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
                
    //     });
    // });

});