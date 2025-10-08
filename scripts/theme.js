const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

let darkMode = localStorage.getItem("darkMode") || "inactive";

if (darkMode === "active") {
    body.classList.add("dark-mode");
}

const setDarkMode = (isActive) => {
    body.classList.toggle("dark-mode", isActive);
    localStorage.setItem("darkMode", isActive ? "active" : "inactive");
    darkMode = isActive ? "active" : "inactive";
}

toggleButton.addEventListener("click", () => {
    setDarkMode(darkMode !== "active");
})