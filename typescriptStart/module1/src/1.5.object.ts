// Reference Type ==> Object

const user: {
    company: "Node-devs"; // Literal type (company can only be "Node-devs")
    readonly firstName: string; // 'readonly' ensures this value cannot be changed after initialization
    middleName?: string; // Optional type (can be undefined)
    lastName: string;
    ifMarried: boolean;
  } = {
    company: "Node-devs", // Literal type value
    firstName: "Md", // Required value
    lastName: "Uddin", // Required value
    ifMarried: false // Required boolean value
  };
  
  // 'middleName' is optional and does not need to be provided
  