import { welcome } from "./Exercice1";

describe("Bonjour", () => {
  it("welcome('Alex')", () => {
    const logSpy = jest.spyOn(global.console, "log");

    welcome("Alex");

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith("Bonjour Alex !");
    logSpy.mockRestore();
  });
});
