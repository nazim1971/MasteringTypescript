{
    //
// Constraints in TypeScript

// Generic function with constraints that ensures the object has 'name', 'id', and 'email' properties
const addCourseToStudent = <T extends { name: string; id: number; email: string }>(
    student: T
): T & { course: string } => {
    const course = "Full Stack Development"; // Default course
    return {
        ...student,
        course,
    };
};

// Example of adding a course to a student object with the required properties (name, id, email)
const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string; // Additional property
}>({
    id: 36,
    name: "Nazim",
    email: "nazimmuddin10@gmail.com",
    devType: "All Rounder",
});

// Trying to add a course to an object without matching the constraints will cause a TypeScript error
// Uncommenting the following line will result in a TypeScript error as 'test' is not part of the constraint
/*
const student2 = addCourseToStudent({
    test: 'test',
    id: 36,
    name: "Nazim",
    email: "nazimmuddin10@gmail.com",
    devType: "All Rounder",
});
*/

console.log(student1); 
// Output: { id: 36, name: 'Nazim', email: 'nazimmuddin10@gmail.com', devType: 'All Rounder', course: 'Full Stack Development' }
//

}