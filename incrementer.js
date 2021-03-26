// Adds +/- buttons around input element that can be used
// to increase/decrease the value
export function addButtons(inputElement) {
  const container = document.createElement("div");
  inputElement.replaceWith(container);
  container.append(inputElement);
  container.insertAdjacentHTML(
    "beforeend",
    "<button class='minus'>-</button><button class='plus'>+</button>"
  );
  container.querySelector(".plus").addEventListener("click", (ev) => {
    inputElement.value = parseInt(inputElement.value) + 1;
  });
  container.querySelector(".minus").addEventListener("click", (ev) => {
    inputElement.value = parseInt(inputElement.value) - 1;
    if (inputElement.getAttribute("min") == inputElement.value) {
      container.querySelector(".minus").disabled = true;
    }
  });
}
