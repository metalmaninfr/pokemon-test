var menu = document.querySelector('.combat-container-2');
var fight = document.querySelector('.combat-fight-container');
var arrow = document.querySelector('.arrow');
var combatArrow = document.querySelector('.combat-arrow');
var memo = 0
var combatmemo = 0


window.addEventListener('keyup', function(event){
  if (event.keyCode === 40) {
    arrow.style.top = "10rem";
    combatArrow.style.top = "4.9rem";
    combatmemo++
    memo = 1;
  }
  if (event.keyCode === 40 && combatmemo === 2) {
    combatArrow.style.top = "8rem";
  }
  if (event.keyCode === 40 && combatmemo === 3) {
    combatArrow.style.top = "11.2rem";
  }

  if (event.keyCode === 39 && memo === 0) {
    arrow.style.left = "12rem";
  }

  if (event.keyCode === 39 && memo === 1) {
    arrow.style.left = "14rem";
  }

  if (event.keyCode === 38) {
    arrow.style.top = "";
    memo = 0;
  }
  if (event.keyCode === 37) {
    arrow.style.left = "";
  }
  if (arrow.style.top === "" && arrow.style.left === "" && event.keyCode === 13) {
    menu.style.display = "none";
    fight.style.display = "block";
    combatArrow.style.top = "";
    combatmemo = 0;
  }
  if (event.keyCode === 8) {
    fight.style.display = "";
    menu.style.display = "";
    arrow.style.top = "";
    memo = 0;
  }
});
