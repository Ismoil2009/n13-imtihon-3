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

window.addEventListener("load", () => {
  document.querySelector(".loading").style.display = "none";
});

$(".owl-dish").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 1500,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1200: {
      items: 4,
    },
  },
});

$(".owl-cust").owlCarousel({
  loop: true,
  dots: false,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    document.querySelector(".navbar").classList.add("shrink");
  } else {
    document.querySelector(".navbar").classList.remove("shrink");
  }
});
