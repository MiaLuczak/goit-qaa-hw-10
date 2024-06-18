// Async function expression that fetches only necessary info,
// due to faster response and lower data size
const fetchCountries = async name => {
  // Setting up base URL and parsing name parameter to lowercase
  const baseURL = 'https://restcountries.com/v3.1';
  const searchName = name.toLowerCase();

  // Creating object that uses searchName as 'service' (resource) part of URL
  const searchParams = new URLSearchParams({
    name: searchName,
  });
  // Creating object that filter response fields, to necessary info required in task
  // Accesing fields with API data fields documentation
  const searchFilters = new URLSearchParams({
    fields: 'name,capital,population,flags,languages',
  });

  const headers = new Headers({
    Accept: 'application/json',
  });
  try {
    const serverResponse = await fetch(
      `${baseURL}/${searchParams}?${searchFilters}`,
      headers
    );
    const arrayOfCountries = serverResponse.json;
    return arrayOfCountries;
  } catch {
    error => console.log(error.message);
  }
};

export { fetchCountries };
