const {Circle} = require("./circle");

describe("Circle", () => {
    test("should render svg for a blue circle element", () => {
      const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
      const circle = new Circle();
      circle.setColor("blue");
      const actualSvg = circle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a fillColor param", () => {
      const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
      const circle = new Circle();
      circle.setColor("green");
      const actualSvg = circle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  });