const featuresLists = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
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

//Рассчитывает номер от 1 до 10 для формирования линка пользователя
const numbers = [...Array(10)].map((item, ij) => (`${ij + 1  }`).padStart(2, 0));

//Функция для генерации линка пользователя
const getAvatar = function () {
  const link = 'img/avatars/user';
  const format = '.png';
  return link + numbers.pop() + format;
};

//Функция рассчитывающая рандомную широту
const getLat = () => getRandomPositiveFloat(35.65, 35.7);

//Функция рассчитывающая рандомную долготу
const getLng = () => getRandomPositiveFloat(139.7, 139.8);

//Функция, рассчитывающая рандомную широту и долготу жилья
const getAddress = function () {
  return `${getLat()} ${getLng()}`;
};

//Return random featuresList value
const featuresListsShuffles = [...featuresLists].sort(() => Math.random() - 0.5);

//Shuffeles photos array
const photoShuffles = [...photos].sort(() => Math.random() - 0.5);
export {getRandomPositiveInteger, getRandomPositiveFloat, getAvatar, getLat, getLng, getAddress, photoShuffles, featuresListsShuffles};

