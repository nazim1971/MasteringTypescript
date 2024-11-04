{
    // Type guard using typeof & in
    
    // typeof --> type guard 
    type Alphanumeric = string | number;
  
    const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
      return typeof param1 === "number" && typeof param2 === "number"
        ? param1 + param2
        : param1.toString() + param2.toString();
    }
  
    const result1 = add(2, 3);
    console.log({ result1 }); // Output: { result1: 5 }
  
    const result2 = add("2", "3");
    console.log({ result2 }); // Output: { result2: "23" }
  
    // IN guard
    type NormalUser = {
      name: string;
    }
  
    type AdminUser = {
      name: string;
      role: "Admin";
    }
  
    const getUser = (user: NormalUser | AdminUser) => {
      if ("role" in user) {
        console.log(`My Name is ${user.name}, My Role is ${user.role}`);
      } else {
        console.log(`My Name is ${user.name}`);
      }
    }
  
    const normalUser: NormalUser = { name: "Mr. Abnormal" };
    const adminUser: AdminUser = { name: "Mr. Admin User", role: "Admin" };
  
    getUser(adminUser);  // Output: My Name is Mr. Admin User, My Role is Admin
    getUser(normalUser);  // Output: My Name is Mr. Abnormal
  }
  