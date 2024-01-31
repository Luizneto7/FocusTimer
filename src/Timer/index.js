import states from "./states.js"
import * as timer from "./timer.js"
import * as events from "./events.js"

export function start(minutes, seconds){
    states.minutes = minutes
    states.seconds = seconds

    timer.updateDisplay()

    events.registerControls()

    events.setMinutes()
}