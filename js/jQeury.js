(function () {
  $.fn.menuBar = function () {
    this.each(function (index) {
      var $menuBar = null,
        $menuList = null,
        $menuSelect = null;

      function init(el) {
        $menuBar = $(el);
        $menuList = $menuBar.find("li");
      }
      function event() {
        $menuList.on("click", function () {
          if ($menuSelect) $menuSelect.removeClass("active");
          $menuList.removeClass("active");
          $menuSelect = $(this);
          $menuSelect.addClass("active");
          $menuSelect
            .parent("ul")
            .next()
            .children()
            .eq($(this).index())
            .show()
            .siblings()
            .hide();
        });
      }
      init($(this));
      event();
    });
    return this;
  };
})(jQuery);
