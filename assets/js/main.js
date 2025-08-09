jQuery(document).ready(function ($) {

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 400 });

    /* ======= Fixed header when scrolled ======= */

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('#header').addClass('navbar-fixed-top');
            $('#site-name').removeClass('ele-hide')
            $('#site-name').addClass('ele-show')
        }
        else {
            $('#header').removeClass('navbar-fixed-top');
            $('#site-name').addClass('ele-hide')
            $('#site-name').removeClass('ele-show')
        }
    });

    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function (e) {

        //store hash
        var target = this.hash;

        e.preventDefault();

        $('body').scrollTo(target, 800, { offset: -70, 'axis': 'y' });
        //Collapse mobile menu after clicking
        if ($('.navbar-collapse').hasClass('in')) {
            $('.navbar-collapse').removeClass('in').addClass('collapse');
        }

    });
    $('.accordion-header').click(function () {
        // Toggle the content of the clicked header
        $(this).next('.accordion-content').slideToggle();

        // Close the other sections
        $('.accordion-content').not($(this).next()).slideUp();
    });
    $('.accordion-content').first().css('display', 'block');
    
    //var cardHeight = $('.card').first().height();
    //$('.card').css({ height: cardHeight });
    
    const $carousel = $("#eventphotos .carousel");
    const $slides = $("#eventphotos .carousel-slide");
    const $morePhotos = $("#photos .carousel");
    const $moreSlides = $("#photos .carousel-slide");
    let epIndex = 0;
    let pIndex = 0;

    function showSlide(currentCarousel, index) {
        currentCarousel.css("transform", `translateX(-${index * 100}%)`);
    }
    const autoAdvanceInterval = 2000; // Change slide every 2 seconds
    var $window = $(window);
    setInterval(function () {
        var multiplier = Math.round($window.width()/400);
        showSlide($carousel, epIndex);
        showSlide($morePhotos, pIndex);
        pIndex++;
        epIndex++;
        if(epIndex*multiplier > $slides.length){
            epIndex = 0;
        }
        if(pIndex > $moreSlides.length){
            pIndex = 0;
        }
    }, autoAdvanceInterval);
});
