import { Calculatrice } from "./calculatrice";

describe("On test la fonction 'Calculatrice'", () => {
  test("1 + 1 = 2", () => {
    expect(eval("1+1")).toBe(2);
  });
});

let calculatrice: Calculatrice;

//Sera executé avant tous les tests
beforeAll(() => {
  console.log("Avant tous les test");
  calculatrice = new Calculatrice();
});

describe("Calculatrice", () => {
  describe("Additions", () => {
    it("1+1", () => {
      expect(calculatrice.calculer("1+1")).toBe(2);
    });
  });

  describe("Division", () => {
    it("10/2", () => {
      expect(calculatrice.calculer("10/2")).toBe(5);
    });

    it("10/0", () => {
      expect(calculatrice.calculer("10/0")).toBe(Infinity);
    });
  });
});
