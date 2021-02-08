(function($) {
        $(document).on("facetwp-loaded", function () {
            console.log("facet");
            var count = $(".facetwp-template").children().length;
            console.log(count);
            $("#case-count").text(count + " cases");
            console.log('newslick');
            $('.new').each(function(){
              console.log($(this));
              $(this).slick({
                arrows: true,
                dots: false,
                slidesToShow: 1,
                prevArrow:
                  "<div class=prev-arrow><img src=/wp-content/uploads/2021/02/slider_prev.svg /></div>",
                nextArrow:
                  "<div class=next-arrow><img src=/wp-content/uploads/2021/02/slider_next.svg /></div>",
              });
            });
          });
})(jQuery);