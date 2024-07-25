import Car from './10-car.js';

const _range = Symbol('range');

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Initialize the parent class
    this[_range] = range; // Initialize the new attribute
  }

  get range() {
    return this[_range];
  }

  cloneCar() {
    // Return a new Car instance instead of EVCar
    return new Car(this.brand, this.motor, this.color);
  }
}

export default EVCar;
