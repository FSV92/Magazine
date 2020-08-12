$(document).ready(function () {
  // Табы
  var listItem = $(".list__item");
  var contentItem = $(".content__item");
  var itemSelect = $(".item__select");

  listItem.on("click", function (evt) {
    var visibleContent = $(this).attr("data-target");
    var visibleSelect = $(this).attr("data-tab");
    listItem.removeClass("list__item--visible");
    contentItem.removeClass("content__item--visible");
    itemSelect.removeClass("item__select--visible");
    $(visibleContent).addClass("content__item--visible");
    $(this).addClass("list__item--visible");
    $(visibleSelect).addClass("item__select--visible");
  });

  // Модальные окна
  var contentButton = $(".content__button");
  var recommendationsVideo = $(".recommendations__video");
  var recommendationsOverlay = $(".recommendations__overlay");

  contentButton.on("click", function (evt) {
    var visibleVideo = $(this).attr("data-href");
    $(visibleVideo).addClass("recommendations__video--visible");
    recommendationsOverlay.addClass("recommendations__overlay--visible");
  });

  recommendationsOverlay.on("click", function (evt) {
    var visibleVideo = $(this).attr("data-href");
    recommendationsVideo.removeClass("recommendations__video--visible");
    recommendationsOverlay.removeClass("recommendations__overlay--visible");
  });
  $(this).on("keydown", function (evt) {
    if (evt.keyCode === 27) {
      recommendationsVideo.removeClass("recommendations__video--visible");
      recommendationsOverlay.removeClass("recommendations__overlay--visible");
    }
  });
});
