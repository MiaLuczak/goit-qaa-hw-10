async function elementAdd(from, target) {
  arrayOfResults = await from;
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
    target.appendChild(resultLiElements);
  });
}

export { elementAdd };
