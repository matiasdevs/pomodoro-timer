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


function countdown(){
    timerTimeout = setTimeout(function(){
    let segundos =  Number(segundosDisplay.innerText);
    let minutos = Number(minutosDisplay.innerText);

    updateTimer(minutos, 0);

    if(minutos <= 0 && segundos <= 0){
      stoptime();
      return;
    }

    if(segundos <= 0) {
      segundos = 60;
      --minutos;
    } updateTimer(minutos, String(segundos - 1))

    countdown();
  }, 1000) 
}

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

function stoptime(){
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  buttonStop.classList.toggle('hide');
  buttonSet.classList.toggle('hide')
  
}

function somOnOff(){
  buttonSomOn.classList.toggle('hide');
  buttonSomOff.classList.toggle('hide');
}

function inputTempo(){
  minutos = prompt('Digite a quantidade de minutos: ') || 0
  updateTimer(minutos, 0)
}

function updateTimer(minutos, segundos){
  minutosDisplay.innerText = String(minutos).padStart(2, '0'); 
  segundosDisplay.innerText = String(segundos).padStart(2, '0'); 
}

function resetTimer(){
  updateTimer(minutos, 0);
  clearTimeout(timerTimeout)
}