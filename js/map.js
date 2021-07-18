const USER_MARKER_LAT = 35.65952;
const USER_MARKER_LNG = 139.78179;
const inputAddress = document.querySelector('#address');
const map = L.map('map-canvas')
  .on('load', () => {
    const articleForm = document.querySelector('.ad-form');
    const mapFilters = document.querySelector('.map__filters');
    const enableControls = () => {
      articleForm.classList.remove('ad-form--disabled');
      mapFilters.classList.remove('map__filters--disabled');
    };
    enableControls();
  })
  .setView({
    lat: 35.6895000,
    lng: 139.6917100,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const marker = L.marker(
  {
    lat: 35.6895000,
    lng: 139.6917100,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
//Добавляем методом add.To координаты маркера на мапу
marker.addTo(map);

const setStartingLocation = (lat, lng) => `${lat}, ${lng}`;

inputAddress.value = setStartingLocation(USER_MARKER_LAT, USER_MARKER_LNG);
marker.on('moveend', (evt) => {
  const {lat, lng} = evt.target.getLatLng();
  inputAddress.value = setStartingLocation(lat, lng);// тут не понял, надо заново разбирать
});
