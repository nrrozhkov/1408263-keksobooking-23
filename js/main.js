//Функция, возвращающая случайное целое число
// eslint-disable-next-line id-length
function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

getRandomPositiveInteger();

//Функция, возвращающая случайное целое число c плавающей запятой
// eslint-disable-next-line id-length
function getRandomPositiveFloat(a, b, digits = 6) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

getRandomPositiveFloat();
const maxPrice = 1000000;
const randomItem = 10;
const numbers = [...Array(10)].map((item, ij) => (`${ij + 1  }`).padStart(2, 0));
//Функция для генерации линка пользователя
const getAvatar = function () {
  const link = 'img/avatars/user';
  const format = '.png';
  return link + numbers.pop() + format;
};

const getLat = () => getRandomPositiveFloat(35.65, 35.7);

const getLng = () => getRandomPositiveFloat(139.7, 139.8);

const getTitle = () => 'Дом, который построил Джек';

const getAddress = function () {
  return `${getLat()} ${getLng()}`;
};
const type = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkinIntervals = [12, 13, 14];
const checkoutIntervals = [12, 13, 14];
const featuresLists = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const featuresListsShuffles = [...featuresLists].sort(() => Math.random() - 0.5);
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const photoShuffles = [...photos].sort(() => Math.random() - 0.5);
const getAuthor = function () {
  return getAvatar();
};

const getOffer = function () {
  return {
    title: getTitle(),
    address: getAddress(),
    price: getRandomPositiveInteger(0, maxPrice),
    type: type[getRandomPositiveInteger(0, type.length - 1)],
    rooms: getRandomPositiveInteger(0, 10),
    guests: getRandomPositiveInteger(0, 100),
    checkin: checkinIntervals[getRandomPositiveInteger(0, checkinIntervals.length - 1)],
    checkout: checkoutIntervals[getRandomPositiveInteger(0, checkoutIntervals.length - 1)],
    features: featuresListsShuffles,
    description: 'Здесь будет описание',
    photos: photoShuffles,
  };
};

const getLocationValue = function () {
  return `${getLat()} ${getLng()}`;
};

// eslint-disable-next-line no-unused-vars
const randomItems = [...Array(randomItem)].fill(null).map(() => ({
  author: getAuthor(),
  offer: getOffer(),
  location: getLocationValue(),
}));
console.log(randomItems);
