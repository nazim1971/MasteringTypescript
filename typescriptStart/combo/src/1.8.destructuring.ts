// Destructuring example with objects and arrays
{
    // Object destructuring
    const user = {
        id: 360,
        name: {
            firstName: "Md",
            middleName: "Nazim", // Fixed the typo here
            lastName: "Uddin"
        },
        contactNum: 8090706,
        address: "Norway"
    }

    // Destructuring the contactNum and lastName from the user object
    const { contactNum : phoneNUm, name: { lastName } } = user;

    console.log(`Contact Number: ${phoneNUm}, Last Name: ${lastName}`);

    // Array destructuring
    const myBuddy = ['Juliet', 'Himel', 'Tom', 'Pitbull', 'Angelina', 'Leo'];

    // Skip the first two elements, and extract the third (bestBuddy) and the rest (tempBuddy)
    const [, , bestBuddy, ...tempBuddy] = myBuddy;

    console.log(`Best Buddy: ${bestBuddy}, Temp Buddies: ${tempBuddy.join(', ')}`);
}
