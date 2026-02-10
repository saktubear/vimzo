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

window.addEventListener("load", () => {
  const canvas = document.getElementById("skin-viewer");

  if (!canvas) {
    console.log("❌ skin-viewer canvas not found");
    return;
  }

  if (typeof skinview3d === "undefined") {
    console.log("❌ skinview3d not loaded");
    return;
  }

  const viewer = new skinview3d.SkinViewer({
    canvas: canvas,
    width: 240,
    height: 320
  });

  viewer.loadSkin("skin.png");

  

  viewer.controls.enableRotate = false;
  viewer.controls.enableZoom = false;
  viewer.controls.enablePan = false;

  viewer.camera.position.set(0, 20, 55);

  const walk = viewer.animations.add(skinview3d.WalkingAnimation);
  walk.speed = 1;
});
