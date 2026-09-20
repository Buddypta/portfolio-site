/* ===============================================================
   Portfolio landing page — light progressive enhancement only.
   The page is fully readable with JavaScript disabled; this just
   adds a one-time reveal and a header divider on scroll.
   =============================================================== */

/* Signal that JS is available, so CSS can enable the reveal effect.
   (Without this class, all content is visible by default.) */
document.documentElement.classList.add("js");

/* Reveal sections as they enter the viewport */
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

/* Add a subtle divider under the header once you start scrolling */
const header = document.querySelector(".site-header");
const onScroll = () => {
  header.style.borderBottomColor = window.scrollY > 8 ? "var(--line)" : "transparent";
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });
