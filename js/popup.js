import { randomItems } from './data.js';
const container = document.querySelector('#map-canvas');
const card = document.querySelector('#card').content.querySelector('.popup');
const HOUSING_TYPE_DICTIONARY = { bungalow: 'Бунгало', flat: 'Квартира', hotel: 'Отель',  house: 'Дом', palace: 'Дворец' };
const houseType = (name) => HOUSING_TYPE_DICTIONARY[name];
const createPopupImage = (imageArray, imageContainer) => {
  if (imageArray) {
    imageArray.forEach((photoSrc) => {
      const photo = document.createElement('img');

      photo.classList.add('popup__photo');
      photo.width = 45;
      photo.height = 40;
      photo.alt = 'Фотография жилья';
      photo.src = photoSrc;
      imageContainer.appendChild(photo);
    });
  }
};
const contentCheck = (content) => {
  if (!content.textContent.length) {
    content.remove();
  }
};
const newArticle = randomItems();

newArticle.forEach((element) => {
  const article = card.cloneNode(true);
  const photoContainer = article.querySelector('.popup__photo');

  article.querySelector('.popup__title').textContent = element.offer.title;
  article.querySelector('.popup__text--address').textContent = element.offer.address;
  article.querySelector('.popup__text--price').textContent = `${element.offer.price  }₽/ночь`;
  article.querySelector('.popup__type').textContent = houseType(element.offer.type);
  article.querySelector('.popup__text--capacity').textContent = `${element.offer.rooms  } комнаты для ${  element.offer.guests  } гостей`;
  article.querySelector('.popup__text--time').textContent = `Заезд после ${  element.offer.checkin  } выезд до ${  element.offer.checkout}`;
  article.querySelector('.popup__features').textContent = element.offer.features;
  article.querySelector('.popup__description').textContent = element.offer.description;
  article.querySelector('.popup__photo').innerHTML = createPopupImage(element.offer.photos, photoContainer);
  article.querySelector('.popup__description').src = element.author;
  contentCheck(article);
  container.appendChild(article);
});


export {newArticle};
