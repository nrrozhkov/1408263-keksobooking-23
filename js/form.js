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
  debugger;
  const value = houseTypeInput.value;
  const valuePrice = Number(overnightPrice.value);
  if (value === 'bungalow') {
    if (valuePrice < 0) {
      overnightPrice.setCustomValidity('Не меньше 1 руб.');
      return false;
    }
  }
  if (value === 'flat') {
    if (valuePrice < 1000) {
      overnightPrice.setCustomValidity('Не меньше 1000 руб.');
      return false;
    }
  }
  if (value === 'hotel') {
    if (valuePrice < 3000) {
      overnightPrice.setCustomValidity('Не меньше 3000 руб.');
      return false;
    }
  }
  if (value === 'house') {
    if (valuePrice < 5000) {
      overnightPrice.setCustomValidity('Не меньше 5000 руб.');
      return false;
    }
  }
  if (value === 'palace') {
    if (valuePrice < 10000) {
      overnightPrice.setCustomValidity('Не меньше 10000 руб.');
      return false;
    }
  }
};
overnightPrice.addEventListener('input', () => {
  valueValidity();
  overnightPrice.setCustomValidity('');
});

houseTypeInput.addEventListener('input', () => {
  valueValidity();
  houseTypeInput.setCustomValidity('');
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
