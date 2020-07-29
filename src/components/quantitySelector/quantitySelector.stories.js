import "./quantitySelector.css";
import { createQuantitySelector } from "./quantitySelector";

export default { title: "quantitySelector" };

export const simpleSelector = () => {
  const quantitySelector = createQuantitySelector();

  return quantitySelector;
};
