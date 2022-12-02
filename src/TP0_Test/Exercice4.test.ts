import { deternmineHighestNumber } from "./Exercice4";

describe("Trouver le plus grand Ex4", () => {
  it("Plus grand de trois nombre", () => {
    expect(deternmineHighestNumber(10, 20, 5)).toBe(
      "Le plus grand nombre est 20"
    );
  });
});
