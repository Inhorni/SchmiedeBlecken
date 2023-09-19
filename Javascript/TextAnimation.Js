
  // Wait for the page to fully load
  window.addEventListener('load', function () {
    // Add a class to trigger the animation for "Schmiede Blecken"
    const centeredText = document.querySelector('.centered');
    centeredText.classList.add('animate');

    // Add a class to trigger the animation for the text below
    const centeredTextDown = document.querySelector('.centered-Textdown');
    centeredTextDown.classList.add('animate');
  });

