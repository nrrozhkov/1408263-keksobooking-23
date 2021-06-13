import {getRandomPositiveInteger, getAvatar, getLat, getLng, getAddress, featuresListsShuffles, photoShuffles} from './util.js';
const maxPrice = 1000000;
const randomItem = 10;
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
    price: getRandomPositiveInteger(0, maxPrice),
    type: type[getRandomPositiveInteger(0, type.length - 1)],
    rooms: getRandomPositiveInteger(0, 10),
    guests: getRandomPositiveInteger(0, 100),
    checkin: checkinIntervals[getRandomPositiveInteger(0, checkinIntervals.length - 1)],
    checkout: checkoutIntervals[getRandomPositiveInteger(0, checkoutIntervals.length - 1)],
    features: featuresListsShuffles,
    description: 'Здесь будет описание',
    photos: photoShuffles,
  };
};

const getLocationValue = function () {
  return `${getLat()} ${getLng()}`;
};

export {getAuthor, getOffer, getLocationValue, randomItem};
