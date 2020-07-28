import { useEffect } from "@storybook/client-api";
import { createButton } from "../../components/button/button";

export default {
  title: "Pages/Details",
};
export const basic = () => {
  const button = createButton("Add to cart");

  return button;
};
