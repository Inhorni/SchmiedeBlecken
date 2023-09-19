
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".navbar").style.padding = "10px 20px";
        document.querySelector(".navbar-brand").style.fontSize = "25px";
      } else {
        document.querySelector(".navbar").style.padding = "20px 20px";
        document.querySelector(".navbar-brand").style.fontSize = "25px";
      }
    };
