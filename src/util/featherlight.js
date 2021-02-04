import $ from "jquery";
import "featherlight";
export default () => {
  if($('.modals').length) {
    console.log('asdf');
    var modal = $('<div></div>').addClass('modal-multi')
    $('.modal').each(function(){
      console.log($(this));
      modal.append($(this));
    });
    console.log(modal);
    $.featherlight(modal);
  }
  $(".feather").on("click", function (e) {
    $.featherlight($(this));
  });
  $(".resources a").on("click", function (e) {
    e.preventDefault();
    $.featherlight($(".modal"));
  });
  $(".delete").on("click", function (e) {
    e.preventDefault();
    $.featherlight($(this).next());
  });
  $(".modal-link").on("click", function (e) {
    $.featherlight($(this).parent().next());
  });
};
