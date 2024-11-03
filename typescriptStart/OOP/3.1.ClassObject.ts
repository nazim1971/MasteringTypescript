{
    // OOP - Class 

class Animal {
    // Parameter properties are already a good practice here
    constructor(public name: string, public species: string, public population: number) {}
  
    // Method for displaying animal details
    makeSound(): void {
      console.log(`Name: ${this.name}, Species: ${this.species}, Population: ${this.population}`);
    }
  }
  
  // Creating instances of the Animal class
  const dog = new Animal('Puppy', 'Dog', 20000);
  const cat = new Animal('Meow', 'Cat', 24550);
  
  // Calling the method to display the sound and details
  dog.makeSound();
  cat.makeSound();
  
}