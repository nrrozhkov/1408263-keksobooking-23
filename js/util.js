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


export {getRandomPositiveInteger, getRandomPositiveFloat  };
