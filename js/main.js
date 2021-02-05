//scroll animations
new WOW().init();

//tabs
$(".tabs-inner .tab-link").click(function() {
    $(".tabs-inner .tab-link").removeClass("active").eq($(this).index()).addClass("active");
    $(".tabs-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".tabs-controls li").on('click', function () {
    $(".slider").resize();
    alert();
});

//slider
$('.slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/icons/left-arrow.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/icons/right-arrow.png" alt=""></button>',
});

//menu btn
$('.menu-btn').on('click', function () {
    $('.menu-list').addClass('change');
});

$('.close-btn').on('click', function () {
    $('.menu-list').removeClass('change');
});

//menu search input
$(".menu-search, .search").mouseleave(function () {
    $('.search-input').css("visibility", "hidden");
    $('.search-input').val('');
});

$(".menu-search, .search").mouseenter(function () {
    $('.search-input').css("visibility", "visible");
});






