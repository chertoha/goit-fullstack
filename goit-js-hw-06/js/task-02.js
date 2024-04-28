const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const itemsList = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.innerText = ingredient;
  itemEl.classList.add("item");
  return itemEl;
});

ingredientsEl.append(...itemsList);
