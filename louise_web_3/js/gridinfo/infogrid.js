$(function () {
  var $el, $parentWrap, $otherWrap, $allTitles = $("dt").css({
      padding: 5,
      "cursor": "pointer"
    }),
    $allCells = $("dd").css({
      position: "relative",
      top: -1,
      left: 0,
      display: "none"
    });
  $("#page-wrap").delegate("a.image", "click", function (e) {
    if (!$(this).parent().hasClass("curCol")) {
      e.preventDefault();0
      $(this).next().find('dt:first').click();
    }
  });
  $("#page-wrap").delegate("dt", "click", function () {
    $el = $(this);
    if (!$el.hasClass("current")) {
      $parentWrap = $el.parent().parent();
      $otherWrap = $(".info-col").not($parentWrap);
      $allTitles = $("dt").not(this);
      $allCells.slideUp();
      $allTitles.animate({
        fontSize: "15px",
        
      });
      $el.animate({
        "font-size": "20px",}).next().slideDown();
      $parentWrap.animate({
        width: '40%'
      }).addClass("curCol");
      $otherWrap.animate({
        width: '15%'
      }).removeClass("curCol");
      $allTitles.removeClass("current");
      $el.addClass("current");
    }
  });
  $("#starter").trigger("click");
});
