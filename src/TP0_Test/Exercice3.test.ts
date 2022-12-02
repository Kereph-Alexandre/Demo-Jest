import { calculateProfits, showProfits } from "./Exercice3";

describe("GIVEN => Je test Ex3", () => {
  describe("WHEN => Profits entre 10 et 5", () => {
    it("THEN => Je gagne 5", () => {
      expect(calculateProfits(10, 5)).toBe(5);
      expect(showProfits(5)).toBe("Gain de 5");
    });

    describe("WHEN => Profits entre 5 et 10", () => {
      it("THEN => Je perds 5", () => {
        expect(calculateProfits(5, 10)).toBe(-5);
        expect(showProfits(-5)).toBe("Perte de 5");
      });
    });

    describe("WHEN => Profits entre 10 et 10", () => {
      it("THEN => je perds 0", () => {
        expect(calculateProfits(10, 10)).toBe(0);
        expect(showProfits(0)).toBe("Gain de 0");
      });
    });
  });
});
