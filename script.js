gsap.registerPlugin(ScrollTrigger);

if (window.innerWidth > 768) {

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

  const cursor = document.querySelector(".custom-cursor");
  document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
}
