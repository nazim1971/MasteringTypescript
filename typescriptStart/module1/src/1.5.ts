//Reference type ==> object

const user:{
company: "Node-devs";// type --> literal type
readonly firstName: string; // readonly is access modifier
middleName?: string;// type --> optional
lastName: string;
ifMarried: boolean;
} = {
    company:"Node-devs",
    firstName : "Md",
    lastName: "Uddin",
    ifMarried: false
}

console.log(user.firstName); 