// const gallery = document.getElementById("galleryTrack");

// const leftBtn = document.querySelector(".gallery-btn.left");
// const rightBtn = document.querySelector(".gallery-btn.right");

// leftBtn.addEventListener("click", () => {
//   gallery.scrollBy({
//     left: -300,
//     behavior: "smooth"
//   });
// });

// rightBtn.addEventListener("click", () => {
//   gallery.scrollBy({
//     left: 300,
//     behavior: "smooth"
//   });
// });
console.log("JS connected");

const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

const nextBtn = document.querySelector(".lightbox-arrow.right");
const prevBtn = document.querySelector(".lightbox-arrow.left");
const closeBtn = document.querySelector(".lightbox-close");

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImage.src = img.src;
    currentIndex = index;
  });
});

// Only run if images exist
if (images.length > 0 && lightbox && lightboxImage) {

  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImage.src = img.src;
      currentIndex = index;
    });
  });

function showImage(index) {
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;

  currentIndex = index;
  lightboxImage.src = images[currentIndex].src;
}

if (nextBtn) {
nextBtn.addEventListener("click", () => {
  showImage(currentIndex + 1);
});
}

if (prevBtn) {
prevBtn.addEventListener("click", () => {
  showImage(currentIndex - 1);
});
}

if(closeBtn) {
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});
}
}