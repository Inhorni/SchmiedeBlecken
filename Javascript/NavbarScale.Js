
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".navbar").style.padding = "10px 10px";
        document.querySelector(".navbar-brand").style.fontSize = "25px";
      } else {
        document.querySelector(".navbar").style.padding = "10px 10px";
        document.querySelector(".navbar-brand").style.fontSize = "25px";
      }
    } 

    // custom.js

$(document).ready(function () {
    var current = location.pathname;
    $('#navbarSupportedContent ul li a').each(function () {
        var $this = $(this);
        // if the current path is like this link, make it active
        if ($this.attr('href').indexOf(current) !== -1) {
            $this.parent().addClass('active');
        } else {
            $this.parent().removeClass('active');
        }
    });
});
