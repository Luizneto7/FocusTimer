import state from "./state.js"

export function toggleRunning () {
    state.isRunning = document.documentElement.classList.toggle("running")
}

export function set () {
    console.log("Função ainda não implementada")
}

export function reset () {
    state.isRunning = false
    document.documentElement.classList.remove("running")
}

export function toggleMusic () {
    state.isMuted = document.documentElement.classList.toggle("music-on")
}