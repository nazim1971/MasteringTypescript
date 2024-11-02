{
    //Conditional type

    type a1 = number;
    type b1 = undefined;

    type x = a1 extends null ? true : false;
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;
    

    type Honey = {
        bike: string;
        car: string;
        ship: string
    }

    //keyof Honey = "bike" | "car" | "ship"

    type CheckVehicle<T> = T extends keyof Honey ? true : false;

    type HasTractor = CheckVehicle<"Tractor">

    //
}