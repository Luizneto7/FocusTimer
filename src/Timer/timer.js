import states from "./states.js";
import * as elements from "./elements.js"
import { reset } from "./actions.js";
import * as sounds from "./sounds.js"

export function countdown () {
    clearTimeout(states.timeoutId)

    if(!states.isRunning){
        return
    }

    let minutes = elements.minutes.textContent
    let seconds = elements.seconds.textContent

    seconds--

    if(seconds < 0) {
        seconds = 59
        minutes--
    }

    if(minutes < 0){
        reset()
        sounds.kichenTimerSound.play()
        return
    }

    updateDisplay(minutes, seconds)

    states.timeoutId = setTimeout(() => countdown(), 1000)
}

export function updateDisplay (minutes, seconds) {
    minutes = minutes ?? states.minutes
    seconds = seconds ?? states.seconds

    elements.minutes.textContent = String(minutes).padStart(2, "0")
    elements.seconds.textContent = String(seconds).padStart(2, "0")
}