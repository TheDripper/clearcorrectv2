(function ($) {
  if ($("#cards-filter-cases").length) {
    $("#cards-filter-cases").on("change", function (e) {
      var slug = $(this).val();
      var doctor = $(this).attr("data-doctor");
      var data = {
        action: "cards_filter_cases",
        slug: slug,
      };
      if ($(this).attr("data-doctor").length != 0) {
        data["doctor"] = $(this).attr("data-doctor");
      }
      console.log(data);
      $.ajax({
        url: wp.ajax.settings.url,
        type: "POST",
        data: data,
        success: function (res) {
          console.log(res);
          $(".facetwp-template").empty();
          $(".facetwp-template").append(res);
          $(".new").each(function () {
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
        },
      });
    });
  }
  $(document).on("facetwp-loaded", function () {
    console.log("facet");
    var count = $(".facetwp-template").children().length;
    console.log(count);
    $("#case-count").text(count + " cases");
    console.log("newslick");
    $(".new").each(function () {
      $(this).removeClass("new");
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
