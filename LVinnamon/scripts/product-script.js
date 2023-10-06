const urlParams = new URLSearchParams(window.location.search);

let category = urlParams.get("category");

const productSelections = document.querySelectorAll(".product-selection");

const productCards = document.querySelectorAll(".product-card");

if (category) {
  productCards.forEach((card) => {
    if (card.classList.contains(category)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

productSelections.forEach((selection) => {
  selection.addEventListener("click", () => {
    category = selection.querySelector(".product-selection-title").textContent;
    productCards.forEach((card) => {
      if (category === "ALL" || card.classList.contains(category)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});
