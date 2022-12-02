import { highestAmongMany } from "./Exercice5";

describe("test plus grand parmi plein Ex5", () => {
  it("highest(2, 0, 12, 108, -840, 65, 42)", () => {
    expect(highestAmongMany(2, 0, 12, 108, -840, 65, 42)).toBe(
      `Le plus grand nombre est 108`
    );
  });
});
