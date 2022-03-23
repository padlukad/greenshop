$(function() {

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