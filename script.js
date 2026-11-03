const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    navLinks.classList.toggle("is-open", !isOpen);
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      navLinks.classList.remove("is-open");
    }
  });
}

const portrait = document.querySelector(".portrait-image");
const portraitFrame = document.querySelector(".portrait-frame");

if (portrait && portraitFrame) {
  const showPortrait = () => portraitFrame.classList.add("has-image");
  const showPlaceholder = () => portraitFrame.classList.remove("has-image");

  portrait.addEventListener("load", showPortrait);
  portrait.addEventListener("error", showPlaceholder);
  if (portrait.complete && portrait.naturalWidth > 0) showPortrait();
}
