import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageContainer = document.querySelector('.gallery');

const imagesMarkup = galleryItems
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
  .join('');

imageContainer.insertAdjacentHTML('beforeend', imagesMarkup);
imageContainer.addEventListener('click', onImageContainerClick);

function onImageContainerClick(e) {
  e.preventDefault();

  
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  let instance = '';
  const getUrlbyDataSet = e.target.dataset.source;

  const options = {
    once: true,
    // open Modal
    onShow: (instance) => {
      window.addEventListener('keydown', eventHandler);
    },
    // cloze Modal
    onClose: (instance) => {
      window.removeEventListener('keydown', eventHandler);
    },
  };
  function eventHandler(e) {
    if (e.key === 'Escape') {
      instance.close();
      return;
    }
  }
  instance = basicLightbox.create(
    `<img src="${getUrlbyDataSet}" width="800" height="600">`,
    options
  );
  instance.show();
}


