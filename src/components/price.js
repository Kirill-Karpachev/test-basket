export const updatePrice = () => {
	const cartWrapper = document.querySelector('.basket__list');
	const priceElements = cartWrapper.querySelectorAll('.card__price');
	const totalPrice = document.querySelector('.total__price');
	const totalPriceText = document.querySelector('.total__text_price');
	const totalPriceShopping = document.querySelector('.shopping-cart__price');
	const checkbox = document.querySelector('.service__checkbox');

	let priceTotal = 0;

	priceElements.forEach(item => {
		priceTotal += +item.textContent.slice(0, -1).replaceAll(' ', '');
	});

	const priceTotalWithCheck = checkbox.checked ? `${(priceTotal * 1.05).toLocaleString()} ₽` : `${priceTotal.toLocaleString()} ₽`;

	totalPrice.textContent = priceTotalWithCheck;
	totalPriceText.textContent = `${priceTotal.toLocaleString()} ₽`;
	totalPriceShopping.textContent = priceTotalWithCheck;
}