(function ($) {
  $(document).ready(function () {
    setupFade();
    setupClickToScroll();
    setupPostAnimation();
    setupScrollToTop();
    enableScrollAbortion();

    $(window).scroll();
  });

  function enableScrollAbortion() {
    var $viewport = $("html, body");
    $viewport.on("scroll mousedown DOMMouseScroll mousewheel keyup", function (
      e
    ) {
      if (e.which > 0 || e.type === "mousedown" || e.type === "mousewheel") {
        $viewport.stop();
      }
    });
  }

  function setupScrollToTop() {
    var scrollSpeed = 750;
    $(".trigger-scroll-to-top").click(function (e) {
      e.preventDefault();

      var post = $("#timeline .post-wrapper .timeline-post").first(),
        postTopOffset = post.offset().top,
        postHeight = post.height(),
        halfScreen = $(window).height() / 2,
        scrollTo = postTopOffset - halfScreen + postHeight / 2;

      $("html, body").animate(
        {
          scrollTop: scrollTo,
        },
        scrollSpeed
      );
    });
  }

  function setupPostAnimation() {
    var posts = $("#timeline .post-wrapper .timeline-post");
    $(window).on("scroll resize", function () {
      var currScroll =
          $(window).scrollTop() > $(document).scrollTop()
            ? $(window).scrollTop()
            : $(document).scrollTop(),
        windowHeight = $(window).height(),
        overScroll = Math.ceil(windowHeight * 0.2),
        treshhold = currScroll + windowHeight - overScroll;

      posts.each(function () {
        var post = $(this),
          postScroll = post.offset().top;

        if (postScroll > treshhold) {
          post.addClass("post-hidden");
        } else {
          post.removeClass("post-hidden");
        }
      });
    });
  }

  function setupFade() {
    var posts = $("#timeline .post-wrapper .timeline-post").reverse(),
      stemWrapper = $("#timeline .stem-wrapper"),
      halfScreen = $(window).height() / 2;

    $(window).on("scroll resize", function () {
      delay(function () {
        var currScroll =
            $(window).scrollTop() > $(document).scrollTop()
              ? $(window).scrollTop()
              : $(document).scrollTop(),
          scrollSplit = currScroll + halfScreen;

        posts.removeClass("post-active").each(function () {
          var post = $(this),
            postOffset = post.offset().top;

          if (scrollSplit > postOffset) {
            stemWrapper.show();

            post.addClass("post-active");

            var color = post.data("stem-color")
                ? post.data("stem-color")
                : null,
              allColors =
                "color-green color-yellow color-white color-purple color-pink color-red color-blue color-grey color-black";

            stemWrapper.removeClass(allColors);

            if (color !== null) {
              stemWrapper.addClass("color-" + color);
            }

            return false;
          } else {
            stemWrapper.hide();
          }
        });
      }, 20);
    });
  }

  function setupClickToScroll(post) {
    var scrollSpeed = 750;

    $("#timeline .post-wrapper .timeline-post .stem-overlay .icon").click(
      function (e) {
        e.preventDefault();

        var icon = $(this),
          post = icon.closest(".timeline-post"),
          postTopOffset = post.offset().top,
          postHeight = post.height(),
          halfScreen = $(window).height() / 2,
          scrollTo = postTopOffset - halfScreen + postHeight / 2;

        $("html, body").animate(
          {
            scrollTop: scrollTo,
          },
          scrollSpeed
        );
      }
    );
  }
})(jQuery);

/*==========  Helpers  ==========*/

// Timeout function
var delay = (function () {
  var timer = 0;
  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

$.fn.reverse = function () {
  return this.pushStack(this.get().reverse(), arguments);
};
