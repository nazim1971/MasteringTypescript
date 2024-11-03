{
    // OPP - Inheritance
     class student {
        name: string;
        age: number;
        address: string;

        constructor (name: string, age: number, address: string){
            this.name= name;
            this.age= age;
            this.address = address;
        }

        getSleep (numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
     }

     const student1 = new student("Mr Nazim", 30, 'Dhaka');

     
    //
}