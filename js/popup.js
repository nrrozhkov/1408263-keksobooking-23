const photoWidth = 45;
const photoHeight = 40;
const card = document.querySelector('#card').content.querySelector('.popup');
const successMsg = document
  .querySelector('#success')
  .content.querySelector('.success');
const HOUSING_TYPE_DICTIONARY = {
  bungalow: 'Бунгало',
  flat: 'Квартира',
  hotel: 'Отель',
  house: 'Дом',
  palace: 'Дворец',
};
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
const createNewPost = (data) => {
  const article = card.cloneNode(true);
  const photoContainer = article.querySelector('.popup__photos');
  addOrHide(article, '.popup__title', data.offer.title);
  addOrHide(article, '.popup__text--address', data.offer.address);
  addOrHide(article, '.popup__text--price', `${data.offer.price}₽/ночь`);
  addOrHide(article, '.popup__type', houseType(data.offer.type));
  addOrHide(
    article,
    '.popup__text--capacity',
    `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`,
  );
  addOrHide(
    article,
    '.popup__text--time',
    `Заезд после ${data.offer.checkin} выезд до ${data.offer.checkout}`,
  );
  addOrHide(article, '.popup__features', data.offer.features);
  addOrHide(article, '.popup__description', data.offer.description);
  createPopupImage(data.offer.photos, photoContainer);
  return article;
};

const createSuccessArticle = () => {
  const article = successMsg.cloneNode(true);
  document.body.append(article);
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      document.querySelector('.success').style.display = 'none';
    }});
  article.onclick = () => {
    document.querySelector('.success').style.display = 'none';
    const form = document.querySelector('.ad-form');
    const inputs = form.querySelectorAll('input');
    for (let num = 0; num < inputs.length; num++) {
      form[num].value = '';
    }
  };
};

export { createNewPost, createSuccessArticle };
