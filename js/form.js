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

export { mapLoadCheck };
