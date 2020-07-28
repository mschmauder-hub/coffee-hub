import "./button.css";
import { useEffect } from "@storybook/client-api";

export default { title: "Button" };

function createButton(text) {
  const button = document.createElement("button");
  button.className = "btn";
  button.innerText = text;
  return button;
}

const buttonClick = () => {
  useEffect(() => {
    const button = document.querySelector(".btn");
    button.addEventListener("click", () => {
      alert("Add to Cart");
    });
  });
};

export const addToCart = () => {
  const firstButton = createButton("Add to Cart");
  buttonClick();

  return firstButton;
};
