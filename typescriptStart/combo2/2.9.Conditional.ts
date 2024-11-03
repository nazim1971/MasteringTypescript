{
    // Conditional Type

    type a1 = number;
    type b1 = undefined;

    // Conditional type that checks if a1 is null
    type x = a1 extends null ? true : false; // false, because a1 is number

    // Nested conditional type
    type y = a1 extends null 
        ? true 
        : b1 extends undefined 
            ? undefined 
            : any; // Since a1 isn't null but b1 is undefined, y will be undefined

    // Example with keyof and conditional types
    type Honey = {
        bike: string;
        car: string;
        ship: string;
    }

    // keyof Honey results in "bike" | "car" | "ship"

    // Conditional type to check if a given vehicle is a key of Honey
    type CheckVehicle<T> = T extends keyof Honey ? true : false;

    // Testing CheckVehicle with a valid and an invalid key
    type HasTractor = CheckVehicle<"Tractor">; // false, "Tractor" is not a key of Honey
    type HasCar = CheckVehicle<"car">; // true, "car" is a key of Honey

    //
}
