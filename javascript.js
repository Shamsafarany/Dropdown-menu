const headerItems = document.querySelectorAll(".list-container");

for (let i = 0; i < headerItems.length; i++) {
  const dropdown = headerItems[i].querySelector(".dropdown");

  headerItems[i].addEventListener("mouseenter", function () {
    dropdown.classList.add("show");
  });

  headerItems[i].addEventListener("mouseleave", function () {
    dropdown.classList.remove("show");
  });
}
