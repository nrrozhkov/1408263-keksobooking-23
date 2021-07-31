const houseTypeFilter = (array) => {
  const inputValue = document.querySelector('#housing-type');
  if (inputValue.value === 'any') {
    return array;
  }
  const newArray = array.filter((item) =>
    item.offer.type === inputValue.value,
  );
  return newArray;
};
const priceRangeFilter = (array) => {
  const inputValue = document.querySelector('#housing-price');
  if (inputValue.value === 'any') {
    return array;
  }
  if (inputValue.value === 'low') {
    const lowCheck = array.filter((item) => item.offer.price <= 10000);
    return lowCheck;
  }
  if (inputValue.value === 'middle') {
    const priceCheck = array.filter((item) => item.offer.price > 10000 && item.offer.price <= 50000);
    return priceCheck;
  }
  if (inputValue.value === 'high') {
    const priceCheck = array.filter((item) => item.offer.price > 50000);
    return priceCheck;
  }
};
const roomsQuantityFilter = (array) => {
  const inputValue = document.querySelector('#housing-rooms');
  if (inputValue.value === 'any') {
    return array;
  }
  if (inputValue.value === '1') {
    const inputCheck = array.filter((item) => item.offer.rooms <= 1);
    return inputCheck;
  }
  if (inputValue.value === '2') {
    const inputCheck = array.filter((item) => item.offer.rooms = 2);
    return inputCheck;
  }
  if (inputValue.value === '3') {
    const inputCheck = array.filter((item) => item.offer.rooms >= 3);
    return inputCheck;
  }
};
const guestsQuantityFilter = (array) => {
  const inputValue = document.querySelector('#housing-guests');
  if (inputValue.value === 'any') {
    return array;
  }
  if (inputValue.value === '1') {
    const inputCheck = array.filter((item) => item.offer.guests = 1);
    return inputCheck;
  }
  if (inputValue.value === '2') {
    const inputCheck = array.filter((item) => item.offer.guests = 2);
    return inputCheck;
  }
  if (inputValue.value === '0') {
    const inputCheck = array.filter((item) => item.offer.guests >= 3);
    return inputCheck;
  }
};

const featureFilter = (array) => {
  // debugger;
  const featureFilters = document.querySelector('#housing-features');
  const wifi = featureFilters.querySelector('#filter-wifi');
  const dishwasher = featureFilters.querySelector('#filter-dishwasher');
  const parking = featureFilters.querySelector('#filter-parking');
  const washer = featureFilters.querySelector('#filter-washer');
  const elevator = featureFilters.querySelector('#filter-elevator');
  const conditioner = featureFilters.querySelector('#filter-conditioner');
  if (wifi.checked) {
    const feature = array.filter((item) => {
      if (item.offer.features) {
        const featureList = item.offer.features;
        const featuresCheck = featureList.includes('wifi');
        return featuresCheck;
      }
      return false;
    });
    return feature;
  }

  if (dishwasher.checked) {
    const feature = array.filter((item) => {
      if (item.offer.features) {
        const featureList = item.offer.features;
        const featuresCheck = featureList.includes('dishwasher');
        return featuresCheck;
      }
      return false;
    });
    return feature;
  }

  if (parking.checked) {
    const feature = array.filter((item) => {
      if (item.offer.features) {
        const featureList = item.offer.features;
        const featuresCheck = featureList.includes('parking');
        return featuresCheck;
      }
      return false;
    });
    return feature;
  }

  if (washer.checked) {
    const feature = array.filter((item) => {
      if (item.offer.features) {
        const featureList = item.offer.features;
        const featuresCheck = featureList.includes('washer');
        return featuresCheck;
      }
      return false;
    });
    return feature;
  }

  if (elevator.checked) {
    const feature = array.filter((item) => {
      if (item.offer.features) {
        const featureList = item.offer.features;
        const featuresCheck = featureList.includes('elevator');
        return featuresCheck;
      }
      return false;
    });
    return feature;
  }

  if (conditioner.checked) {
    const feature = array.filter((item) => {
      if (item.offer.features) {
        const featureList = item.offer.features;
        const featuresCheck = featureList.includes('conditioner');
        return featuresCheck;
      }
      return false;
    });
    return feature;
  }
  return array;
};
export {houseTypeFilter, priceRangeFilter, roomsQuantityFilter, guestsQuantityFilter, featureFilter};

