// Add event listener to the newsletter form
const newsletterForm = document.querySelector('#newsletter form');
newsletterForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const email = newsletterForm.elements.email.value;
	alert(`Thank you for subscribing! Your email address is ${email}.`);
});

// Add event listener to the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.item .button');
addToCartButtons.forEach((button) => {
	button.addEventListener('click', (event) => {
		event.preventDefault();
		const itemName = event.target.previousElementSibling.textContent;
		const price = event.target.previousElementSibling.previousElementSibling.textContent.slice(8);
		alert(`You have added "${itemName}" to your cart for ${price}.`);
	});
});
// Get all product prices
const prices = document.querySelectorAll('.price');

// Exchange rates for USD to NGN and USD to GHS
const usdToNgn = 411.37;
const usdToGhs = 6.04;

// Convert each price to NGN and GHS
prices.forEach(price => {
  const usdPrice = parseFloat(price.dataset.price);
  const ngnPrice = usdPrice * usdToNgn;
  const ghsPrice = usdPrice * usdToGhs;
  
  // Update the price display with NGN and GHS values
  price.textContent = `$${usdPrice.toFixed(2)} / ₦${ngnPrice.toFixed(2)} / ₵${ghsPrice.toFixed(2)}`;
});
