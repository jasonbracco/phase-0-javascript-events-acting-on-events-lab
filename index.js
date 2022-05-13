//Grab Dodger

const dodger = document.getElementById("dodger");
//Move Left

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
})

//Move Right

function moveDodgerRight(){ 
        const rightNumbers = dodger.style.left.replace("px", ""); 
        const left = parseInt(rightNumbers,10); 
        if (left<360){
            dodger.style.left=`${left+1}px`;
       }
    }


document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
})

function moveDodgerUp(){
    const topNumbers = dodger.style.bottom.replace("px", "")
    const bottom = parseInt(topNumbers, 10)
    if(bottom<380){
        dodger.style.bottom = `${bottom+1}px`
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
        moveDodgerUp()
    }
})

function moveDodgerDown(){
    const bottomNumbers = dodger.style.bottom.replace("px", "")
    const bottom = parseInt(bottomNumbers, 10)
    if (bottom>0){
        dodger.style.bottom = `${bottom-1}px`
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") {
        moveDodgerDown()
    }
})