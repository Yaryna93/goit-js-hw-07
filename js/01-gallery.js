import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const markup = galleryItems.map(({preview, original, description}) => 
`<li class="gallery__item">
  <a class="gallery__link" 
  href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
  </a>
</li>`);

gallery.insertAdjacentHTML('beforeend', markup.join(''));

gallery.addEventListener('click', onClick);
function onClick(event) {
  event.preventDefault();
  if(!event.target.classList.contains("gallery__image")){
    return;
  }
  const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}" width="800" height="600">
  `)
  instance.show();


gallery.addEventListener("keydown", onEscape);
instance.element.addEventListener('click', modalClose);
function modalClose() {
  instance.close();
  gallery.removeEventListener('keydown', onEscape);
};

  function onEscape (event) {
    if (event.code === "Escape"){
      modalClose();
    }
  }
};










