{
    //Type guard using instance of

class Animal {
    name: string;
    species: string;

    constructor (name:string, species: string){
        this.name = name;
        this.species = species;
    }

    makeSound(){
        console.log("Im making noise");
    }
}

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name,species)
        }
        makeBark() {
            console.log("I'm barking");
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name,species)
        }
        makeVau() {
            console.log("I'm Vau Vau");
        }
    }

    const dog = new Dog("Doggy", "Dog");
    const cat = new Cat("Meoww", "Cat");

    // smart way to handle 

    const isDog = (animal: Animal) : animal is Dog => {
        return animal instanceof Dog
    }

    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat
    }

    const getAnimal = (animal : Animal) => {
      if(isDog(animal)) {
        animal.makeBark()
      }
      else if (isCat(animal)) {
        animal.makeVau()
      }else{
        animal.makeSound()
      }
    }

    getAnimal(cat)
    //
}