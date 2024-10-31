{
    // TypeScript example with good practices

// Define a type for Student with optional contact number
type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string; // Optional field
    address: string;
}

// Create two student objects with proper formatting
const student1: Student = {
    name: 'Nazim',
    age: 25,
    gender: "Male",
    contactNo: "18677893", // Optional field is provided
    address: 'Mohammadpur'
}

const student2: Student = {
    name: 'Rock',
    age: 24,
    gender: "Male",
    // Optional field not provided here
    address: 'Mohammadpur Daku area'
}

// Define more specific types for clarity
type UserName = string;
type IsAlive = boolean;

// Use specific types in variables for better code clarity
const userName: UserName = "Nazim";  // Explicit typing improves readability
const isAlive: IsAlive = true;       // Type aliasing makes it more descriptive

// Define a type for a function that adds two numbers
type Add = (a: number, b: number) => number;

// Implement the add function following the defined type
const add: Add = (num1, num2) => num1 + num2;

// Example usage of the add function
console.log(add(10, 5)); // Output: 15

}