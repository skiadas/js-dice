import { mockRandom, resetMockRandom } from "jest-mock-random";

import { die, setRandom } from "../die";

describe("Die object", () => {
  test("has a roll method", () => {
    const d6 = die(1, 6);
    expect(d6).toHaveProperty("roll");
    expect(d6.roll()).toBeGreaterThanOrEqual(1);
    const roll = d6.roll();
    expect(Math.floor(roll)).toEqual(roll);
  });
  test("for single die return numbers in correct range", () => {
    const roll = die(1, 4).roll;
    const manyRolls = new Array(200).fill(0).map((_) => roll());
    expect([...new Set(manyRolls)].sort()).toEqual([1, 2, 3, 4]);
  });
  test("works with two dice", () => {
    mockRandom([4.5 / 6, 5.5 / 6]);
    expect(die(2, 6).roll()).toEqual(11);
    resetMockRandom();
  });
  test.todo("errors if number of dice is not positive");
  test.todo("errors if number of sides is not positive");
});
