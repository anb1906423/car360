$(document).ready(function () {
    $('body').addClass('loaded');

    // discountPage
    setInterval(function () {
        $('.poster-red').toggleClass('none');
        $('.poster-blue').toggleClass('none');
    }, 500);

    $('.discount-poster').click(function () {
        window.location.href='https://shop.vinfastauto.com/vn_vi/vinfast-cars-deposit.html';
    });
});