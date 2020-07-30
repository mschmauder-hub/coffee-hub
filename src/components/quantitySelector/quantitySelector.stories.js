import "./quantitySelector.css";
import { createQuantitySelector } from "./quantitySelector";

export default { title: "quantitySelector" };

export const quantitySelector = () => {
  const quantitySelector = createQuantitySelector();

  return quantitySelector;
};
