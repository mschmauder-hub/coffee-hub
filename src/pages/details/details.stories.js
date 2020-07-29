import { useEffect } from "@storybook/client-api";
import { createButton } from "../../components/button/button";
import { createQuantitySelector } from "../../components/quantitySelector/quantitySelector";

export default {
  title: "Pages/Details",
};
export const basic = () => {
  const button = createButton("Add to cart");
  // const quantityButton = createQuantitySelector("")

  const main = document.createElement("main");
  const div = document.createElement("div");
  main.append(div);
  main.append(button);

  return main;
};
