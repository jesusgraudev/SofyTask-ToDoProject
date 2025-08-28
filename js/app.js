const darkModeButton = document.getElementById("darkModeButton")
const body = document.body

darkModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode")
    darkModeButton.textContent = body.classList.contains("dark-mode") ? "☀️ Modo Claro" : "🌙 Modo Oscuro"
})