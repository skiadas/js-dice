// Test the +/- button addition and functionality
import { addButtons } from "../incrementer";

describe("addButtons", () => {
  let inputElement;
  let divContainer;
  beforeEach(() => {
    inputElement = document.createElement("input");
    inputElement.id = "theInput";
    inputElement.setAttribute("type", "number");
    inputElement.setAttribute("value", 5);
    document.body.append(inputElement);
    addButtons(inputElement);
    divContainer = inputElement.parentNode;
  });
  afterEach(() => {
    document.body.innerHTML = "";
  });
  test("wraps the element in a div", () => {
    expect(inputElement.matches("div > #theInput")).toBeTruthy();
  });
  test("adds two buttons next to inputElement", () => {
    expect(divContainer.querySelectorAll("button").length).toEqual(2);
    expect(divContainer.querySelector(".plus")).not.toBeNull();
    expect(divContainer.querySelector(".minus")).not.toBeNull();
  });
  test("when clicking the plus button the value is increased", () => {
    divContainer.querySelector(".plus").click();
    expect(parseInt(inputElement.value)).toEqual(6);
  });
  test("when clicking the minus button the value is decreased", () => {
    divContainer.querySelector(".minus").click();
    expect(parseInt(inputElement.value)).toEqual(4);
  });
  test("minus button is disabled if value <= min", () => {
    inputElement.setAttribute("min", 4);
    divContainer.querySelector(".minus").click();
    expect(divContainer.querySelector(".minus").disabled).toBeTruthy();
  });
  test.todo("plus button is disabled if value >= max");
});
