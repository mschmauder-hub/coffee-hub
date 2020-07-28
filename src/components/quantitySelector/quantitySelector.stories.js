import { useEffect } from "@storybook/client-api";
import "./quantitySelector.css";
import quantitySelector from "./quantitySelector.html";

export default { title: "quantitySelector" };

export const simpleSelector = () => {
  useEffect(() => {
    const decrease = document.querySelector(".decrease-btn");
    const increase = document.querySelector(".increase-btn");
    const resultElement = document.querySelector(".counter");

    decrease.addEventListener("click", () => {
      const oldResult = Number(resultElement.innerHTML);
      if (oldResult === 2) {
        decrease.disabled = true;
      }
      resultElement.innerHTML = oldResult - 1;
    });

    increase.addEventListener("click", () => {
      const oldResult = Number(resultElement.innerHTML);
      if (oldResult === 1) {
        decrease.disabled = false;
      }
      resultElement.innerHTML = oldResult + 1;
    });
  });
  return quantitySelector;
};
