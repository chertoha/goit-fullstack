import './css/styles.css';
import './css/countries.css';

const debounce = require('lodash.debounce');

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchCountries from './js/fetchCountries';
import templateCountry from './templates/country-template.hbs';
import templateCountries from './templates/countries-list-template.hbs';

//Vars
const DEBOUNCE_DELAY = 300;
let fetchData = null; //saves fetched country object (to use data without additional network fetch)
const countryOptions = ['name', 'capital', 'population', 'languages', 'flags'];
const refs = {
  searchBox: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
  loader: document.querySelector('.loader'),
};

refs.searchBox.addEventListener(
  'input',
  debounce(onSearchInput, DEBOUNCE_DELAY)
);

function onSearchInput(e) {
  const userValue = e.target.value.trim();
  if (userValue === '') {
    return;
  }

  switchLoaderIcon(true);

  fetchCountries(userValue, countryOptions)
    .then(renderHTML)
    .catch(renderNoMatches);
}

function renderHTML(data) {
  switchLoaderIcon(false);

  if (data.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    return;
  }

  fetchData = data;
  refs.countryList.addEventListener('click', onCountryLinkClick);

  if (data.length === 1) {
    renderCountry(data[0]);
    return;
  }
  renderCountries(data);
}

function renderNoMatches() {
  switchLoaderIcon(false);

  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';

  Notify.failure('Oops, there is no country with that name');
}

function renderCountry(country) {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = templateCountry(country);
}

function renderCountries(countries) {
  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = templateCountries(countries);
}

function onCountryLinkClick(e) {
  e.preventDefault();

  const countryId = e.target.dataset.id;
  renderCountry(fetchData[countryId]);
}

function switchLoaderIcon(isEnabled) {
  refs.loader.classList.toggle('not-active', !isEnabled);
}
