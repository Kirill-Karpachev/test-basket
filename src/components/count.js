import { declOfNum } from "../utils/decl-of-num";

export const updateCounter = () => {
  const cardCount = document.querySelectorAll('.card__count');
  const totalCountText = document.querySelector('.total__text-counter');
  const totalCountBasket = document.querySelector('.basket__count');
  const totalCountShopping = document.querySelector('.shopping-cart__count');

  let counterTotal = 0;

  cardCount.forEach(item => {
    counterTotal += +item.textContent;
  });

  totalCountText.textContent = `${counterTotal} шт.`;
  totalCountBasket.textContent = `${counterTotal} ${declOfNum(counterTotal, ['товар', 'товара', 'товаров'])}`;
  totalCountShopping.textContent = `${counterTotal} ${declOfNum(counterTotal, ['товар', 'товара', 'товаров'])}`
}