// Async function expression that fetches only necessary info,
// due to faster response and lower data size
const fetchCountries = async name => {
  const baseURL = 'https://restcountries.com/v3.1';
  const searchName = name.toLowerCase();
  const searchParams = new URLSearchParams({
    name: searchName,
  });
  const headers = new Headers({
    Accept: 'application/json',
  });
  const serverResponse = await fetch(`${baseURL}/${searchParams}`, headers);
  const arrayOfCountries = serverResponse.json;
  return arrayOfCountries;
};

export { fetchCountries };
