async function elementAddBasicInfo(from, target) {
  arrayOfResults = await from;
  arrayOfResults.forEach(async country => {
    try {
      const flag = country.flags.svg;
      const name = country.name.common;
      const resultLiElements = document.createElement('li');
      resultLiElements.innerHTML = `
    <div class="country-general"><img src=${flag} class="country-flag">
    <p class="country-name">${name}</p></div>`;
      target.appendChild(resultLiElements);
    } catch (error) {
      console.log('Cannot load info about countries');
    }
  });
}

export { elementAddBasicInfo };
