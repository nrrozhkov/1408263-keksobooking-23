
import {getAuthor, getOffer, getLocationValue, randomItem} from './data.js';

// eslint-disable-next-line no-unused-vars
const randomItems = [...Array(randomItem)].fill(null).map(() => ({
  author: getAuthor(),
  offer: getOffer(),
  location: getLocationValue(),
}));
