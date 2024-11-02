{
    //Constraints in typescript
    const addCourseToStudent = <T extends {name: string, id: number, email: string}>(student: T): T & { course: string } => {
        const course = "Full Stack Development"; // Assume a default course
        return {
            ...student,
            course,
        };
    };
    
    // Example of adding a course to a student object
    const student1 = addCourseToStudent <{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({
        id: 36,
        name: "Nazim",
        email: "nazimmuddin10@gmail.com",
        devType: "All Rounder",
    });

    const student2 = addCourseToStudent({
        test: 'test',
        id: 36,
        name: "Nazim",
        email: "nazimmuddin10@gmail.com",
        devType: "All Rounder",
    });
    //
}