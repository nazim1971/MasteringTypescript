{
    //
// Generic Constraint with keyof operator

type Vehicle = {
    bike: string;
    car: string;
    ship: string;
};

// Example of using string literals for owner types
type Owner1 = "Bike" | "Car" | "Ship";

// Using keyof to create a union of all the keys from the Vehicle type
type Owner2 = keyof Vehicle;

// Generic function to get the property value of an object based on the provided key
const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
};

// Example object
const user = {
    name: "Nazim",
    age: 25,
    address: "Dhaka",
};

// Using the function to get the value of a specific property
const result = getPropertyValue(user, "name"); // TypeScript ensures 'name' exists in 'user'

console.log(result); // Output: 'Nazim'

//

}