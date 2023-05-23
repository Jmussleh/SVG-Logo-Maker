const SVG = require("./svg");
const {Square} = require("./square");

test("should render a 300 x 200 svg element", () => {
  const expectedSvg =
    '<svg width="300" height="200"></svg>';
  const svg = new SVG();
  expect(svg.render()).toEqual(expectedSvg);
});

test("should append text element", () => {
  const expectedSvg =
    '<svg width="300" height="200"><text x="150" y="125" font-size="50" text-anchor="middle" fill="white">A</text></svg>';
  const svg = new SVG();
  svg.setText("A", "white");
  expect(svg.render()).toEqual(expectedSvg);
});

test("should set text message and color", () => {
  const expectedSvg =
    '<svg width="300" height="200"><text x="150" y="125" font-size="50" text-anchor="middle" fill="#333">SVG</text></svg>';
  const svg = new SVG();
  svg.setText("SVG", "#333");
  expect(svg.render()).toEqual(expectedSvg);
});

test("should console log if text exceeds 3 characters", () => {
  const expectedError = new Error("Text must not exceed 3 characters.");
  const svg = new SVG();
  expect(() => svg.setText("TRIANGLE", "#333")).toThrow(expectedError);
});

test("should include a shape", () => {
  const expectedSvg =
    '<svg width="300" height="200"><rect x="90" y="40" width="120" height="120" fill="blue" /><text x="150" y="125" font-size="50" text-anchor="middle" fill="#333">SVG</text></svg>';
  const svg = new SVG();
  svg.setText("SVG", "#333");
  const square = new Square();
  square.setColor("blue");
  svg.setShape(square);
  expect(svg.render()).toEqual(expectedSvg);
});
