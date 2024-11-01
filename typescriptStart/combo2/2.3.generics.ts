{
    //
// Generic Types

// Defining a generic array type that can hold any data type (T).
type GenericArray<T> = Array<T>;

// Example of using GenericArray for strings and numbers
const nameArray: GenericArray<string> = ['x', 'y', 'z'];
const rollNumbers: GenericArray<number> = [1, 4, 7];

// Using GenericArray for an array of objects with 'name' and 'age' fields
const users: GenericArray<{ name: string, age: number }> = [
    {
        name: 'Nazim',
        age: 200
    },
    {
        name: 'Nazim Uddin',
        age: 400
    }
];

// Generic Tuple: Allows two types (X, Y) to form a tuple.
type GenericTuple<X, Y> = [X, Y];

// Using GenericTuple for a pair of strings
const couple: GenericTuple<string, string> = ['Mr. John', 'Mrs. Sonia'];

// Defining a User type for future use in generic tuple
type User = {
    name: string;
    age: number;
};

// Using GenericTuple to combine a number (ID) with a User object
const userWithId: GenericTuple<number, User> = [1020, { name: "Nazim", age: 26 }];



}