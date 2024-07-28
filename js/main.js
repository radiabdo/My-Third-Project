// Select Element
let featuresLi = document.querySelectorAll(".featured-work ul li");
let imges = document.querySelectorAll(".featured-work img");
// loop In Element To Add Active Class
featuresLi.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", mangeImg);
});
// Remove Active Classes
function removeActive() {
  featuresLi.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}
// Mange Imgs Function
function mangeImg() {
  imges.forEach((img) => {
    img.style.display = "none";
  });
  if (this.dataset.class == "all") {
    img.style.display = "block";
  } else {
    document.querySelectorAll(this.dataset.class).forEach((e) => {
      e.style.display = "block";
    });
  }
}

// Select Upp Element
let up = document.querySelector(".up");

window.onscroll = function () {
  if (window.scrollY >= 1000) {
    up.classList.add("show");
  } else {
    up.classList.remove("show");
  }
};
up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
