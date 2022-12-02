import bonjour from ".";

describe("Je vais tester 'Bonjour'", () => {
  it("La fonction doit retourner 'Bonjour'", () => {
    expect(bonjour()).toBe("Bonjour");
  });
});
