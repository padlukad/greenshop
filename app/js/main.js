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
        localStorage.removeItem('item');
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

});