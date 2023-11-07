import {
  updatePrice
} from "./price";

export const check = () => {
  const checkbox = document.querySelector('.service__checkbox');
  const checkboxText = document.querySelector('.total__text-check');

  checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
      checkboxText.textContent = 'Да'
      updatePrice()
    } else {
      checkboxText.textContent = 'Нет'
      updatePrice()
    }
  })
}