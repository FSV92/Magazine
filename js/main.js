$(document).ready(function () {
  // Выпадающие меню
  var sectionsButton = $(".header-top__button");
  var dropdown = $(".header__dropdown");
  var mobile = $(".header__mobile");

  sectionsButton.on("click", function (evt) {
    if ($(window).height() < $(window).width()) {
      mobile.toggleClass("header__mobile--visible");
      $("body").toggleClass("lock-scroll");
      dropdown.removeClass("header__dropdown--visible");
    } else if (($(window).width() < 769)) {
      mobile.toggleClass("header__mobile--visible");
      $("body").toggleClass("lock-scroll");
      dropdown.removeClass("header__dropdown--visible");
    } else {
      dropdown.toggleClass("header__dropdown--visible");
    }
  });

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

  // Флажок
  var flag = $(".flag");
  flag.on("click", function (evt) {
    $(this).toggleClass("flag-select");
  });

  // Слайдеры
  var usefulSlider = new Swiper('.useful-swiper', {
    // Optional parameters
    loop: true,
    autoplay: {
      delay: 3000,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    keyboard: {
      enabled: true,
    }
  });

  var articleSlider = new Swiper('.article-swiper', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".article-slider__button--next",
      prevEl: ".article-slider__button--prev",
    },
    keyboard: {
      enabled: true,
    }
  });

  //Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        email: {
          required: "Email required",
          email: "Format 'name@domain.com'",
        },
        message: {
          required: "Must not be empty",
          minlength: "Minimum of 100 numbers",
        },
      },
    });
  });

  // Показать комментарии
  var loadButton = $(".comments__load-button");
  var commentHidden = $(".comments__comment--hidden")
  loadButton.on("click", function (evt) {
    $(this).addClass("comments__load-button--hidden");
    commentHidden.removeClass("comments__comment--hidden");
  });
});