import "./details.css";
import { createButton } from "../../components/button/button";
import { createQuantitySelector } from "../../components/quantitySelector/quantitySelector";
import { createElement } from "../../utils/element";

export default {
  title: "Pages/Details",
};
export const basic = () => {
  const button = createButton("Add to cart");
  const quantitySelector = createQuantitySelector();

  const main = createElement("main", { className: "details" });
  const header = createElement("div", { className: "details__header" });

  const coffeeForm = createElement("form", { className: "details__form" });

  coffeeForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  const coffee = createElement("div", { innerText: "Macchiato" });
  const coffeePrice = createElement("div", { innerText: "2.10" });
  coffee.append(coffeePrice);

  const coffeeSize = createElement("label", { innerText: "Size:" });
  const size = createElement("input", { className: "size" });
  coffeeSize.append(size);

  const sugar = createElement("label", { innerText: "Sugar" });
  const sugarAmount = createElement("input", {});
  sugar.append(sugarAmount);

  main.append(header);
  main.append(coffeeForm);
  coffeeForm.append(coffee);
  coffeeForm.append(quantitySelector);
  coffeeForm.append(coffeeSize);
  coffeeForm.append(sugar);
  coffeeForm.append(button);

  return main;
};
