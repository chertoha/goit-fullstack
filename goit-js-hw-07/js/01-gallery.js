import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryRef.innerHTML = galleryMarkup;

galleryRef.addEventListener("click", galleryClickHandler);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`;
    })
    .join("");
}

function galleryClickHandler(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const imageOriginalSrc = e.target.dataset.source;
  runModalWindow(imageOriginalSrc);
}

function runModalWindow(imageSource) {
  const modal = basicLightbox.create(
    `<img src="${imageSource}" width="800" height="600">`,
    {
      onShow: () => addEcapeListener(),
      onClose: () => removeEscapeListener(),
    }
  );

  const boundedEscapeHandler = escapeCloseHandler.bind(modal);

  function addEcapeListener() {
    window.addEventListener("keydown", boundedEscapeHandler);
    console.log("addEcapeListener");
  }

  function removeEscapeListener() {
    window.removeEventListener("keydown", boundedEscapeHandler);
    console.log("removeEscapeListener");
  }

  function escapeCloseHandler(e) {
    if (e.code === "Escape") {
      this.close();
      console.log("Closed with Ecape button");
    }
  }

  modal.show();
}
