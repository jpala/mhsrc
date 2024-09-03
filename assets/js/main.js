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
    const $carousel = $(".carousel");
    const $slides = $(".carousel-slide");
    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            currentIndex = $slides.length - 1;
        } else if (index >= $slides.length) {
            currentIndex = 0;
        }

        $carousel.css("transform", `translateX(-${currentIndex * 100}%)`);
    }
    const autoAdvanceInterval = 2000; // Change slide every 2 seconds

    setInterval(function () {
        currentIndex++;
        showSlide(currentIndex);
    }, autoAdvanceInterval);
});
