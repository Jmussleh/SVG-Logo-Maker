const {Square} = require("./square");

describe("Square", () => {
    test("should render svg for a green polygon element", () => {
      const expectedSvg =
        '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />';
      const square = new Square();
      square.setColor("dodgerblue");
      const actualSvg = square.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a fillColor param", () => {
      const expectedSvg =
        '<rect x="90" y="40" width="120" height="120" fill="red" />';
      const square = new Square();
      square.setColor("red");
      const actualSvg = square.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  });