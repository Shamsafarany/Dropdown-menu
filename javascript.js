const headerItems = document.querySelectorAll(".list-container");

function setDropdown(headerItems) {
  headerItems.forEach((item) => {
    const dropdown = item.querySelector(".dropdown");
    const dropdownItems = dropdown.querySelectorAll("li");
    const mainItem = item.querySelector(".header-items");
    item.addEventListener("mouseenter", () => {
      dropdown.style.display = "block";
    });
    item.addEventListener("mouseleave", () => {
      dropdown.style.display = "none";
    });
    dropdownItems.forEach((dropdownItem) => {
      dropdownItem.addEventListener("click", () => {
        mainItem.textContent = dropdownItem.textContent;
      });
    });
  });
}

setDropdown(headerItems);
