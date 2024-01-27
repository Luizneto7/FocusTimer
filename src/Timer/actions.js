import state from './state.js'
import * as timer from "./timer.js"

export function toggleRunning () {
    state.isRunning = document.documentElement.classList.toggle("running")
    timer.countdown()
}

export function set () {
    console.log("Função ainda não implementada")
}

export function reset () {
    state.isRunning = false
    document.documentElement.classList.remove("running")
    timer.updateDisplay()
}

export function toggleMusic () {
    state.isMuted = document.documentElement.classList.toggle("music-on")
}