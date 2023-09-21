Product: The Product is the common interface for all products. In JavaScript, you can define a product as a simple class or constructor function.
javascript
Copy code
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  displayInfo() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }
}
Concrete Products: These are the actual product implementations. We'll create two concrete vehicle types, Car and Motorcycle.
javascript
Copy code
class Car extends Vehicle {
  constructor(make, model) {
    super(make, model);
    this.type = "Car";
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model) {
    super(make, model);
    this.type = "Motorcycle";
  }
}
Creator: The Creator is an abstract class or constructor function that defines a method for creating products. In JavaScript, you can use a function as a creator.
javascript
Copy code
class VehicleFactory {
  createVehicle() {
    throw new Error("Subclasses must implement the createVehicle method.");
  }
}
Concrete Creators: These are concrete classes or constructor functions that implement the createVehicle method to produce specific vehicle types.
javascript
Copy code
class CarFactory extends VehicleFactory {
  createVehicle(make, model) {
    return new Car(make, model);
  }
}

'''class MotorcycleFactory extends VehicleFactory {
  createVehicle(make, model) {
    return new Motorcycle(make, model);
  }
}'''js
Now, let's put it all together in a simple program:

javascript
Copy code
// Create a car using the CarFactory
const carFactory = new CarFactory();
const car = carFactory.createVehicle("Toyota", "Camry");
console.log(car.displayInfo());

// Create a motorcycle using the MotorcycleFactory
const motorcycleFactory = new MotorcycleFactory();
const motorcycle = motorcycleFactory.createVehicle("Honda", "CBR");
console.log(motorcycle.displayInfo());