// Importing needed modules
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import { elementAdd } from './elementAdd';

// Getting access to HTML Elements
const searchField = document.querySelector('#search-box');
const result = document.querySelector('#search-result');

// Function that handles search event and variable that stores last search query
// To prevent
let lastSearchQuery = '';
async function searchHandler() {
  // Using regular expression n{X,} to replace all whitespaces that are doubled or more
  const searchQuery = searchField.value.replaceAll(/ {2,}/g, ' ').trim();
  // Condition that reduces API requests
  if (true) {
    //(searchQuery.length != 0 && searchQuery != lastSearchQuery) {
    lastSearchQuery = searchQuery;
    arrayOfResults = await localJSON; //fetchCountries(searchQuery); // CHANGE TO LOCAL JSON (temp avoiding api)
    elementAdd(arrayOfResults, result);
  }
}

// Adding eventListener (searchHandler) function with debounce
searchField.addEventListener('input', debounce(searchHandler, 300));

const localJSON = [
  // CHANGE TO LOCAL JSON (temp avoiding api)
  {
    flags: {
      png: 'https://flagcdn.com/w320/ch.png',
      svg: 'https://flagcdn.com/ch.svg',
      alt: 'The flag of Switzerland is square shaped. It features a white Swiss cross centered on a red field.',
    },
    name: {
      common: 'Switzerland',
      official: 'Swiss Confederation',
      nativeName: {
        fra: {
          official: 'Confédération suisse',
          common: 'Suisse',
        },
        gsw: {
          official: 'Schweizerische Eidgenossenschaft',
          common: 'Schweiz',
        },
        ita: {
          official: 'Confederazione Svizzera',
          common: 'Svizzera',
        },
        roh: {
          official: 'Confederaziun svizra',
          common: 'Svizra',
        },
      },
    },
    capital: ['Bern'],
    languages: {
      fra: 'French',
      gsw: 'Swiss German',
      ita: 'Italian',
      roh: 'Romansh',
    },
    population: 8654622,
  },
];
