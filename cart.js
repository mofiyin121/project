// Get the DOM elements we need
const sizeDropdown = document.getElementById('size');
const colorDropdown = document.getElementById('color');
const currencyList = document.querySelector('.currency-converter ul');

// Define the conversion rates
const conversionRates = {
  'EUR': 0.8385,
  'GBP': 0.7215,
  'JPY': 110.11
};

// Function to update the conversation rates
function updateCurrencyRates(price) {
  for (const currency in conversionRates) {
    const rate = conversionRates[currency];
    const convertedPrice = (price * rate).toFixed(2);
    const listItem = document.createElement('li');
    listItem.textContent = `${currency}: ${convertedPrice}`;
    currencyList.appendChild(listItem);
  }
}

// Event listener for the size dropdown
sizeDropdown.addEventListener('change', () => {
  const size = sizeDropdown.value;
  console.log(`Selected size: ${size}`);
});

// Event listener for the color dropdown
colorDropdown.addEventListener('change', () => {
  const color = colorDropdown.value;
  console.log(`Selected color: ${color}`);
});

// Call the updateCurrencyRates function with the initial price
updateCurrencyRates(20);
