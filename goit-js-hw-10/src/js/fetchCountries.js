const BASE_URL = 'https://restcountries.com/v3.1/name';

export default function fetchCountries(userValue, options) {
  const url = `${BASE_URL}/${userValue}?fields=${options.join(',')}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
