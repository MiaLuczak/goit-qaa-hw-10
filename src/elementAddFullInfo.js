async function elementAddFullInfo(from, target) {
  // Setting an async variable
  let arrayOfResults = await from;

  // Loop that iterates on every country (object) that is in response
  arrayOfResults.forEach(async country => {
    try {
      const flag = country.flags.svg;
      const name = country.name.common;

      // Loop that iterates on every object property and creates an array, that later is used with .toString() method to create HTML element
      const capitals = country.capital;
      let capitalsArray = [];
      for (const capital in capitals) {
        capitalsArray.push(capitals[capital]);
      }

      const population = country.population;

      // Loop that iterates on every object property and creates an array, that later is used with .toString() method to create HTML element
      const languages = country.languages;
      let languagesArray = [];
      for (const language in languages) {
        languagesArray.push(languages[language]);
      }

      // Creating HTML <li> element
      const resultLiElements = document.createElement('li');
      resultLiElements.innerHTML = `
    <div class="country-general"><img src=${flag} class="country-flag">
    <span class="country-name">${name}</span></div>
    <div class="country-details"><div><p class="country-details-category">Capital:</p> <span class="country-datails-value">${capitalsArray.toString()}</span></div>
    <div><p class="country-details-category">Population:</p> <span class="country-datails-value">${population}</span></div>
    <div><p class="country-details-category">Languages:</p> <span class="country-datails-value">${languagesArray.toString()}</span></div></div>`;

      // Inserting HTML <li> element to target parent
      target.appendChild(resultLiElements);
    } catch (error) {
      console.log('Cannot load info about countries');
    }
  });
}

export { elementAddFullInfo };
