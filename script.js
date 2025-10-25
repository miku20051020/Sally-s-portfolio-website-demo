// Handles smooth in-page navigation, header state transitions, and footer metadata.
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const header = document.querySelector(".page-header");
  const toggleHeaderState = () => {
    if (!header) return;
    const isSolid = window.scrollY > 12;
    header.classList.toggle("is-solid", isSolid);
  };

  toggleHeaderState();
  window.addEventListener("scroll", toggleHeaderState, { passive: true });

  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
