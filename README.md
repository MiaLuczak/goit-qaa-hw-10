# <p align="center">GoIT - HW 10 - JS</p>

## <p align="center">Main goal</p>

The main goal was to make a frontend site of a webpage that searches country
info using their common name using API

The page is hosted using GitHub Pages: <br>
https://mioluczak.github.io/goit-qaa-hw-10/

## <p align="center">Resources used</p>

The page was build using:

- restcountries API v3.1

  > API that provides information about countries <br> >
  > [Link to API](https://restcountries.com/)

- notiflix

  > npm package

- lodash.debounce

  > npm package

- parcel-project-template
  > template repository

## <p align="center">Files info</p>

All files with code are located in [src](./src/) folder

- [index.html](./src/index.html)

  > Main HTML page

- [style.css](./src/style.css)

  > Main CSS file, that provides styling to page

- [script.js](./src/script.js)

  > Main script file, it handles search function and choose result insertion to
  > index.html file

- [fetchCountries.js](./src/fetchCountries.js)

  > It provides async function, that fetches needed informations of typed
  > country name

- [elementAddBasicInfo.js](./src/elementAddBasicInfo.js)

  > When there is more than one element that meets query search, this script
  > takes only flags and common name of all found countries and inserts it into
  > HTML

- [elementAddFullInfo](./src/elementAddFullInfo.js)
  > When there is only one country found, this script take action and insert
  > information as: flag, name, capitals, population, languages of that country
