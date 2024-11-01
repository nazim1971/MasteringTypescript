{
    //generic type

    type GenericArray<T> = Array<T>;

    const Name: GenericArray<string> = ['x','y','z'];
    const roleNumber: GenericArray<number> = [1,4,7];

    const user : GenericArray<{name: string, age: number}> = [
        {
            name: 'Nazim',
            age: 200
        },
        {
            name: 'Nazim uddin',
            age: 400
        }

    ]

    // Generic tuple
    type GenericTuple <X,Y> = [X,Y]

    const man : GenericTuple<string, string> = ['Mr John', 'Mrs. Sonia'];
    

    const USerWithId : GenericTuple<number, {name: String, age: number}> = [1020, {name: "Nazim", age: 26}]
    //

}