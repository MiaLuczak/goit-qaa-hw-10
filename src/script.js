// Importing needed modules
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';

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
    elementadd(arrayOfResults);
  }
}

async function elementadd(array) {
  arrayOfResults = await array;
  arrayOfResults.forEach(async country => {
    const flag = country.flags.svg;
    const name = country.name.common;
    const capital = country.capital.toString();
    const population = country.population;
    const languages = country.languages.toString();
    const resultLiElements = document.createElement('li');
    resultLiElements.innerHTML = `
    <div class="country-general"><img src=${flag} class="country-flag">
    <p class="country-name">${name}</p></div>
    <div class="country-details"><div><p class="country-details-category">Capital:</p> <p class="country-datails-value">${capital}</p></div>
    <div><p class="country-details-category">Population:</p> <p class="country-datails-value">${population}</p></div>
    <div><p class="country-details-category">Languages:</p> <p class="country-datails-value">${languages}</p></div></div>`;
    result.appendChild(resultLiElements);
  });
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
