{
    // Task 1: Basic Data Types and First Program
// Objective: Write a TypeScript program that outputs a welcome message.

// Instructions:

// Create a TypeScript program.
// Print the following message to the console:
// Hello World, I will complete this course successfully and become a Next level Web Developer!


//console.log("Hello World, I will complete this course successfully and become a Next level Web Developer!");
}

// {

//     Task 2: Functions, Optional, and Literal Types
// Objective: Create a function with parameters and an optional literal type.

// Instructions:

// Define a function that takes:
// name (string)
// age (number)
// role (optional, with type 'admin' | 'user' | 'guest')
// The function should log these values or perform a basic action.



//     type PrintUser = {
//         name: string;
//         age: number;
//         role?: "admin" | "user" | "guest"
//     }
    
//     const printUser = (user: PrintUser) =>{
//         const {name, age, role} = user;

//         console.log(`Name: ${name}, Age: ${age} ${role? `, Role: ${role}` : '' }`);
//     }

//     printUser({name: "Naizm",age: 30, role:"admin"})
    
// }

// {


//     Task 3: Object Types, Type Alias, & Literal Types
// Objective: Define a structured Person object using Type Aliases.

// Instructions:

// Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.




//     type Person = {
//         name: string;
//         address: string;
//         hair: string;
//         eyeColor: string; // 'String' should be lowercase 'string'
//         income: number;
//         expense: number;
//         hobbies: string[]; // Array of hobbies
//         familyMembers: string[]; // Array of family members' names
//         job: string; // The person's job title
//         skills: string[]; // Array of skills
//         maritalStatus: 'single' | 'married' | 'divorced'; // Literal types for marital status
//         friends: string[]; // Array of friends' names
//     };

//     const person: Person = {
//         name: 'md. Nazim',
//         address: 'Dhaka',
//         hair: "Black",
//         eyeColor: 'BLue',
//         income: 0,
//         expense: 1000,
//         hobbies: ['Coding', 'travaling'],
//         familyMembers: ['mother', 'sister'],
//         job: 'Unemployed',
//         skills: ['Full Stack Web developer', 'front-end Web developer'],
//         friends: ['john', 'Donal Trump','Osama'],
//         maritalStatus: "single"

//     }

//     console.log({person});
// }
// {

//     task 4: Union and Intersection Types
// Objective: Create union and intersection types using interfaces.

// Instructions:

// Define interfaces Book and Magazine.
// Create:
// A type that is a union of Book and Magazine.
// A type that is an intersection of Book and Magazine.


//     interface Book {
//         name: string;
//         price: number;
//         title: string;
//     }

//     interface Magazine {
//         name: string;
//         price: number;
//         writer: string;
//     }

//     type User = Book | Magazine

//     const test1:User= {
//         name: "Game of thrones",
//         price: 1000,
//         title: 'Best sale'
//     }

//     console.log({test1});
// }