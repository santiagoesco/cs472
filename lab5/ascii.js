/*Event handlers assign*/
document.getElementById("start").onclick = btnStartAnimation;
document.getElementById("stop").onclick=btnStop;

/*Scope variables for accesing*/
let intervalIdentifier;

function btnStartAnimation() {
  //alert('Hello!');
  enableButtons("start");
  const textArea = document.getElementById("text-area");

  let i = 0;
  intervalIdentifier = setInterval(function () {
    textArea.textContent = "Hello " + i;
    i++;
  }, 250);

  textArea.textContent = "Heloo";
}


function btnStop(){
    enableButtons("stop");
    clearInterval(intervalIdentifier);
}


function enableButtons(buttonClicked){
    const stop=document.getElementById("stop");
    const start=document.getElementById("start");

    if(buttonClicked=="start"){
        stop.disabled=false;
        start.disabled=true;
    }
    if(buttonClicked=="stop"){
        stop.disabled=true;
        start.disabled=false;
    }
}
