class SVG {
    constructor() {
      this.textElement = "";
      this.shapeElement = "";
    }
  
    render() {
      return `<svg width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }
  
    setText(message, color) {
      if (message.length > 3) {
        throw new Error("Text must not exceed 3 characters.");
      }
      this.textElement = `<text x="150" y="125" font-size="50" text-anchor="middle" fill="${color}">${message}</text>`;
    }
  
    setShape(shape) {
      this.shapeElement = shape.render();
    }
  }
  
  module.exports = SVG;