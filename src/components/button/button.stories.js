import "./button.css";
import { createButton } from "./button";

export default { title: "Button" };

export const addToCart = () => {
  const firstButton = createButton("Add to cart");

  return firstButton;
};
