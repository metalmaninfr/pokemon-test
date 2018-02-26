var menu = document.querySelector('.combat-container-2');
var fight = document.querySelector('.combat-fight-container');
var stats = document.querySelector('.combat-stats');
var type = document.querySelector('.combat-typeAttack');
var arrow = document.querySelector('.arrow');
var combatArrow = document.querySelector('.combat-arrow');
var eeveeHealth = document.querySelector('.eevee-health')
var memo = 0;
var combatmemo = 0;


window.addEventListener('keyup', function(event){

  // combat arrow down
  if (event.keyCode === 40 && combatmemo < 3) {
    arrow.style.top = "10rem";
    combatArrow.style.top = "4.9rem";
    type.innerHTML = 'Normal';
    combatmemo++
    memo = 1;
  }
  if (event.keyCode === 40 && combatmemo === 2) {
    combatArrow.style.top = "8rem";
    type.innerHTML = 'Electric';
  }
  if (event.keyCode === 40 && combatmemo === 3) {
    combatArrow.style.top = "11.2rem";
    type.innerHTML = 'Normal';
  }



  //combat Arrow up

  if (event.keyCode === 38 && combatmemo === 1) {
    arrow.style.top = "10rem";
    combatArrow.style.top = "";
    type.innerHTML = 'Normal';
    combatmemo = combatmemo - 1;
    memo = 1;
  }
  if (event.keyCode === 38 && combatmemo === 2) {
    combatArrow.style.top = "4.9rem";
    type.innerHTML = 'Normal';
    combatmemo = combatmemo - 1;
  }
  if (event.keyCode === 38 && combatmemo === 3) {
    combatArrow.style.top = "8rem";
    type.innerHTML = 'Electric';
    combatmemo = combatmemo - 1;
  }

  //arrow down
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
    stats.style.display = "block";
    combatArrow.style.top = "";
    type.innerHTML = 'Normal';
    combatmemo = 0;
  }
  if (event.keyCode === 8) {
    menu.style.display = "";
    fight.style.display = "";
    stats.style.display = "";
    arrow.style.top = "";
    memo = 0;
  }

  //Attack
  if (fight.style.display === "block" && menu.style.display === "none" && combatArrow.style.top === "") {
    if (event.keyCode === 13) {
      eeveeHealth.value = eeveeHealth.value - 10;
    }
  }

});
