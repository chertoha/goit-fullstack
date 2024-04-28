import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryRef.innerHTML = galleryMarkup;

const config = {
  overlayOpacity: 0.5,
  captionsData: "alt",
  captionClass: "gallery__image-caption",
  captionDelay: 250,
};
new SimpleLightbox(".gallery a", config);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>
                </li>`;
    })
    .join("");
}
