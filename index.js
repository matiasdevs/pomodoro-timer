import Controls from './controls.js'
import Timer from './timer.js'

let buttonPlay = document.querySelector('.play')
let buttonPause = document.querySelector('.pause');
let buttonStop = document.querySelector('.stop')
let buttonSet = document.querySelector('.set')
let buttonSomOn = document.querySelector('.som-on');
let buttonSomOff = document.querySelector('.som-off');
let minutosDisplay = document.querySelector('.minutos')
let segundosDisplay = document.querySelector('.segundos')
let minutos = Number(minutosDisplay.innerText);
let timerTimeout;

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet
})

const timer = Timer({
  minutosDisplay,
  segundosDisplay,
  timerTimeout,
  resetControls: controls.reset,
  minutos
})

buttonPlay.addEventListener('click', function(){
  controls.play();
  timer.countdown();
});

buttonPause.addEventListener('click', function(){
  controls.pause();
  clearTimeout(timerTimeout);
});

buttonStop.addEventListener('click', function(){
  controls.reset();
  timer.reset();
});

buttonSet.addEventListener('click', function(){
  let newMinutes = controls.getMinutes();
  if(!newMinutes){
    timer.reset();
    return
  }
    minutos = newMinutes;
    timer.updateTimer(minutos, 0)
    timer.updateMinutes(minutos)
})

buttonSomOn.addEventListener('click', somOnOff);
buttonSomOff.addEventListener('click', somOnOff);

function somOnOff(){
  buttonSomOn.classList.toggle('hide');
  buttonSomOff.classList.toggle('hide');
}



