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

const achievementGallery = document.querySelector(".achievement-gallery");
const achievementLightbox = document.querySelector(".achievement-lightbox");

if (achievementGallery && achievementLightbox) {
  const photos = Array.from(achievementGallery.querySelectorAll(".achievement-photo"));
  const lightboxImage = achievementLightbox.querySelector(".achievement-lightbox-image");
  let activePhotoIndex = 0;

  const showPhoto = (index) => {
    activePhotoIndex = (index + photos.length) % photos.length;
    const image = photos[activePhotoIndex].querySelector("img");

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    if (!achievementLightbox.open) achievementLightbox.showModal();
  };

  achievementGallery.addEventListener("click", (event) => {
    const photo = event.target.closest(".achievement-photo");
    if (photo) showPhoto(photos.indexOf(photo));
  });

  achievementLightbox.querySelector("[data-lightbox-close]").addEventListener("click", () => {
    achievementLightbox.close();
  });
  achievementLightbox.querySelector("[data-lightbox-previous]").addEventListener("click", () => {
    showPhoto(activePhotoIndex - 1);
  });
  achievementLightbox.querySelector("[data-lightbox-next]").addEventListener("click", () => {
    showPhoto(activePhotoIndex + 1);
  });
  achievementLightbox.addEventListener("click", (event) => {
    if (event.target === achievementLightbox) achievementLightbox.close();
  });
}
