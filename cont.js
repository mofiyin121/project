
// Get the form element
const form = document.querySelector('form');

// Get the input elements
const nameInput = form.querySelector('#name');
const emailInput = form.querySelector('#email');
const messageInput = form.querySelector('#message');

// Get the error message elements
const nameError = form.querySelector('#name-error');
const emailError = form.querySelector('#email-error');
const messageError = form.querySelector('#message-error');

// Set up the validation rules
const rules = {
  name: {
    required: true,
    minLength: 3
  },
  email: {
    required: true,
    email: true
  },
  message: {
    required: true,
    minLength: 10
  }
};

// Validate the input on form submit
form.addEventListener('submit', (event) => {
  // Prevent form submission
  event.preventDefault();

  // Reset error messages
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  // Validate name
  if (rules.name.required && !nameInput.value.trim()) {
    nameError.textContent = 'Name is required';
  } else if (rules.name.minLength && nameInput.value.trim().length < rules.name.minLength) {
    nameError.textContent = `Name must be at least ${rules.name.minLength} characters long`;
  }

  // Validate email
  if (rules.email.required && !emailInput.value.trim()) {
    emailError.textContent = 'Email is required';
  } else if (rules.email.email && !isValidEmail(emailInput.value.trim())) {
    emailError.textContent = 'Email is invalid';
  }

  // Validate message
  if (rules.message.required && !messageInput.value.trim()) {
    messageError.textContent = 'Message is required';
  } else if (rules.message.minLength && messageInput.value.trim().length < rules.message.minLength) {
    messageError.textContent = `Message must be at least ${rules.message.minLength} characters long`;
  }

  // If there are no errors, submit the form
  if (!nameError.textContent && !emailError.textContent && !messageError.textContent) {
    form.submit();
  }
});

// Helper function to validate email address
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

