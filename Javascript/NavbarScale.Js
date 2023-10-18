window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var navbar = document.querySelector(".navbar");
  var navbarBrand = document.querySelector(".navbar-brand");
  
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.height = "50px"; // Ändere die Höhe der Navbar hier nach Bedarf
    navbarBrand.style.fontSize = "20px"; // Ändere die Schriftgröße hier nach Bedarf
  } else {
    navbar.style.height = "80px"; // Zurück zur ursprünglichen Höhe
    navbarBrand.style.fontSize = "25px"; // Zurück zur ursprünglichen Schriftgröße
  }
}
