import { randomItems } from './data.js';
const photoWidth = 45;
const photoHeight = 40;
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
const addOrHide = (container, selector, content) => {
  const element = container.querySelector(selector);
  if (content) {
    element.textContent = content;
    return;
  }
  element.remove();
};

const createPopupImage = (images, imageContainer) => {
  if (images) {
    images.forEach((photoSrc) => {
      createPhotoElement(photoSrc, imageContainer);
    });
    return;
  }
  imageContainer.remove();
};
const createNewPost = ({ offer, author }) => {
  const article = card.cloneNode(true);
  const photoContainer = article.querySelector('.popup__photos');
  addOrHide(article, '.popup__title', offer.title);
  addOrHide(article, '.popup__text--address', offer.address);
  addOrHide(article, '.popup__text--price', `${offer.price}₽/ночь`);
  addOrHide(article, '.popup__type', houseType(offer.type));
  addOrHide(article, '.popup__text--capacity', `${offer.rooms} комнаты для ${offer.guests} гостей`);
  addOrHide(article, '.popup__text--time', `Заезд после ${offer.checkin} выезд до ${offer.checkout}`);
  addOrHide(article, '.popup__features', offer.features);
  addOrHide(article, '.popup__description', offer.description);
  createPopupImage(offer.photos, photoContainer);
  article.querySelector('.popup__description').src = author;
  return article;
};


const articles = randomItems();

export { articles, createNewPost };
