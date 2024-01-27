let darkMode = true
const toggleButton = document.getElementById("toggle-mode")

toggleButton.addEventListener("click", event => {{
    document.documentElement.classList.toggle("light")

    const mode = darkMode ? 'Light' : 'Dark'
    event.currentTarget.querySelector("span").textContent = `Ativar ${mode} mode`

    darkMode = !darkMode
}})