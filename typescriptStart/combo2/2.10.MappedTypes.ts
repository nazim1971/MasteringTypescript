{
    //mapped types

    const arrOfNumbers : number [] = [1,4,6];

    const arrOfString : string[] = arrOfNumbers.map((number)=> number.toString());

    console.log(arrOfString);

    type Area= {
        height: number;
        width: number;
    };

    // type AreaString= {
    //     height: string;
    //     width: string;
    // }
    
    type Height = Area["height"] // lookup type

    type AreaString <T> = {
        [i in keyof T] : T[i]
    };

    const area1 : AreaString <{height: string; width: number}> ={
        height: '400',
        width: 300
    }

    //
}