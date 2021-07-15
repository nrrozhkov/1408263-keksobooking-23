const roomsCounter = document.querySelector('#room_number');
const houseCapacity = document.querySelector('#capacity');
const houseTypeInput = document.querySelector('#type');
const overnightPrice = document.querySelector('#price');
const mapLoadCheck = () => {
  const articleForm = document.querySelector('.ad-form');
  const mapFilters = document.querySelector('.map__filters');

  const disableControls = () => {
    articleForm.classList.add('ad-form--disabled');
    mapFilters.classList.add('map__filters--disabled');
  };
  disableControls();

  window.addEventListener('load', () => {
    articleForm.classList.add('ad-form');
    mapFilters.classList.add('map__filters');
  });
};

const valueValidity = () => {
  const priceMap = {
    bungalow: 1,
    flat: 1000,
    hotel: 3000,
    house: 5000,
    palace: 10000,
  };
  const houseType = houseTypeInput.value;
  const price = Number(overnightPrice.value);
  const minPrice =priceMap[houseType];
  return price < minPrice ? `Не меньше ${minPrice} руб.` : '';
};
overnightPrice.addEventListener('input', () => {
  overnightPrice.setCustomValidity(valueValidity());
});

houseTypeInput.addEventListener('input', () => {
  overnightPrice.setCustomValidity(valueValidity());
});

const setDisabled = (value) => {
  const houseCapacityValue = houseCapacity.options[value];
  return houseCapacityValue.disabled = true;
};
setDisabled(0);
const setEnabled = (value) => {
  const houseCapacityValue = houseCapacity.options[value];
  return houseCapacityValue.disabled = false;
};
roomsCounter.addEventListener('change', () => {
  const roomValue = Number(roomsCounter.value);
  if (roomValue === 1) {
    setDisabled(3), setDisabled(1), setDisabled(0), setEnabled(2);
  }
  if (roomValue === 2) {
    setDisabled(3), setDisabled(0), setEnabled(3), setEnabled(1);
  }
  if (roomValue === 3) {
    setDisabled(3), setEnabled(0), setEnabled(2), setEnabled(1);
  }
  if (roomValue === 100) {
    setDisabled(2), setDisabled(1), setDisabled(0), setEnabled(3);
  }
});
export { mapLoadCheck };
