import {
  numberWithSpaces
} from "../utils/numberWithSpache";
import {
  renderTree
} from "./render-tree";

const cardTemplate = document.querySelector('#card-template').content;

//создание товара в коризне
const createCard = (name, description, img, code, price, count = 1) => {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardDescription = cardElement.querySelector('.card__description');
  const cardAmountPrice = cardElement.querySelector('.card__amount-price');
  const cardCode = cardElement.querySelector('.card__code');
  const cardCount = cardElement.querySelector('.card__count');
  const cardPrice = cardElement.querySelector('.card__price');
  const cardButtonIncrement = cardElement.querySelector('.card__button-increment');
  const cardButtonDecrement = cardElement.querySelector('.card__button-decrement');
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');

  cardImage.src = img;
  cardImage.alt = name;
  cardCount.textContent = count;
  cardTitle.textContent = name;
  cardDescription.textContent = description;
  cardPrice.textContent = `${numberWithSpaces(price * count)} ₽`;
  cardCode.textContent = `Артикул: ${code}`;

  const amountPriceCheck = () => {
    if (Number(cardCount.textContent) > 1) {
      cardAmountPrice.textContent = `${numberWithSpaces(price)} ₽/шт.`;
      cardAmountPrice.classList.add('card__amount-price_visible')
    } else {
      cardAmountPrice.classList.remove('card__amount-price_visible')
    }
  }

  cardButtonIncrement.addEventListener('click', () => {
    cardCount.textContent = ++count;
    cardPrice.textContent = `${numberWithSpaces(price * count)} ₽`;
    amountPriceCheck()
    renderTree()
  })

  cardButtonDecrement.addEventListener('click', () => {
    if (cardCount.textContent === '1') return null;
    cardCount.textContent = --count;
    cardPrice.textContent = `${numberWithSpaces(price * count)} ₽`;
    amountPriceCheck()
    renderTree()
  })

  cardDeleteButton.addEventListener('click', () => {
    const cardItem = cardDeleteButton.closest('.card');
    cardItem.remove();
    renderTree()
  })

  return cardElement
}

const renderCard = (container, cardElement) => {
  container.append(cardElement);
}

export {
  createCard,
  renderCard
}