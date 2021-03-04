var logo = document.getElementById('logo');

logo.addEventListener('mouseenter', changeDefOver);
logo.addEventListener('mouseleave', changeDefOut);

function changeDefOver(e) {
    console.log("mouseenter");
  Array.prototype.slice.call(logo.getElementsByTagName("*")).forEach(element => {
      element.classList.toggle('highligted');
  });
  //console.log("wuzzah!");
}

function changeDefOut(e) {
    console.log("mouseleave");
    Array.prototype.slice.call(logo.getElementsByTagName("*")).forEach(element => {
        element.classList.toggle('highligted');
    });
}