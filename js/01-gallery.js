import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallaryContainer = document.querySelector(".gallery");
const galleryMarkup = createGallaryItemMarkup(galleryItems);

gallaryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

gallaryContainer.addEventListener("click", event => {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  const openModal = basicLightbox.create(`
    <img src="${event.target.dataset.source}" >
`);

  openModal.show();
});

function createGallaryItemMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
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

console.log(galleryItems);
