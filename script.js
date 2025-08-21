const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

const sidebarToggle = document.getElementById("toggleSidebar");
const app = document.querySelector(".app");

sidebarToggle.addEventListener("click", () => {
  app.classList.toggle("hide-sidebar");
  sidebarToggle.textContent = app.classList.contains("hide-sidebar")
    ? "Show Sidebar"
    : "Hide Sidebar";
});
