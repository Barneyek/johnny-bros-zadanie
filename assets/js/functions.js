   $(document).ready(function() {
         $('.icon').click(function() {
            $('nav').toggleClass('active-toggle');
            $('.icon').toggleClass('anime');
            $('body').toggleClass('overly');
         })
         $('ul li a').click(function() {
            $('li a').removeClass("active ");
            $(this).addClass("active ");
         })
         $(window).scroll(function() {
            if ($(window).scrollTop() >= 40) {
               $('#head').addClass('fixed');
            } else {
               $('#head').removeClass('fixed');
            }
         });
      });