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

overnightPrice.addEventListener('input', () => {
  const valuePrice = overnightPrice.value;
  if (houseTypeInput.value === 'bungalow') {
    if (valuePrice < '0') {
      overnightPrice.setCustomValidity('Не меньше 1 руб.');
      return false;
    }
  }
  if (houseTypeInput.value === 'flat') {
    if (valuePrice < '1000') {
      overnightPrice.setCustomValidity('Не меньше 1000 руб.');
      return false;
    }
  }
  if (houseTypeInput.value === 'hotel') {
    if (valuePrice < '3000') {
      overnightPrice.setCustomValidity('Не меньше 3000 руб.');
      return false;
    }
  }
  if (houseTypeInput.value === 'house') {
    if (valuePrice < '5000') {
      overnightPrice.setCustomValidity('Не меньше 5000 руб.');
      return false;
    }
  }
  if (houseTypeInput.value === 'palace') {
    if (valuePrice < '10000') {
      overnightPrice.setCustomValidity('Не меньше 10000 руб.');
      return false;
    }
  }
  overnightPrice.setCustomValidity('');
});

houseTypeInput.addEventListener('input', () => {
  const valuePrice = overnightPrice.value;
  if (houseTypeInput.value === 'bungalow') {
    if (valuePrice < '0') {
      overnightPrice.setCustomValidity('Не меньше 1 руб.');
      return false;
    }
  }
  if (houseTypeInput.value === 'flat') {
    if (valuePrice < '1000') {
      overnightPrice.setCustomValidity('Не меньше 1000 руб.');
      return false;
    }
  }
  if (houseTypeInput.value === 'hotel') {
    if (valuePrice < '3000') {
      overnightPrice.setCustomValidity('Не меньше 3000 руб.');
      return false;
    }
  }
  if (houseTypeInput.value === 'house') {
    if (valuePrice < '5000') {
      overnightPrice.setCustomValidity('Не меньше 5000 руб.');
      return false;
    }
  }
  if (houseTypeInput.value === 'palace') {
    if (valuePrice < '10000') {
      overnightPrice.setCustomValidity('Не меньше 10000 руб.');
      return false;
    }
  }
  houseTypeInput.setCustomValidity('');
});

roomsCounter.addEventListener('change', () => {
  const roomValue = roomsCounter.value;
  const houseCapacityValue3 = () => (houseCapacity.options[0].disabled = true);
  const houseCapacityValue2 = () => (houseCapacity.options[1].disabled = true);
  const houseCapacityValue1 = () => (houseCapacity.options[2].disabled = true);
  const houseCapacityValue0 = () => (houseCapacity.options[3].disabled = true);
  const houseCapacityValue3True = () => (houseCapacity.options[0].disabled = false);
  const houseCapacityValue2True = () => (houseCapacity.options[1].disabled = false);
  const houseCapacityValue1True = () => (houseCapacity.options[2].disabled = false);
  const houseCapacityValue0True = () => (houseCapacity.options[3].disabled = false);
  if (roomValue === '1') {
    houseCapacityValue0(), houseCapacityValue2(), houseCapacityValue3(), houseCapacityValue1True();
  }
  if (roomValue === '2') {
    houseCapacityValue0(), houseCapacityValue3(), houseCapacityValue1True(), houseCapacityValue2True();
  }
  if (roomValue === '3') {
    houseCapacityValue0(), houseCapacityValue3True(), houseCapacityValue1True(), houseCapacityValue2True();
  }
  if (roomValue === '100') {
    houseCapacityValue1(), houseCapacityValue2(), houseCapacityValue3(), houseCapacityValue0True();
  }
});

export { mapLoadCheck };
