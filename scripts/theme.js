let toggleButton = document.getElementById("theme-toggle");
let body = document.body;

let darkMode = localStorage.getItem("darkMode");
if (darkMode === "active") {
    body.classList.add("dark-mode");
}

const enableDarkMode = () => {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "active");
    darkMode = "active";
}

const disableDarkMode = () => {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "inactive");
    darkMode = "inactive";
}

toggleButton.addEventListener("click", () => {
    darkMode !== "active" ? enableDarkMode() : disableDarkMode();
})