export default function Timer({
  minutosDisplay,
  segundosDisplay,
  timerTimeout,
  resetControls,
  minutos
}) {

  function updateTimer(minutos, segundos){
    minutosDisplay.innerText = String(minutos).padStart(2, '0'); 
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
  
      updateTimer(minutos, 0);
  
      if(minutos <= 0 && segundos <= 0){
        resetControls();
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
  return {
    countdown,
    updateTimer,
    resetControls,
    reset,
    updateMinutes
  }
}

