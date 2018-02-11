var menu = document.querySelector('.combat-container-2');
var fight = document.querySelector('.combat-fight-container');
var arrow = document.querySelector('.arrow');
var combatArrow = document.querySelector('.combat-arrow');
var memo = 0


window.addEventListener('keyup', function(event){
  if (event.keyCode === 40) {
    arrow.style.top = "10rem";
    combatArrow.style.top = "10rem";
    memo = 1;
  }
  if (event.keyCode === 39 && memo === 0) {
    arrow.style.left = "12rem";
    combatArrow.style.left = "10rem";
  }

  if (event.keyCode === 39 && memo === 1) {
    arrow.style.left = "14rem";
    combatArrow.style.left = "12.5rem";
  }

  if (event.keyCode === 38) {
    arrow.style.top = "";
    combatArrow.style.top = "";
    memo = 0
  }
  if (event.keyCode === 37) {
    arrow.style.left = "";
    combatArrow.style.left = "";
  }
  if (arrow.style.top === "" && arrow.style.left === "" && event.keyCode === 13) {
    menu.style.display = "none";
    fight.style.display = "flex";
  }
  if (event.keyCode === 8) {
    fight.style.display = "";
    menu.style.display = "";
  }
});
