export default function Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet
}) {
  function play(){
    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide');
    buttonStop.classList.remove('hide');
    buttonSet.classList.add('hide');
} 
  function pause(){
    buttonPause.classList.add('hide');
    buttonPlay.classList.remove('hide');
} 
  function reset(){
    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');
    buttonStop.classList.toggle('hide');
    buttonSet.classList.toggle('hide');
  }
  function getMinutes(){
    let newMinutes = prompt('Digite quantos minutos:')
    if (!newMinutes){
      return false;
    } 
    return newMinutes
  }

  return {  
      reset,
      play,
      pause,
      getMinutes
    }
}