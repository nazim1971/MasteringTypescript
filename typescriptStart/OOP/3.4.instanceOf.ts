{
    // Base class for all animals
    class Animal {
      name: string;
      species: string;
  
      constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
      }
  
      // Default behavior for any animal
      makeSound() {
        console.log("I'm making noise");
      }
    }
  
    // Dog class extends Animal, adding specific behavior
    class Dog extends Animal {
      constructor(name: string, species: string) {
        super(name, species);
      }
  
      // Dog-specific behavior
      makeBark() {
        console.log("I'm barking");
      }
    }
  
    // Cat class extends Animal, adding specific behavior
    class Cat extends Animal {
      constructor(name: string, species: string) {
        super(name, species);
      }
  
      // Cat-specific behavior
      makeVau() {
        console.log("I'm Vau Vau");
      }
    }
  
    const dog = new Dog("Doggy", "Dog");
    const cat = new Cat("Meoww", "Cat");
  
    // Type guard function to check if the animal is a Dog
    const isDog = (animal: Animal): animal is Dog => {
      return animal instanceof Dog;
    }
  
    // Type guard function to check if the animal is a Cat
    const isCat = (animal: Animal): animal is Cat => {
      return animal instanceof Cat;
    }
  
    // This function uses type guards to handle each animal type intelligently
    const getAnimal = (animal: Animal) => {
      if (isDog(animal)) {
        // If animal is a Dog, call the Dog-specific method
        animal.makeBark();
      } else if (isCat(animal)) {
        // If animal is a Cat, call the Cat-specific method
        animal.makeVau();
      } else {
        // Fallback to default behavior if it's neither a Dog nor a Cat
        animal.makeSound();
      }
    }
  
    // Example usage of the function
    getAnimal(cat);  // Output: I'm Vau Vau
    getAnimal(dog);  // Output: I'm barking
  }
  