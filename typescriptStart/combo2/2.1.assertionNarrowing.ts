{
    //Type assertion
    let anything : any;

    anything = "Next level Web Developer";

    (anything as string);

    const kgToGm = (value: string | number) => {
        if (typeof value === "string"){
            const convertedValue = parseFloat(value)*1000;
            return `The converted value is  ${convertedValue}`;
        } 
        else if ( typeof value === "number") {
            return value*1000 ;
        }
    }

   
   const result1 =  kgToGm(5000) as number;
   const result2 = kgToGm("2000") as string;

   console.log({result1}, {result2});

   type CustomError = {
    message: string;
   }
   try {
    
   } catch (error) {
   
    console.log((error as CustomError).message)
   }
    //
}