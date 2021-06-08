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
function getRandomPositiveFloat(a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

getRandomPositiveFloat();

const numbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
//Функция для генерации линка пользователя
const avatar = function () {
  const link = 'img/avatars/user';
  const format = '.png';
  return link + numbers.pop() + format;
};

const lat = function () {
  return getRandomPositiveFloat(35.65000, 35.70000);
};

const lng = function () {
  return getRandomPositiveFloat(139.70000, 139.80000);
};


const title = () => 'Дом, который построил Джек';

const address = function () {
  return `${lat()} ${lng()}`;
};
const type = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkin = ['12:00', '13:00', '14:00'];
const checkout = ['12:00', '13:00', '14:00'];
const featuresList = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const shuffle = function (array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const author = function () {
  return avatar();
};

const offer = function () {
  return {
    title: title(),
    address: address(),
    price: getRandomPositiveInteger(0, 1000000),
    type: type[getRandomPositiveInteger(0, type.length - 1)],
    rooms: getRandomPositiveInteger(0, 10),
    guests: getRandomPositiveInteger(0, 100),
    checkin: checkin[getRandomPositiveInteger(0, checkin.length - 1)],
    checkout: checkout[getRandomPositiveInteger(0, checkout.length - 1)],
    features: shuffle(featuresList),
    description: 'Здесь будет описание',
    photos: shuffle(photos),
  };
};

const locationValue = function () {
  return `${lat()} ${lng()}`;
};

const randomData = new Array(10).fill(null).map(() => ({
  author: author(),
  offer: offer(),
  locationValue: locationValue(),
}));

