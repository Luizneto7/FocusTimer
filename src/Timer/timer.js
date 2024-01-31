import * as elements from "./elements.js"
import states from "./states.js"
import { reset } from "./actions.js"

export function countdown () {
    if(!states.isRunning){
        return
    }

    let minutes = Number(elements.minutes.textContent)
    let seconds = Number(elements.seconds.textContent)

    seconds--

    if(seconds < 0 ){
        seconds = 59
        minutes--
    }

    if(minutes < 0){
        reset()
        return
    }

    updateDisplay(minutes, seconds)

    setTimeout(() => countdown(), 1000)
}

export function updateDisplay (minutes, seconds) {
    minutes = minutes ?? states.minutes
    seconds = seconds ?? states.seconds

    elements.minutes.textContent = String(minutes).padStart(2, "0")
    elements.seconds.textContent = String(seconds).padStart(2, "0")
}