import Masonry from "masonry-layout";
import visible from "../util/visible";
import $ from "jquery";
import "slick-carousel";
import "datatables";
import "jquery-ui/themes/base/core.css";
import "jquery-ui/themes/base/draggable.css";
import "jquery-ui/ui/core";
import "jquery-ui/ui/widgets/draggable";
export default {
  init() {
    // JavaScript to be fired on all pages
    if ($(".facet-arrow").length) {
      $(".facet-arrow").on("click", function () {
        $(this).next().toggleClass("hide-height");
      });
    }
    console.log("ow");
    
    if ($("#loginform").length) {
      $("#loginform").on("submit", function (e) {
        e.preventDefault();
        var valid = true;
        var $form = $(this);
        $(
          '#loginform input[type="text"], #loginform input[type="password"]'
        ).each(function () {
          $(this).parent().removeClass("error");
          if (!$(this).val()) {
            $(this).parent().addClass("error");
            valid = false;
          }
        });
        if (valid) {
          $form.off().trigger("submit");
        }
      });
    }
    if ($(".post-type-archive-case").length) {
      var ad = $("main").attr("data-banner-ad");
      var content = $("main").attr("data-page-content");
      $.ajax({
        url: wp.ajax.settings.url,
        type: "POST",
        data: {
          action: "get_other_content",
          id: ad,
        },
        success: function (res) {
          $(".case:nth-child(2)").after(res);
        },
      });
      $.ajax({
        url: wp.ajax.settings.url,
        type: "POST",
        data: {
          action: "get_other_content",
          id: content,
        },
        success: function (res) {
          $('.content').append(res);
        },
      });
    }

    if ($("#filter-cases").length) {
      $("#filter-cases").on("change", function (e) {
        var slug = $(this).val();
        $.ajax({
          url: wp.ajax.settings.url,
          type: "POST",
          data: {
            action: "filter_cases",
            slug: slug,
          },
          success: function (res) {
            console.log(res);
            $(".table-wrap").empty();
            $(".table-wrap").append(res);
            $(".table-wrap .datatable").dataTable();
          },
        });
      });
    }
    if ($("#cards-filter-cases").length) {
      $("#cards-filter-cases").on("change", function (e) {
        var slug = $(this).val();
        var doctor = $(this).attr("data-doctor");
        $.ajax({
          url: wp.ajax.settings.url,
          type: "POST",
          data: {
            action: "cards_filter_cases",
            slug: slug,
            doctor: doctor,
          },
          success: function (res) {
            console.log(res);
            $(".facetwp-template").empty();
            $(".facetwp-template").append(res);
          },
        });
      });
    }

    $(document).on("keypress", function (e) {
      if (e.which == 13 && $("#search").is(":focus")) {
        $(".search-wrap img").trigger("click");
      }
    });
    if ($(".edit-img-frame").length) {
      $(".edit-img-frame").on("click", function () {
        $(this).parent().find("input").trigger("click");
      });
      $('input[type="file"]').on("change", function () {
        var input = this;
        console.log(input);
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          console.log(input);
          reader.onload = function (e) {
            var img = $(input).parent().parent().find("img");
            img.attr("src", e.target.result);
            img.parent().addClass("edit");
          };
          reader.readAsDataURL(input.files[0]); // convert to base64 string
        }
      });
    }
    if ($(".edit-video-frame").length) {
      $(".edit-video-frame").on("click", function () {
        $(this).parent().find("input").trigger("click");
      });
      $('input[type="file"]').on("change", function () {
        var input = this;
        console.log(input);
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          console.log(input);
          reader.onload = function (e) {
            var video = $(input).parent().parent().find("video");
            video.find("source").attr("src", e.target.result);
            video.parent().addClass("edit");
          };
          reader.readAsDataURL(input.files[0]); // convert to base64 string
        }
      });
    }
    $(".search-wrap img").on("click", function () {
      var search = $("#search").val();
      console.log(search);
      window.location.href = "/search?_search_bar=" + search;
    });
    if ($(".saves").length) {
      $(".saves .save").on("click", function () {
        var id = Number($(this).parent().attr("data-id"));
        console.log(id);
        var $saves = $(this).parent();
        $.ajax({
          url: wp.ajax.settings.url,
          type: "POST",
          data: {
            action: "add_save",
            id: id,
          },
          success: function (res) {
            console.log(res);
            $saves.find("p").text("SAVES: " + res);
            $saves.find("img").first().css("opacity", "1");
            $saves.find("img").first().css("pointerEvents", "auto");
            $saves.find("img").last().css("opacity", "0");
            $saves.find("img").last().css("pointerEvents", "none");
          },
        });
      });
      $(".saves .drop-save").on("click", function () {
        var id = Number($(this).parent().attr("data-id"));
        var $saves = $(this).parent();
        $.ajax({
          url: wp.ajax.settings.url,
          type: "POST",
          data: {
            action: "drop_save",
            id: id,
          },
          success: function (res) {
            console.log("drop");
            console.log(res);
            $saves.find("p").text("SAVES: " + res);
            $saves.find("img").first().css("opacity", "0");
            $saves.find("img").first().css("pointerEvents", "none");
            $saves.find("img").last().css("opacity", "1");
            $saves.find("img").last().css("pointerEvents", "auto");
          },
        });
      });
    }
    if ($(".logged-in-dropdown").length) {
      $(".logged-in-dropdown").on("click", function () {
        $(this).parent().toggleClass("open");
      });
      // $("main *").on("click", function (e) {
      //   e.stopPropagation();
      //   console.log($(e.target).parent());
      //   $(".logged-in-dropdown").parent().removeClass("open");
      // });
    }
    if ($(".datatable").length) {
      $(".datatable").each(function () {
        $(this).DataTable();
      });
      $("#case-fitler").on("change", function () {
        var selectedValue = $(this).val();
        oTable.fnFilter("^" + selectedValue + "$", 0, true); //Exact value, column, reg
      });
    }
    if ($(".case-images").length) {
      $(".case-image").on("click", function () {
        var src = $(this).find("img").attr("src");
        $(".active").find("img").attr("src", src);
      });
    }
    if ($(".before-after-slider").length) {
      $(window).on("resize", function () {
        $(".before-after-slider").each(function () {
          resetSlider($(this));
        });
      });
      $(".before-after-slider").each(function () {
        resetSlider($(this));
        $(this)
          .find(".wp-block-group__inner-container")
          .append(
            '<div class="before-after-handle"><img src="/wp-content/themes/template/build/images/before-after-handle.svg" /></div>'
          );
        $(this).find(".before-after-handle").draggable({ axis: "x" });

        $(this)
          .find(".before-after-handle")
          .on("mousemove", function () {
            let position = $(this).position().left;
            $(this)
              .parent()
              .find("figure")
              .last()
              .css("width", position + "px");
            resetSlider($(this));
          });
      });
    }
    var grid = document.querySelector(".arrows");
    if ($(".spread").length && visible($(".spread"))) {
      $(".spread").find(".middle").addClass("bounce-in-1");
      $(".spread").find(".l1").addClass("bounce-in-2");
      $(".spread").find(".r1").addClass("bounce-in-2");
      $(".spread").find(".l2").addClass("bounce-in-3");
      $(".spread").find(".r2").addClass("bounce-in-3");
      // setTimeout(function () {
      //   $(".spread").find(".middle").addClass("bounce-in-1");
      //   $(".spread").find(".l1").addClass("bounce-in-2");
      //   $(".spread").find(".r1").addClass("bounce-in-2");
      //   $(".spread").find(".l2").addClass("bounce-in-3");
      //   $(".spread").find(".r2").addClass("bounce-in-3");
      // }, 500);
    }

    $(".lazy-fade-1").each(function () {
      if (visible($(this))) {
        $(this).css("opacity", "1");
        var el = $(this);
        el.removeClass("lazy-fade-1");
        el.addClass("fade-in-1");
      }
    });
    $(".lazy-fade-2").each(function () {
      if (visible($(this))) {
        var el = $(this);
        setTimeout(function () {
          el.removeClass("lazy-fade-2");
          el.addClass("fade-in-1");
        }, 300);
      }
    });
    $(".lazy-fade-3").each(function () {
      if (visible($(this))) {
        var el = $(this);
        setTimeout(function () {
          el.removeClass("lazy-fade-3");
          el.addClass("fade-in-1");
        }, 700);
      }
    });
    $(".lazy-fade-bounce-1").each(function () {
      if (visible($(this))) {
        var el = $(this);
        el.removeClass("lazy-fade-bounce-1");
        el.addClass("fade-bounce-1");
      }
    });
    $(".lazy-fade-bounce-2").each(function () {
      if (visible($(this))) {
        var el = $(this);
        setTimeout(function () {
          el.removeClass("lazy-fade-bounce-2");
          el.addClass("fade-bounce-1");
        }, 500);
      }
    });
    $(".lazy-fade-bounce-3").each(function () {
      if (visible($(this))) {
        var el = $(this);
        setTimeout(function () {
          el.removeClass("lazy-fade-bounce-3");
          el.addClass("fade-bounce-1");
        }, 700);
      }
    });
    $(document).on("scroll", function () {
      if ($(".spread").length && visible($(".spread"))) {
        setTimeout(function () {
          $(".spread").find(".middle").addClass("bounce-in-1");
          $(".spread").find(".l1").addClass("bounce-in-2");
          $(".spread").find(".r1").addClass("bounce-in-2");
          $(".spread").find(".l2").addClass("bounce-in-3");
          $(".spread").find(".r2").addClass("bounce-in-3");
        }, 1000);
      }
      $(".lazy-fade-1").each(function () {
        if (visible($(this))) {
          $(this).removeClass("lazy-fade-1");
          $(this).addClass("fade-in-1");
        }
      });
      $(".lazy-fade-2").each(function () {
        if (visible($(this))) {
          var el = $(this);
          setTimeout(function () {
            el.removeClass("lazy-fade-2");
            el.addClass("fade-in-1");
          }, 300);
        }
      });
      $(".lazy-fade-3").each(function () {
        if (visible($(this))) {
          var el = $(this);
          setTimeout(function () {
            el.removeClass("lazy-fade-3");
            el.addClass("fade-in-1");
          }, 700);
        }
      });
      $(".lazy-fade-bounce-1").each(function () {
        if (visible($(this))) {
          var el = $(this);
          el.removeClass("lazy-fade-bounce-1");
          el.addClass("fade-bounce-1");
        }
      });
      $(".lazy-fade-bounce-2").each(function () {
        if (visible($(this))) {
          var el = $(this);
          setTimeout(function () {
            el.removeClass("lazy-fade-bounce-2");
            el.addClass("fade-bounce-1");
          }, 500);
        }
      });
      $(".lazy-fade-bounce-3").each(function () {
        if (visible($(this))) {
          var el = $(this);
          setTimeout(function () {
            el.removeClass("lazy-fade-bounce-3");
            el.addClass("fade-bounce-1");
          }, 700);
        }
      });
    });
    // console.log(grid.length);
    // if (grid) {
    //   console.log("test");
    //   var msnry = new Masonry(grid, {
    //     // options...
    //     itemSelector: ".wp-block-image",
    //     columnWidth: 280,
    //   });
    // }
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
