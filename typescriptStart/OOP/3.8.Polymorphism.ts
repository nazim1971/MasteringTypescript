{
    // Polymorphism: Different classes have methods with the same name but different implementations.
  
    // Base class
    class Person {
      getSleep() {
        console.log("I am sleeping for 8 hours");
      }
    }
  
    // Derived class 1
    class Student extends Person {
      getSleep() {
        console.log("I am sleeping for 7 hours");
      }
    }
  
    // Derived class 2
    class Developer extends Person {
      getSleep() {
        console.log("I am sleeping for 6 hours");
      }
    }
  
    // Function to demonstrate polymorphism
    const getSleepingHour = (person: Person) => {
      person.getSleep(); // Calls the appropriate method based on the object type
    };
  
    // Create instances of each class
    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();
  
    // Demonstrating polymorphism: the same method behaves differently based on the object
    getSleepingHour(person1); // Outputs: "I am sleeping for 8 hours"
    getSleepingHour(person2); // Outputs: "I am sleeping for 7 hours"
    getSleepingHour(person3); // Outputs: "I am sleeping for 6 hours"
  
    // Polymorphism in Shapes
  
    // Base class
    class Shape {
      // Base class method (can be overridden)
      getArea(): number {
        return 0; // Default implementation
      }
    }
  
    // Derived class for Circle
    class Circle extends Shape {
      // Overriding the getArea method to calculate the area of a circle
      getArea(radius: number): number {
        return Math.PI * radius * radius; // Area = πr²
      }
    }
  
    // Derived class for Rectangle (for future extension)
    class Rectangle extends Shape {
      // Overriding the getArea method to calculate the area of a rectangle
      getArea(width: number, height: number): number {
        return width * height; // Area = width * height
      }
    }
  
    // Example usage of polymorphism in shapes
    const circle = new Circle();
    console.log(`Area of circle: ${circle.getArea(5)}`); // Outputs the area of the circle
  
    //
  }
  