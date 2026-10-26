// Reveal CV blocks as they enter view. Without JavaScript or observer support,
// the page keeps its normal, fully visible layout.
(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reducedMotion.matches || !("IntersectionObserver" in window)) return;

  const selector = [
    ".topbar-inner",
    ".hero-copy",
    ".portrait-wrap",
    ".highlights-inner",
    ".section-nav",
    ".section-heading",
    ".profile-card",
    ".info-card",
    ".education-card",
    ".skill-card",
    ".project",
    ".award",
    ".footer-inner"
  ].join(", ");
  const elements = [...document.querySelectorAll(selector)];

  elements.forEach(element => {
    const siblings = [...element.parentElement.children];
    const delay = Math.min(siblings.indexOf(element), 2) * 90;
    element.style.setProperty("--reveal-delay", delay + "ms");
    element.classList.add("reveal");
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.01 });

  elements.forEach(element => observer.observe(element));
  document.documentElement.classList.add("motion-ready");

  reducedMotion.addEventListener("change", event => {
    if (!event.matches) return;
    observer.disconnect();
    document.documentElement.classList.remove("motion-ready");
  }, { once: true });
})();
