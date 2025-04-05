let images = document.getElementsByClassName("panel");
let imageActive = document.getElementsByClassName("active")[0];

for (const image of images) {
  image.addEventListener("click", (event) => {
    imageActive.classList.remove("active");
    imageActive = event.target;
    imageActive.classList.add("active");
  })
}
