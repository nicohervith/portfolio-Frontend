// Gallery functionality
let currentImageIndex = 0;
let currentProjectImages = [];

function openGallery(projectName, images) {
  currentProjectImages = images;
  currentImageIndex = 0;

  const modal = document.getElementById("galleryModal");
  const galleryImage = document.getElementById("galleryImage");
  const galleryTitle = document.getElementById("galleryTitle");
  const imageCounter = document.getElementById("imageCounter");

  galleryImage.src = images[0];
  galleryTitle.textContent = projectName;
  imageCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;

  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeGallery() {
  const modal = document.getElementById("galleryModal");
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
  currentProjectImages = [];
  currentImageIndex = 0;
}

function nextImage() {
  if (currentProjectImages.length === 0) return;
  currentImageIndex = (currentImageIndex + 1) % currentProjectImages.length;
  updateGalleryImage();
}

function previousImage() {
  if (currentProjectImages.length === 0) return;
  currentImageIndex =
    (currentImageIndex - 1 + currentProjectImages.length) %
    currentProjectImages.length;
  updateGalleryImage();
}

function updateGalleryImage() {
  const galleryImage = document.getElementById("galleryImage");
  const imageCounter = document.getElementById("imageCounter");

  galleryImage.src = currentProjectImages[currentImageIndex];
  imageCounter.textContent = `${currentImageIndex + 1} / ${currentProjectImages.length}`;
}

// Close gallery with ESC key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeGallery();
  }
  if (event.key === "ArrowRight") {
    nextImage();
  }
  if (event.key === "ArrowLeft") {
    previousImage();
  }
});

// Close gallery when clicking outside the content
document.addEventListener("click", function (event) {
  const modal = document.getElementById("galleryModal");
  if (event.target === modal) {
    closeGallery();
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    const target = document.querySelector(href);

    if (href !== "#" && target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Cerrar navbar si está en mobile
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse.classList.contains("show")) {
        document.querySelector(".navbar-toggler").click();
      }
    }
  });
});

// Add animation to elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".card, .contact-box").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "all 0.6s ease-out";
  observer.observe(el);
});
