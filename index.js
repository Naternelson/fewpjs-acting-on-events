// Your code here
let dodger = document.getElementById("dodger"); 

function parseStyle(style){
    return parseInt(style.replace("px", ""), 10);
}

function moveDodgerLeft() {
    let left = parseStyle(dodger.style.left);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
} 
function moveDodgerRight() {
    let right = parseStyle(dodger.style.left);

    dodger.style.left = `${right + 1}px`;
} 

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
      }
  }); 