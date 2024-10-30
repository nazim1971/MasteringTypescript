// Demonstrating Spread and Rest Operators, and Destructuring in TypeScript

// Spread Operator
const friends: string[] = ['Ashik', 'Tommy', 'Poline'];
const friends2: string[] = ['Piku1', 'Piku2', 'Piku3'];

// Merging two arrays using spread operator
friends.push(...friends2);
console.log('Combined Friends List:', friends); // Output combined friends

// Merging two objects using spread operator
const mentors = {
    typeScript: "Mosh",
    redux: "Anisul Haque",
    dbms: 'Bro Code'
};

const mentors2 = {
    prisma: 'Herry',
    next: 'Mosh',
    cloud: 'Harish'
};

// Creating a new object with properties from both mentors
const mentorList = {
    ...mentors,
    ...mentors2
};

console.log('Mentor List:', mentorList); // Output merged mentor list

// Rest Operator
const myFriends = (...friends: string[]) => {
    // Greeting each friend using the rest parameter
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
};

// Calling the function with multiple friend names
myFriends('Mikel', 'Leao', 'Trump');
