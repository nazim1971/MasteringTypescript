{
    //
// Interface with Generics

// Generic interface 'Developer' with two generic types: T (required) and Y (optional with default value 'null').
interface Developer<T, Y = null> {
    name: string;
    computer: {
        brand: string;
        model: string;
        releaseYear: number;
    };
    smartWatch: T;  // T represents the type of the smartwatch
    bike?: Y;       // Y represents the optional type of the bike
}

// Defining the 'AppleWatch' interface for the smartwatch structure
interface AppleWatch {
    brand: string;
    model: string;
    price: number;
}

// Creating an object for a developer who owns an Apple Watch but does not have a bike
const brokenDeveloper: Developer<AppleWatch> = {
    name: "Nazim",
    computer: {
        brand: "HP",
        model: "G8",
        releaseYear: 3020  // Assuming a futuristic release year
    },
    smartWatch: {
        brand: "Apple",
        model: 'Ap-5',
        price: 450
    }
};

// Defining the 'Bike' interface for the bike structure
interface Bike {
    brand: string;
    CC: number;    // Engine capacity
    price: number;
}

// Creating an object for a developer who owns both an Apple Watch and a bike
const richDeveloper: Developer<AppleWatch, Bike> = {
    name: "Nazim",
    computer: {
        brand: "HP",
        model: "G8",
        releaseYear: 3020
    },
    smartWatch: {
        brand: "Apple",
        model: 'Ap-5',
        price: 450
    },
    bike: {
        brand: "Yamaha",   // Changed the brand to make it more realistic
        CC: 350,
        price: 4500        // Updated price to be more aligned with bike pricing
    }
};
//

}