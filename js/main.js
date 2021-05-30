function rangeCheck(min, max) {
  if (min >= 0 && max >= 0) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  } else {
    return(NaN);
  }
}

rangeCheck();


function getRandomCoordinate(min, max) {
  return Math.random() * (max - min) + min;
}

getRandomCoordinate();
