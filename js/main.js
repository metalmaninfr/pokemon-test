var arrow = document.querySelector('.arrow');
var fight = document.querySelector('.combat-fight');
var pokemon = document.querySelector('.combat-pokemon');
var items = document.querySelector('.combat-items');
var run = document.querySelector('.combat-run');
var memo = 0


window.addEventListener('keyup', function(event){


  if (event.keyCode === 40) {
    arrow.style.top = "10rem";
    memo = 1;
  }
  if (event.keyCode === 39 && memo === 0) {
    arrow.style.left = "12rem";
  }

  if (event.keyCode === 39 && memo === 1) {
    arrow.style.left = "14rem";
  }

  if (event.keyCode === 38) {
    arrow.style.top = "";
    memo = 0
  }
  if (event.keyCode === 37) {
    arrow.style.left = "";
  }
});
