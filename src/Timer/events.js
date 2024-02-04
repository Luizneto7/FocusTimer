import states from "./states.js";
import { controls } from "./elements.js";
import * as actions from "./actions.js"
import * as elements from "./elements.js"
import { updateDisplay } from "./timer.js";

export function registerControls () {
    controls.addEventListener("click", event => {
        const action = event.target.dataset.action

        if(action === undefined){
            return
        }

        actions[action] ()
    })
}

export function setMinutes () {
    elements.minutes.addEventListener("focus", () =>{
        elements.minutes.textContent = ""
    })

    elements.minutes.onkeypress = event => /\d/.test(event.key)

    elements.minutes.addEventListener("blur", event => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        states.minutes = time
        states.seconds = 0

        updateDisplay()
        elements.minutes.removeAttribute("contenteditable")
    })
}