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

// ===== Minecraft Skin Viewer (Walking Animation) =====
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

  // Disable controls (no rotate / no zoom)
  viewer.controls.enableRotate = false;
  viewer.controls.enableZoom = false;
  viewer.controls.enablePan = false;

  // Set camera position (nice centered view)
  viewer.camera.position.set(0, 20, 55);

  // Add walking animation
  const walk = viewer.animations.add(skinview3d.WalkingAnimation);
  walk.speed = 1; // you can set 0.5 slower, 2 faster
});



