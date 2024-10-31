{
    //
// Union Types

// Using union type for specifying FrontEndDeveloper levels
type FrontEndDeveloper = "notQualified" | "juniorDeveloper";

const newDeveloper: FrontEndDeveloper = "notQualified"; // Valid value

// Creating a user object with union types for gender and blood group
type User = {
    name: string;
    email: string;
    gender: "male" | "female"; // Restricting values to "male" or "female"
    bloodGroup: "A+" | "B+" | "O+"; // Restricting blood groups to certain types
}

const user1: User = {
    name: "Nazim",
    email: 'nazimmuddin10@gmail.com',
    gender: "male",
    bloodGroup: "B+" // Assigning valid blood group
}

// Intersection Types

// Defining WebDeveloper type with an array of skills and a required designation
type WebDeveloper = {
    skills: string[];
    designation1: "Web developer"; // Fixed value for designation
}

// Defining BackendDeveloper with an array of skills and optional designation
type BackendDeveloper = {
    skills: string[];
    designation2?: "Backend developer"; // Optional field for designation
}

// FullStackDeveloper inherits skills from both WebDeveloper and BackendDeveloper
type FullStackDeveloper = WebDeveloper & BackendDeveloper;

const fullstackDeveloper: FullStackDeveloper = {
    skills: ['Express', 'SQL', 'Node'], // Combined skills of both types
    designation1: 'Web developer' // Required designation from WebDeveloper
    // designation2 is optional
}


//

}