import './scss/index.scss'
console.log('test')

$('.toggle').on('click', function () {
    console.log('menu_active');
    $(".main-menu").toggleClass('menu_active');

    $(".menu-icon").toggleClass('menu-icon-active');

});