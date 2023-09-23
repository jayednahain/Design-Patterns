// Product: The Product is the common interface for all products. 

class Vehicle {
  constructor(make, model) {
    console.log("Product class constructor run!");
    this.make = make;
    this.model = model;
  }

  displayInfo() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make, model); // Call the constructor of the base class
    console.log("Concrete Product (Car) constructor run!");
    this.type = "car";
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model) {
    super(make, model); // Call the constructor of the base class
    console.log("Concrete Product (Motorcycle) constructor run!");
    this.type = "motorcycle";
  }
}

class VehicleFactory {
  constructor() {
    console.log("Creator class constructor run!");
  }

  createVehicle() {
    throw new Error("Subclasses must implement the createVehicle method.");
  }
}

class CarFactory extends VehicleFactory {
  createVehicle(make, model) {
    return new Car(make, model);
  }
}

class MotorcycleFactory extends VehicleFactory {
  createVehicle(make, model) {
    return new Motorcycle(make, model);
  }
}

// Example usage:
const carFactory = new CarFactory();
const car = carFactory.createVehicle("Toyota", "Camry");
console.log(car.displayInfo());

const motorcycleFactory = new MotorcycleFactory();
const motorcycle = motorcycleFactory.createVehicle("Honda", "CBR");
console.log(motorcycle.displayInfo());

try{
  const carFactory = new CarFactory();
const car = carFactory.createVehicle("Toyota", "Camry");
console.log(car.displayInfo());
}
catch(e){
  console.log(e)
}

