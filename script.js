// Theme toggle
const themeToggle = document.getElementById("themeToggle");

// load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light");
  themeToggle.textContent = "☀️";
} else {
  themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "🌙";
  }
});

// Fade-up animation on scroll
const faders = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

faders.forEach((el) => observer.observe(el));
// ===== Minecraft Skin Viewer =====
window.addEventListener("load", () => {
  const canvas = document.getElementById("skin-viewer");
  if (!canvas) return;

  const viewer = new skinview3d.SkinViewer({
    canvas: canvas,
    width: 240,
    height: 320
  });

  // Load skin + cape from your repo
  viewer.loadSkin("assets/skin.png");
  viewer.loadCape("assets/cape.png");

  // Controls like Skindex
  viewer.controls.enableRotate = true;
  viewer.controls.enableZoom = true;
  viewer.controls.enablePan = false;

  // Smooth idle rotation
  viewer.animations.add(skinview3d.RotationAnimation);
});


