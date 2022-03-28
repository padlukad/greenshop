$(function() {

   
    $(function(){
        const openModalButtons = document.querySelectorAll('[data-modal-target]')
        const closeModalButtons = document.querySelectorAll('[data-close-button]')
        const overlay = document.getElementById('overlay')

        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = document.querySelector(button.dataset.modalTarget)
                openModal(modal)
            })
        })

        closeModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = button.closest('.modal')
                closeModal(modal)
            })
        })

        function openModal(modal) {
            if (modal == null) return
            modal.classList.add('active')
            overlay.classList.add('active')
        }

        function closeModal(modal) {
            if (modal == null) return
            modal.classList.remove('active')
            overlay.classList.remove('active')
        }
    });

    $('.login__link-register').on('click', function() {
        $('.login__link-login').removeClass('login__link-active');
        $('.register__link-register').addClass('register__link-active');
        $('.register').addClass('register-active');
        $('.overlay').addClass('overlay-active');
    });

    $('.register__close').on('click', function(){
        $('.register').removeClass('register-active');
        $('.login__link-login').addClass('login__link-active');
        $('.register__link-register').removeClass('register__link-active');
        $('.overlay').removeClass('overlay-active');
    });

    $('.register__link-login').on('click', function(){
        $('.register').removeClass('register-active');
        $('.login__link-login').addClass('login__link-active');
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

    $(".star").rateYo({
        ratedFill: "#FFAC0C",
        normalFill: "#C4C4C4",
        starWidth: "15px",
        spacing: "3px",
        readOnly: true,
    });

    $('.related__slider').slick({
        arrows: false,
        dots: true,
        initialSlide: 7,
        slidesToShow: 5,
        slidesToScroll: 5,
    });

    $('.shop__mix-btn').on('click', function(){
        $('.shop__mix-btn').removeClass('shop__mix-btn--active');
        $(this).addClass('shop__mix-btn--active');
    });

    $('.pagination__list-link').on('click', function(){
        $('.pagination__list-link').removeClass('current-page');
        $(this).addClass('current-page');
    });

    $('a').on('click', function(event) {
        event.preventDefault();
    });

    var mixer = mixitup('.shop__content-items');

    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        initialSlide: 1,
        fade: true,
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
 


});