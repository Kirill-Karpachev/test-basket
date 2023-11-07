import {
  declOfNum
} from "../utils/decl-of-num";

export const cleanBasket = () => {
  const cards = document.querySelectorAll('.card');
  const totalPrice = document.querySelector('.total__price');
  const totalPriceText = document.querySelector('.total__text_price');
  const totalPriceShopping = document.querySelector('.shopping-cart__price');
  const totalCountText = document.querySelector('.total__text-counter');
  const totalCountBasket = document.querySelector('.basket__count');
  const totalCountShopping = document.querySelector('.shopping-cart__count');

  cards.forEach(card => {
    card.remove()
  })

  totalPrice.textContent = `0 ₽`;
  totalPriceText.textContent = `0 ₽`;
  totalPriceShopping.textContent = `0 ₽`;
  totalCountText.textContent = `0 шт.`;
  totalCountBasket.textContent = `0 ${declOfNum(0, ['товар', 'товара', 'товаров'])}`;
  totalCountShopping.textContent = `0 ${declOfNum(0, ['товар', 'товара', 'товаров'])}`
}