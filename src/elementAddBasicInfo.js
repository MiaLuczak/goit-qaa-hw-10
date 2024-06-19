async function elementAddBasicInfo(from, target) {
  // Setting an async variable
  let arrayOfResults = await from;

  // Loop that iterates on every country (object) that is in response
  arrayOfResults.forEach(async country => {
    try {
      const flag = country.flags.svg;
      const name = country.name.common;

      // Creating HTML <li> element
      const resultLiElements = document.createElement('li');
      resultLiElements.innerHTML = `
    <div class="country-general"><img src=${flag} class="country-flag">
    <span class="country-name">${name}</span></div>`;

      // Inserting HTML <li> element to target parent
      target.appendChild(resultLiElements);
    } catch (error) {
      console.log('Cannot load info about countries');
    }
  });
}

export { elementAddBasicInfo };
