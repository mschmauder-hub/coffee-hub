import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import { createElement } from "../../utils/element";

export function createQuantitySelector() {
  const quantitySelector = createElement("div", {
    className: "quantitySelector",
  });

  const decreaseButton = createElement("button", {
    className: "quantity-btn decrease-btn",
    disabled: true,
  });
  const increaseButton = createElement("button", {
    className: "quantity-btn increase-btn",
  });
  const counter = createElement("div", {
    className: "counter",
    innerText: 1,
  });

  const minusImage = createElement("img", { src: minus, alt: "minus-icon" });
  const plusImage = createElement("img", { src: plus, alt: "plus-icon" });

  decreaseButton.append(minusImage);
  increaseButton.append(plusImage);

  quantitySelector.append(decreaseButton);
  quantitySelector.append(counter);
  quantitySelector.append(increaseButton);

  decreaseButton.addEventListener("click", () => {
    const oldResult = Number(counter.innerHTML);
    if (oldResult === 2) {
      decreaseButton.disabled = true;
    }
    counter.innerHTML = oldResult - 1;
  });

  increaseButton.addEventListener("click", () => {
    const oldResult = Number(counter.innerHTML);
    if (oldResult === 1) {
      decreaseButton.disabled = false;
    }
    counter.innerHTML = oldResult + 1;
  });

  return quantitySelector;
}
