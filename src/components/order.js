export const makeOrder = () => {
  const order = {
    items: [],
    totalPrice: 0,
    totalCount: 0,
    totalCheck: false
  };
  const cards = document.querySelectorAll('.card');
  const totalPrice = document.querySelector('.total__price');
  const totalCount = document.querySelector('.total__text-counter');
  const totalCheck = document.querySelector('.service__checkbox');

  cards.forEach(card => {
    const cardTitle = card.querySelector('.card__title')
    const cardDescription = card.querySelector('.card__description')
    const cardCode = card.querySelector('.card__code')
    const cardPrice = card.querySelector('.card__price')
    const cardCount = card.querySelector('.card__count')

    order.items.push({
      title: cardTitle.textContent,
      description: cardDescription.textContent,
      code: cardCode.textContent,
      price: cardPrice.textContent,
      count: cardCount.textContent,
    })
  })

  order.totalPrice = totalPrice.textContent;
  order.totalCount = totalCount.textContent;
  order.totalCheck = totalCheck.checked;

  //Отправка на сервер
  console.log(JSON.stringify(order))
}