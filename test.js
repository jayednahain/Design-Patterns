
//Product
// Product: The Product is the common interface for all products. 
//In JavaScript, you can define a product as a simple class or constructor function.

class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    displayInfo() {
      return `Make: ${this.make}, Model: ${this.model}`;
    }
  }

  console.log(Vehicle.prototype)
// Concrete Products
