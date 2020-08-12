$(document).ready(function () {
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
});