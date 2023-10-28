const header = document.querySelector(".header")!;

const scrollOfset = 168;

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollOfset) {
    header.classList.add("header--sticky");
  } else {
    header.classList.remove("header--sticky");
  }
});
