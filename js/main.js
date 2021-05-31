// Функция возвращает случайное число
function getRandomInt(min, max) {
  if (max === undefined) {
    return getRandomInt(0, min);
  }
  if (min >= 0 && max >= 0) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
}

getRandomInt();

// Функция возвращает случайное число с плавающей точкой
function getRandomDecimal(min, max, decimalDigits) {
  if (max === undefined) {
    return getRandomDecimal(0, min);
  }
  if (min >= 0 && max >= 0) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return rand.toFixed(decimalDigits);
  }
}
getRandomDecimal(2, 3, 100);

