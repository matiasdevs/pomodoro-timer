import Controls from './controls.js'
import Timer from './timer.js'
import {elements} from './elements.js'
import Sound from './sound.js'

const {  
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSomOn,
  buttonSomOff,
  minutosDisplay,
  segundosDisplay} = elements

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet
})

const timer = Timer({
  minutosDisplay,
  segundosDisplay,
  resetControls: controls.reset,
})

const sound = Sound();

buttonPlay.addEventListener('click', function(){
  controls.play();
  timer.countdown();
  sound.pressButton();

});

buttonPause.addEventListener('click', function(){
  controls.pause();
  timer.pause();
  sound.pressButton();
});

buttonStop.addEventListener('click', function(){
  controls.reset();
  timer.reset();
  sound.pressButton();
});

buttonSet.addEventListener('click', function(){
  let newMinutes = controls.getMinutes();
  if(!newMinutes){
    timer.reset();
    return
  }
    timer.updateTimer(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})

buttonSomOn.addEventListener('click', function(){
  buttonSomOn.classList.add('hide');
  buttonSomOff.classList.remove('hide');
  sound.bgAudio.play()
});

buttonSomOff.addEventListener('click', function(){
  buttonSomOn.classList.remove('hide');
  buttonSomOff.classList.add('hide');
  sound.bgAudio.pause()
});


