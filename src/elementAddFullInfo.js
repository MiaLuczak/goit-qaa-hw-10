async function elementAddFullInfo(from, target) {
  arrayOfResults = await from;
  arrayOfResults.forEach(async country => {
    try {
      const flag = country.flags.svg;
      const name = country.name.common;

      const capitals = country.capital.toString();
      let capitalsArray = [];
      for (const capital in capitals) {
        capitalsArray.push(capitals[capital]);
      }

      const population = country.population;

      const languages = country.languages;
      let languagesArray = [];
      for (const language in languages) {
        languagesArray.push(languages[language]);
      }

      const resultLiElements = document.createElement('li');
      resultLiElements.innerHTML = `
    <div class="country-general"><img src=${flag} class="country-flag">
    <span class="country-name">${name}</span></div>
    <div class="country-details"><div><p class="country-details-category">Capital:</p> <span class="country-datails-value">${capitalsArray.toString()}</span></div>
    <div><p class="country-details-category">Population:</p> <span class="country-datails-value">${population}</span></div>
    <div><p class="country-details-category">Languages:</p> <span class="country-datails-value">${languagesArray.toString()}</span></div></div>`;
      target.appendChild(resultLiElements);
    } catch (error) {
      console.log('Cannot load info about countries');
    }
  });
}

export { elementAddFullInfo };
