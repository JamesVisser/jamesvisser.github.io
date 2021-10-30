var positionX = 0; 
var positionY = 0;
var velocity = 17;
var reverse = false;
var ghost = document.getElementById("ghost");


function moveGhost() {
 /* javascript for moving the ghost object*/
  var Xmin = 0;
  var Xmax = 900;

 
    if (reverse) {
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    ghost.style.left = positionX + "px";
    ghost.style.top = positionY + "px";
    
  } else {
    positionX = positionX + velocity;
    positionY = positionY + velocity;
    ghost.style.top = positionX + "px";
    ghost.style.left = positionY + "px";
  }

  if (
    positionX > Xmax ||
    positionX === Xmin ||
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;}
    
}

setInterval(moveGhost, 300);