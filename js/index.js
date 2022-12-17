import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sound.js'
import Events from './events.js'
import { elements } from './elements.js'
const {  
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
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

Events({controls, timer, sound})

