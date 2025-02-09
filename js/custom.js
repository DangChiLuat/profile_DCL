(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
      loop: true,          // Lặp vô tận
      margin: 10,          // Khoảng cách giữa các slide
      nav: true,           // Hiển thị nút điều hướng
      dots: true,          // Hiển thị các chấm chuyển slide
      autoplay: true,      // Kích hoạt tự động chạy slide
      autoplayTimeout: 3000, // Thời gian mỗi slide (3 giây)
      autoplayHoverPause: true, // Dừng khi di chuột vào
      responsive: {
        0: { items: 1 }
      }
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);
