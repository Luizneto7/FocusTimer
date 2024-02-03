let darkMode = true
export const toggleButton = document.getElementById("toggle-mode")

toggleButton.addEventListener("click", event => {
    document.documentElement.classList.toggle("light")

    const mode = darkMode ? "light" : "dark"
    event.currentTarget.querySelector("span").textContent = `Ativar ${mode} mode`

    darkMode = !darkMode
})