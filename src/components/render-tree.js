import {
  check
} from "./checkbox"
import {
  updateCounter
} from "./count"
import {
  updatePrice
} from "./price"

export const renderTree = () => {
  updatePrice()
  updateCounter()
  check()
}