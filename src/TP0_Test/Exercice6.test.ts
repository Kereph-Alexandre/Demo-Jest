import { evaluateStudent } from "./Exercice6";

describe("GIVEN => Je test Ex6", () => {
  describe("WHEN => un étudiant a 4 de moyenne", () => {
    it("THEN => Cest Catastrophique", () => {
      const logSpy = jest.spyOn(global.console, "log");
      evaluateStudent("Alex", 4);

      expect(logSpy).toHaveBeenCalled();
      expect(logSpy).toBeCalledWith(
        "Alex a une moyenne de 4 : c'est Catastrophique"
      );

      logSpy.mockRestore();
    });
  });
  describe("WHEN => un étudiant a 6 de moyenne", () => {
    it("THEN => Cest Insuffisant", () => {
      const logSpy = jest.spyOn(global.console, "log");
      evaluateStudent("Alex", 6);

      expect(logSpy).toHaveBeenCalled();
      expect(logSpy).toBeCalledWith(
        "Alex a une moyenne de 6 : c'est Insuffisant"
      );

      logSpy.mockRestore();
    });
  });
  describe("WHEN => un étudiant a 12 de moyenne", () => {
    it("THEN => Cest Insuffisant", () => {
      const logSpy = jest.spyOn(global.console, "log");
      evaluateStudent("Alex", 12);

      expect(logSpy).toHaveBeenCalled();
      expect(logSpy).toBeCalledWith(
        "Alex a une moyenne de 12 : c'est Passable"
      );

      logSpy.mockRestore();
    });
  });
  describe("WHEN => un étudiant a 16 de moyenne", () => {
    it("THEN => Cest Insuffisant", () => {
      const logSpy = jest.spyOn(global.console, "log");
      evaluateStudent("Alex", 16);

      expect(logSpy).toHaveBeenCalled();
      expect(logSpy).toBeCalledWith("Alex a une moyenne de 16 : c'est Bien");

      logSpy.mockRestore();
    });
  });
  describe("WHEN => un étudiant a 20 de moyenne", () => {
    it("THEN => Cest Insuffisant", () => {
      const logSpy = jest.spyOn(global.console, "log");
      evaluateStudent("Alex", 20);

      expect(logSpy).toHaveBeenCalled();
      expect(logSpy).toBeCalledWith(
        "Alex a une moyenne de 20 : c'est Très Bien"
      );

      logSpy.mockRestore();
    });
  });
});
