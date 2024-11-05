{
    // Abstraction: Hiding complex details and showing only essential features.
    // Implemented in TypeScript using 1. Interface and 2. Abstract classes.
  
    // 1. Interface: Defines a contract that classes must follow.
    interface Vehicle1 {
      startEngine(): void;  // Start the engine of the vehicle
      stopEngine(): void;   // Stop the engine of the vehicle
    }
  
    // Class implementing the Vehicle1 interface
    class Car implements Vehicle1 {
      // Concrete implementation of startEngine method
      startEngine(): void {
        console.log("I'm starting the engine of a Car");
      }
  
      // Concrete implementation of stopEngine method
      stopEngine(): void {
        console.log("I'm stopping the engine of a Car");
      }
    }
  
    // Creating an instance of the Car class
    const toyotaCar = new Car();
    toyotaCar.startEngine();  // Outputs: "I'm starting the engine of a Car"
  
    // 2. Abstract Class: Provides a template, where subclasses must implement abstract methods.
    abstract class Vehicle2 {
      // Abstract methods must be implemented by any derived class
      abstract startEngine(): void;
      abstract stopEngine(): void;
    }
  
    // Concrete class extending the abstract Vehicle2 class
    class Hondacar extends Vehicle2 {
      // Implementing the startEngine method
      startEngine(): void {
        console.log("I'm starting the engine of a Honda Car");
      }
  
      // Implementing the stopEngine method
      stopEngine(): void {
        console.log("I'm stopping the engine of a Honda Car");
      }
    }
  
    // Creating an instance of Hondacar (derived class)
    const bmwCar = new Hondacar();
    bmwCar.startEngine();  // Outputs: "I'm starting the engine of a Honda Car"
  
    //
  }
  