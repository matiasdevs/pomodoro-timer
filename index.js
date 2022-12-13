import stoptime from './controls.js'
import {countdown, resetTimer} from './timer.js'

let buttonPlay = document.querySelector('.play')
let buttonPause = document.querySelector('.pause');
let buttonStop = document.querySelector('.stop')
let buttonSet = document.querySelector('.set')
let buttonSomOn = document.querySelector('.som-on');
let buttonSomOff = document.querySelector('.som-off');
let minutosDisplay = document.querySelector('.minutos')
let segundosDisplay = document.querySelector('.segundos')
let minutos = Number(minutosDisplay.innerText);
let timerTimeout

buttonPlay.addEventListener('click', play);
buttonPause.addEventListener('click', pause);
buttonSomOn.addEventListener('click', somOnOff);
buttonSomOff.addEventListener('click', somOnOff);
buttonSet.addEventListener('click', inputTempo)
buttonStop.addEventListener('click', function(){
  stoptime();
  resetTimer();
});

function play(){
      buttonPlay.classList.add('hide');
      buttonPause.classList.remove('hide');
      buttonStop.classList.remove('hide');
      buttonSet.classList.add('hide')

  countdown()
}

function pause(){
  buttonPause.classList.add('hide');
  buttonPlay.classList.remove('hide');
  clearTimeout(timerTimeout);

}

function somOnOff(){
  buttonSomOn.classList.toggle('hide');
  buttonSomOff.classList.toggle('hide');
}

function inputTempo(){
  minutos = prompt('Digite a quantidade de minutos: ') || 0
  updateTimer(minutos, 0)
}



