const carSymbol = Symbol('car');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this[carSymbol] = function() {
      return new Car();
    };
  }

  cloneCar() {
    return this[carSymbol]();
  }
}
