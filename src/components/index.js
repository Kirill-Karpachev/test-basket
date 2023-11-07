import {
  createCard,
  renderCard
} from "./card.js";
import {
  fakeDB
} from "../service/db.js";
import {
  makeOrder
} from "./order.js";
import {
  cleanBasket
} from "./clean-basket.js";
import {
  renderTree
} from "./render-tree.js";
import Swiper from 'swiper';
import {
  Navigation,
  Pagination,
} from 'swiper/modules'

import 'swiper/css/bundle';
import '../pages/index.css';

const container = document.querySelector('.basket__list');
const orderButton = document.querySelector('.total__button_checkout');
const cleanButton = document.querySelector('.basket__clean-button');

orderButton.addEventListener('click', makeOrder)
cleanButton.addEventListener('click', cleanBasket)

const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 20,
  grabCursor: true,
  modules: [Navigation, Pagination],
  navigation: {
    prevEl: '.my-swiper__prev',
    nextEl: '.my-swiper__next',
  },
  pagination: {
    el: ".my-swiper__pagination",
    type: "fraction",
  },
});

fakeDB.forEach(item => {
  const {
    name,
    description,
    code,
    price,
    img,
    count
  } = item;
  const card = createCard(name, description, img, code, price, count);
  renderCard(container, card);
})

renderTree()