import states from "./states.js"
import * as timer from "./timer.js"
import * as elements from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning () {
    states.isRunning = document.documentElement.classList.toggle("running")
    timer.countdown()
    sounds.buttonPressSound.play()
}

export function set () {
    elements.minutes.setAttribute("contenteditable", true)
    elements.minutes.focus()
    sounds.buttonPressSound.play()
}

export function reset () {
    states.isRunning = false
    document.documentElement.classList.remove("running")
    timer.updateDisplay()
    sounds.buttonPressSound.play()
}

export function toggleMusic () {
    states.isMuted = document.documentElement.classList.toggle("music-on")
    if(states.isMuted){
        sounds.bgAudioSound.play()
        return
    }

    sounds.bgAudioSound.pause()
}