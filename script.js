gsap.registerPlugin(ScrollTrigger);

/* HERO */
gsap.from(".hero-text h1", {
  opacity: 0,
  y: 60,
  duration: 1.5
});

gsap.from(".hero-text h2", {
  opacity: 0,
  y: 30,
  delay: 0.6,
  duration: 1
});

/* SECTIONS */
gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section.querySelector(".container"), {
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    },
    opacity: 0,
    y: 80,
    duration: 1.2
  });
});

/* CUSTOM CURSOR */
const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.querySelectorAll("img").forEach(img => {
  img.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1.25)";
  });
  img.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
  });
});
