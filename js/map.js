import { articles } from './popup.js';
const USER_MARKER_LAT = 35.65952;
const USER_MARKER_LNG = 139.78179;
const CENTER_LAT =  35.6895000;
const CENTER_LNG = 139.6917100;
const inputAddress = document.querySelector('#address');
const articleForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const resetButton = document.querySelector('.ad-form__reset');
const enableControls = () => {
  articleForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
};
const map = L.map('map-canvas')
  .on('load', () => {
    enableControls();
  })
  .setView({
    lat: CENTER_LAT,
    lng: CENTER_LNG,
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

marker.addTo(map);

const setStartingLocation = (lat, lng) => `${lat}, ${lng}`;

inputAddress.value = setStartingLocation(USER_MARKER_LAT, USER_MARKER_LNG);
marker.on('moveend', (evt) => {
  const {lat, lng} = evt.target.getLatLng();
  inputAddress.value = setStartingLocation(lat.toFixed(5), lng.toFixed(5));
});

resetButton.addEventListener('click', () => {
  marker.setLatLng({
    lat: USER_MARKER_LAT,
    lng: USER_MARKER_LNG,
  });
  map.setView({
    lat:  CENTER_LAT,
    lng:  CENTER_LNG,
  }, 10);
});

console.log(articles);
const addPin = (address) => {
  articles.address;
}