import Sounds from './sound.js'

export default function Timer({
  minutosDisplay,
  segundosDisplay,
  resetControls,
}) {

  let timerTimeout;
  let minutos = Number(minutosDisplay.innerText);

  function updateTimer(newMinutes, segundos){
    newMinutes = newMinutes === undefined ? minutos : newMinutes;
    segundos = segundos === undefined ? 0 : segundos;
    minutosDisplay.innerText = String(newMinutes).padStart(2, '0'); 
    segundosDisplay.innerText = String(segundos).padStart(2, '0'); 
  }
  function reset(){
    updateTimer(minutos, 0);
    clearTimeout(timerTimeout)
  }
  function countdown(){
      timerTimeout = setTimeout(function(){
      let segundos =  Number(segundosDisplay.innerText);
      let minutos = Number(minutosDisplay.innerText);
      let fimTempo = minutos <= 0 && segundos <= 0;
  
      updateTimer(minutos, 0);
  
      if(fimTempo){
        resetControls();
        updateTimer();
        Sounds().timeEnd()
        return;
      }
  
      if(segundos <= 0) {
        segundos = 60;
        --minutos;
      } updateTimer(minutos, String(segundos - 1))
  
      countdown();
    }, 1000) 
  }
  function updateMinutes(newMinutes){
    minutos = newMinutes
  }

  function pause(){
    clearTimeout(timerTimeout)
  }
  return {
    countdown,
    updateTimer,
    resetControls,
    reset,
    updateMinutes,
    pause
  }
}

