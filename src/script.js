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
    // Conditions that select which JS script need to be executed
    if (arrayOfResults instanceof Error) {
      // Condition that display popup information when response returns an error
      loader.style.display = 'none';
      result.replaceChildren();
      Notify.failure('Oops, there is no country with that name');
    } else if ((await arrayOfResults.length) === 1) {
      // Condition that execute function, that shows general and additional information about one country
      loader.style.display = 'none';
      result.replaceChildren();
      await elementAddFullInfo(arrayOfResults, result);
    } else if (
      (await arrayOfResults.length) <= 10 &&
      (await arrayOfResults.length) >= 2
    ) {
      // Condition that execute function, that displays list of countries that meet query
      loader.style.display = 'none';
      result.replaceChildren();
      await elementAddBasicInfo(arrayOfResults, result);
    } else if ((await arrayOfResults.length) > 10) {
      // Condition that displays informacion if the response have more than 10 countires
      loader.style.display = 'none';
      result.replaceChildren();
      Notify.info('Too many matches found. Please enter a more specific name.');
    }
  } else {
    // Condition that clear results list if the query is empty
    loader.style.display = 'none';
    result.replaceChildren();
    Notify.info('Please type/change your search phrase');
  }
}

// Adding eventListener (searchHandler) function with debounce
loader.style.display = 'none';
searchField.addEventListener('input', debounce(searchHandler, 300));
