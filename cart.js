

function changeImage(thumbnail) {
  const mainImage = document.getElementById("mainImage");
  mainImage.style.opacity = 0;

  setTimeout(() => {
    mainImage.src = thumbnail.src;
    mainImage.style.opacity = 1;
  }, 200);
}
