// отслеживаем клик на странице
window.addEventListener('click', function(event){    
    //проверяем клик по "добавить в корзину"
    if (event.target.classList.contains('product-page__form-cart')) {
        // Находим товар, внутри которого был совершен клик
        const productPage = event.target.closest('.product-page__inner');
        // Собираем данные с этого товара и записываем их в единый обьект
        const productInfo = {
            name: productPage.querySelector('.product-page__title').innerText,
            imageSrc: productPage.querySelector('.product-page__big-img').getAttribute('src'),
            skuNumber: productPage.querySelector('.sku__number').innerText,
            price: productPage.querySelector('.price').innerText,
            num: productPage.querySelector('#counter').value,
            size: productPage.querySelector('input[name="size"]:checked').value,
        }
        localStorage.setItem('item', JSON.stringify(productInfo));
    }
});