let formData = {
  email: '',
  message: '',
};
const formEl = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const saveData = JSON.parse(localStorage.getItem(localStorageKey));
if (saveData) {
  formData = saveData;
  formEl.elements.email.value = saveData.email ?? '';
  formEl.elements.message.value = saveData.message ?? '';
}

formEl.addEventListener('input', onUserEmailInput);
function onUserEmailInput(event) {
  const fieldName = event.target.name;
  const fieldValue = event.target.value.trim();
  formData[fieldName] = fieldValue;

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
  console.log(formData);
}
formEl.addEventListener('submit', onUserSubmit);
function onUserSubmit(event) {
  event.preventDefault();
  if (
    formEl.elements.email.value.trim() === '' ||
    formEl.elements.message.value.trim() === ''
  ) {
    console.log('Fill please all fields');
    return;
  }
  console.log(formData);

  localStorage.removeItem(localStorageKey);
  formEl.reset();
  formData = { email: '', message: '' };
}
