const categoryList = document.querySelectorAll("#categories > .item");

console.log("Number of categories:", categoryList.length);
console.log("");
categoryList.forEach((category) => {
  const categoryTitle = category.firstElementChild.innerText;
  const categoryItemsQuantity = category.lastElementChild.children.length;
  console.log("Category:", categoryTitle);
  console.log("Elements:", categoryItemsQuantity);

  console.log("");
});
