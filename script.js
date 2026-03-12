const gallery = document.getElementById("galleryTrack");

const leftBtn = document.querySelector(".gallery-btn.left");
const rightBtn = document.querySelector(".gallery-btn.right");

leftBtn.addEventListener("click", () => {
  gallery.scrollBy({
    left: -300,
    behavior: "smooth"
  });
});

rightBtn.addEventListener("click", () => {
  gallery.scrollBy({
    left: 300,
    behavior: "smooth"
  });
});