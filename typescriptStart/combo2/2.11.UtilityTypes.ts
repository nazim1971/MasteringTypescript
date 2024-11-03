{
    // Utility types
// Pick
type Person = {
    name: string;
    age: number;
    email?: string;
    contactNumber: string;
  };
  
  type NameAge = Pick<Person, "name" | "age">;
  
  // Omit
  type ContactInfo = Omit<Person, 'name' | 'age'>;
  
  // Required
  type PersonRequire = Required<Person>;
  
  // Partial
  type PersonPartial = Partial<Person>;
  
  // Readonly
  type PersonReadOnly = Readonly<Person>;
  
  const person1: PersonReadOnly = {
    age: 20,
    contactNumber: '3434d34234',
    name: "Md. Nazim",
    email: 'naizmmuddin10@gmail.com'
  };
  
  // person1.name = "Mr. Nazim"; // Error: Cannot assign to 'name' because it is a read-only property.
  
  // Record
  type MyObj = Record<string, string | number>;
  
  const obj1: MyObj = {
    a: "aaaa",
    b: "bbbb",
    c: "eedrfd",
    d: 45
  };
  
  const EmptyObj: {} = {}; // Prefer specific typing when possible
  
}