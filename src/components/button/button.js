export function createButton(text) {
  const button = document.createElement("button");
  button.className = "btn";
  button.innerText = text;
  button.addEventListener("click", () => {
    alert("Add to Cart");
  });
  return button;
}
