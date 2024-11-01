{
    //
// Interfaces and Types

// Defining a User type with basic properties
type User1 = {
    name: string;
    age: number;
};

// Extending User1 using intersection types to include role property
type UserWithRole1 = User1 & { role: string };

const user2: UserWithRole1 = {
    age: 20,
    name: 'Nazim',
    role: "Admin"
};

// Defining an interface User2
interface User2 {
    name: string;
    age: number;
}

// Extending User2 using interface to include role property
interface UserWithRole2 extends User2 {
    role: string;
}

const user3: UserWithRole2 = {
    age: 20,
    name: 'Nazim',
    role: "Admin"
};

// Another instance of User2 without role
const user1: User2 = {
    age: 20,
    name: 'Nazim'
};

// Working with array types using both type and interface

// Defining Roll as a number array type
type Roll = number[];

const rollNumber1: Roll = [1, 2, 3];

// Defining an interface to represent an indexable array
interface Roll2 {
    [index: number]: number;
}

const rollNumber2: Roll2 = [1, 2, 3];



}