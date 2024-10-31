{
    //
// Ternary Operator, Optional Chaining, and Nullish Coalescing Operator

const age: number = 20;

// Using ternary operator for a concise conditional statement
const isAdult = age >= 18 ? "adult" : "not adult";
console.log(`Is Adult: ${isAdult}`); // Output: Is Adult: adult

// Nullish coalescing operator (??)
// Using nullish coalescing for defaulting to "Guest" if `isAuthenticated` is null or undefined
const isAuthenticated = ''; // Empty string is considered a valid falsy value

const result1 = isAuthenticated ?? "Guest"; // Still outputs empty string because ?? only checks for null or undefined
const result2 = isAuthenticated ? isAuthenticated : "Guest"; // Outputs "Guest" since it's a falsy value
console.log({ result1 }, { result2 });

// Optional chaining with nullish coalescing operator
// Type definition with optional fields

type Address = {
    city: string;
    road: number;
    house: string;
    presentAddress: string;
    permanentAddress?: string; // Optional field
}

type User = {
    name: string;
    address: Address;
}

// Object with nested structure
const user: User = {
    name: 'Nazim',
    address: {
        road: 10,
        city: "Dhaka",
        house: "Royal Home",
        presentAddress: "Daku Area"
    }
}

// Optional chaining combined with nullish coalescing operator
const permanentAddress = user?.address?.permanentAddress ?? "No permanent address available";
console.log({ permanentAddress });

//

}