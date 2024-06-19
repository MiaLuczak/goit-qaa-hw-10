// Importing needed modules
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import { fetchCountries } from './fetchCountries';
import { elementAddFullInfo } from './elementAddFullInfo';
import { elementAddBasicInfo } from './elementAddBasicInfo';

// Getting access to HTML Elements, and initializing needed global variables
const searchField = document.querySelector('#search-box');
const result = document.querySelector('#search-result');
const loader = document.querySelector('.loader');
let lastSearchQuery = '';

// Function that handles search event
async function searchHandler() {
  loader.style.display = 'block';
  let arrayOfResults = [];

  // Using regular expression n{X,} to replace all whitespaces that are doubled or more, triming trailing and starting whitespaces
  const searchQuery = searchField.value.replaceAll(/ {2,}/g, ' ').trim();

  // Condition that reduces API requests
  if (searchQuery.length != 0 && searchQuery != lastSearchQuery) {
    lastSearchQuery = searchQuery;
    arrayOfResults = await fetchCountries(searchQuery);
    if (arrayOfResults instanceof Error) {
      loader.style.display = 'none';
      result.replaceChildren();
      Notify.failure('Oops, there is no country with that name');
    } else if ((await arrayOfResults.length) === 1) {
      loader.style.display = 'none';
      result.replaceChildren();
      elementAddFullInfo(arrayOfResults, result);
    } else if (
      (await arrayOfResults.length) <= 10 &&
      (await arrayOfResults.length) >= 2
    ) {
      loader.style.display = 'none';
      result.replaceChildren();
      elementAddBasicInfo(arrayOfResults, result);
    } else if ((await arrayOfResults.length) > 10) {
      loader.style.display = 'none';
      result.replaceChildren();
      Notify.info('Too many matches found. Please enter a more specific name.');
    }
  } else {
    loader.style.display = 'none';
    result.replaceChildren();
    Notify.info('Please type/change your search phrase');
  }
}

// Adding eventListener (searchHandler) function with debounce
loader.style.display = 'none';
searchField.addEventListener('input', debounce(searchHandler, 300));
