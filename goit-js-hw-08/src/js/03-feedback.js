const throttle = require('lodash.throttle');
const FEEDBACK_FORM_STATE = 'feedback-form-state';

//Refs
const form = document.querySelector('.feedback-form');
const formElements = form.querySelectorAll('[name]');

fillInFormIfEmpty();

//Listeners
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onSubmitForm);

/*--------------------- Handlers anf functions---------------------------------*/

//Storage transactions
function setFeedbackToStorage(data) {
  const dataJson = JSON.stringify(data);
  localStorage.setItem(FEEDBACK_FORM_STATE, dataJson);
}

function getFeedbackFromStorage() {
  const dataJson = localStorage.getItem(FEEDBACK_FORM_STATE);
  return JSON.parse(dataJson);
}

function clearFeedbackFromStorage() {
  localStorage.removeItem(FEEDBACK_FORM_STATE);
  form.reset();
}

//Check storage and fill in empty form
function fillInFormIfEmpty() {
  const data = getFeedbackFromStorage();
  if (data) {
    formElements.forEach(el => (el.value = data[el.name] ? data[el.name] : ''));
  }
}

//Collection data from form
function collectFormData() {
  const data = {};
  formElements.forEach(el => (data[el.name] = el.value));
  return data;
}

//Handlers
function onFormInput(e) {
  setFeedbackToStorage(collectFormData());
}

function onSubmitForm(e) {
  e.preventDefault();

  const { email, message } = e.target.elements;

  if (email.value === '' || message.value === '') {
    alert('Email or message must not be empty!');
    return;
  }
  console.log('Submited form data:');
  console.log(collectFormData());
  clearFeedbackFromStorage();
}
