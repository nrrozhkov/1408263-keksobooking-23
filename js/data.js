import { getRandomPositiveInteger, getAvatar, getLat, getLng, getAddress, featuresListsShuffles, photoShuffles } from './util.js';
const MAX_PRICE = 1000000;
const SIMILAR_ITEM_COUNT = 10;
const START_VALUE = 0;
const HUNDRED = 100;
const getTitle = 'Дом, который построил Джек';
const type = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkinIntervals = [12, 13, 14];
const checkoutIntervals = [12, 13, 14];

const getAuthor = function () {
  return getAvatar();
};

const getOffer = function () {
  return {
    title: getTitle,
    address: getAddress(),
    price: getRandomPositiveInteger(START_VALUE, MAX_PRICE),
    type: type[getRandomPositiveInteger(START_VALUE, type.length - 1)],
    rooms: getRandomPositiveInteger(START_VALUE, SIMILAR_ITEM_COUNT),
    guests: getRandomPositiveInteger(START_VALUE, HUNDRED),
    checkin: checkinIntervals[getRandomPositiveInteger(START_VALUE, checkinIntervals.length - 1)],
    checkout: checkoutIntervals[getRandomPositiveInteger(START_VALUE, checkoutIntervals.length - 1)],
    features: featuresListsShuffles,
    description: 'Здесь будет описание',
    photos: photoShuffles,
  };
};

const getLocationValue = function () {
  return {
    lat: getLat(),
    lng: getLng(),
  };
};

const getRandomItem = () => ({
  author: getAuthor(),
  offer: getOffer(),
  location: getLocationValue(),
});

const randomItems = () => new Array(SIMILAR_ITEM_COUNT).fill(null).map(() => getRandomItem());
export {randomItems};

