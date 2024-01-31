import * as timer from "./timer.js"
import states from "./states.js"
import * as elements from "./elements.js"

export function toggleRunning () {
    states.isRunning = document.documentElement.classList.toggle("running")
    timer.countdown()
}

export function set () {
    elements.minutes.setAttribute("contenteditable", true)
    elements.minutes.focus()
}

export function reset () {
    states.isRunning = false
    document.documentElement.classList.remove("running")
    timer.updateDisplay()
}

export function toggleMusic () {
    states.isMuted = document.documentElement.classList.toggle("music-on")
}