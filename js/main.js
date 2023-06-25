window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = "80px";
  } else {
    backtop.style.bottom = "-80px";
  }
}
window.addEventListener("scroll", () => {
  if(pageYOffset > 80){
      header.classList.add("shrink")
  } else {
      header.classList.remove("shrink")
  }
})