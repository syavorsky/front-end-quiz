$(function() {
  function benchmark(fnName, fn) {
    $("li").show();
    console.log(fnName + " start");
    var start = new Date().getTime();
    fn();
    var end = new Date().getTime();
    console.log(fnName, end - start);
  }

  function jqHide() {
    $(".even").hide();
  }

  function jqHideLi() {
    $("ul > li.even").hide();
  }

  function jqHideNth() {
    $("ul > li:nth-child(even)").hide();
  }

  function jqHideSelector() {
    $("ul > li:even").hide();
  }

  function jqCSS() {
    $("head").append("<style>.even { display: none; }</style>");
  }

  function jqCSSNth() {
    $("head").append("<style>ul > li:nth-child(even) { display: none; }</style>");
  }

  benchmark("jqHide", jqHide);
  benchmark("jqHideLi", jqHideLi);
  benchmark("jqHideNth", jqHideNth);
  benchmark("jqHideSelector", jqHideSelector);
  benchmark("jqCSS", jqCSS);
  benchmark("jqCSSNth", jqHideNth);
});
