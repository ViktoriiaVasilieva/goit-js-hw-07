import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallaryContainer = document.querySelector(".gallery");
const galleryMarkup = createGallaryItemMarkup(galleryItems);

gallaryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "data-caption",
  captionPosition: "bottom",
});

lightbox.show();

function createGallaryItemMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li>
      <a class="gallery__item" href="${original}">
      <img 
      class="gallery__image" 
      src="${preview}" 
      data-caption="${description}"
      />
    </a>
    </li>`;
    })
    .join("");
}

console.log(galleryItems);
