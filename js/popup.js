import { randomItems } from './data.js';
const photoWidth = 45;
const photoHeight = 40;
const container = document.querySelector('#map-canvas');
const card = document.querySelector('#card').content.querySelector('.popup');
const HOUSING_TYPE_DICTIONARY = { bungalow: 'Бунгало', flat: 'Квартира', hotel: 'Отель', house: 'Дом', palace: 'Дворец' };
const houseType = (name) => HOUSING_TYPE_DICTIONARY[name];
const createPhotoElement = (element, parentContainer) => {
  const photo = document.createElement('img');
  photo.classList.add('popup__photo');
  photo.width = photoWidth;
  photo.height = photoHeight;
  photo.alt = 'Фотография жилья';
  photo.src = element;
  parentContainer.appendChild(photo);
};
const contentEmptyCheck = (content) => {
  if (!content.textContent.length) {
    content.remove();
  }
};
const createPopupImage = (imageArray, imageContainer) => {
  if (imageArray) {
    imageArray.forEach((photoSrc) => {
      createPhotoElement(photoSrc, imageContainer);
    });
  }
};
const createNewPost = (element) => {
  const article = card.cloneNode(true);
  const photoContainer = article.querySelector('.popup__photos');
  contentEmptyCheck(article);

  article.querySelector('.popup__title').textContent = element.offer.title;
  article.querySelector('.popup__text--address').textContent = element.offer.address;
  article.querySelector('.popup__text--price').textContent = `${element.offer.price}₽/ночь`;
  article.querySelector('.popup__type').textContent = houseType(element.offer.type);
  article.querySelector('.popup__text--capacity').textContent = `${element.offer.rooms} комнаты для ${element.offer.guests} гостей`;
  article.querySelector('.popup__text--time').textContent = `Заезд после ${element.offer.checkin} выезд до ${element.offer.checkout}`;
  article.querySelector('.popup__features').textContent = element.offer.features;
  article.querySelector('.popup__description').textContent = element.offer.description;
  createPopupImage(element.offer.photos, photoContainer);
  article.querySelector('.popup__description').src = element.author;
  container.appendChild(article);
};


const newArticle = randomItems();

newArticle.forEach((element) => {
  createNewPost(element);
});


export { newArticle };
