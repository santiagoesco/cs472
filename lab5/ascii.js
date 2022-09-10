/*Event handlers assign*/
document.getElementById("animation").onchange = animationSelect;
document.getElementById("fontsize").onchange=fontSizeChange;
document.getElementById("start").onclick = btnStartAnimation;
document.getElementById("stop").onclick = btnStop;
document.getElementById("turbo").onclick=speedUpTurbo;

/*Scope variables for accesing*/
let intervalIdentifier;
let animationsArr = [];
let speed = 250;
let animationSelected = "Blank";


function speedUpTurbo(){

  if (this.checked === true){
      clearInterval(intervalIdentifier);
      speed = 50;
      btnStartAnimation();
  }else{
      clearInterval(intervalIdentifier);
      speed = 250;
      btnStartAnimation();
  }
}

function fontSizeChange(){
const fontSize=this.value;
const textArea = document.getElementById("text-area");
textArea.style.fontSize = fontSize;

}

function animationSelect() {
  btnStop();
  animationSelected = this.value;
  const textArea = document.getElementById("text-area");
  //alert(animationSelected);
  if (animationSelected != "Blank") {
    // alert(animationSelected);
    animationsArr = ANIMATIONS[animationSelected].split("=====\n");
    textArea.textContent = animationsArr[0];
  }
}

function btnStartAnimation() {
  //alert('Hello!');
  //alert(animationSelected);
  animationsArr = ANIMATIONS[animationSelected].split("=====\n"); //Populate the animation array

  enableButtons("start");
  const textArea = document.getElementById("text-area");

  let i = 0;
  intervalIdentifier = setInterval(function () {
   

    textArea.textContent = animationsArr[i];
    i++;
     if(animationsArr.length==(i)){
      i=0;
    }
  }, speed);
}

function btnStop() {
  enableButtons("stop");
  clearInterval(intervalIdentifier);
}

function enableButtons(buttonClicked) {
  const stop = document.getElementById("stop");
  const start = document.getElementById("start");

  if (buttonClicked == "start") {
    stop.disabled = false;
    start.disabled = true;
  }
  if (buttonClicked == "stop") {
    stop.disabled = true;
    start.disabled = false;
  }
}
