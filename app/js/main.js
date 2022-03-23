$(function() {

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

    $('.shop__sort-select').styler({
        selectSmartPositioning: false,
    });   

});