var logo = document.getElementById('logo');

logo.addEventListener('mouseenter', changeDefOver);
logo.addEventListener('mouseleave', changeDefOut);

function changeDefOver(e) {
  Array.prototype.slice.call(logo.getElementsByTagName("*")).forEach(element => {
      element.classList.toggle('highligted');
  });
  //console.log("wuzzah!");
}

function changeDefOut(e) {
    Array.prototype.slice.call(logo.getElementsByTagName("*")).forEach(element => {
        element.classList.toggle('highligted');
    });
}