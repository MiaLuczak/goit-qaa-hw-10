// Async function expression that fetches only necessary info,
// due to faster response and lower data size
const fetchCountries = async name => {
  // Setting up base URL and parsing name parameter to lowercase
  const baseURL = 'https://restcountries.com/v3.1';
  const searchName = name.toLowerCase();

  // Creating object that filter response fields, to necessary info required in task
  // Accesing fields with API data fields documentation
  const searchFilters = new URLSearchParams({
    fields: 'name,capital,population,flags,languages',
  });

  const headers = new Headers({
    Accept: 'application/json',
  });

  const response = await fetch(
    `${baseURL}/name/${searchName}?${searchFilters}`,
    headers
  );
  if (!(await response.ok)) {
    return new Error(response.status);
  } 
  const countries = await response.json();
  return countries;
};

export { fetchCountries };
