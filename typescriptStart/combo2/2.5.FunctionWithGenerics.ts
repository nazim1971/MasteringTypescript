{
    //
// Functions with Generics

// Simple function that returns an array of strings
const createArray = (param: string): string[] => {
    return [param];
};
const res1 = createArray('Bangladesh');

// Generic function that works with any type T
const createArrayWithGenerics = <T>(param: T): T[] => {
    return [param];
};

// Using the generic function with a boolean type
const res2 = createArrayWithGenerics<boolean>(true);

// Defining a 'User' type for demonstration
type User = {
    id: number;
    name: string;
};

// Using the generic function with the 'User' type
const res3 = createArrayWithGenerics<User>({ id: 2020, name: "Nazim" });

// Generic function with two parameters of different types T and Q, returning a tuple
const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
};

// Using the tuple-based generic function with specific types
const res4 = createArrayWithTuple<string, number>("Bangladesh", 2024);

// Function to add a course property to a student object using generics
const addCourseToStudent = <T>(student: T): T & { course: string } => {
    const course = "Full Stack Development"; // Assume a default course
    return {
        ...student,
        course,
    };
};

// Example of adding a course to a student object
const student1 = addCourseToStudent({
    name: "Nazim",
    email: "nazimmuddin10@gmail.com",
    devType: "All Rounder",
});

console.log(student1); // { name: 'Nazim', email: 'nazimmuddin10@gmail.com', devType: 'All Rounder', course: 'Full Stack Development' }
//

}