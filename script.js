const items = document.querySelectorAll(".item");
items.forEach((element) => {
  element.addEventListener("click", (e) => {
    element.classList.toggle("active");
    items.forEach((item) => {
      if (item !== element) {
        item.classList.remove("active");
      }
    });
  });
});
