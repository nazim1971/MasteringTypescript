{
    // Type assertion
    let anything: any;
    anything = "Next level Web Developer";

    // Assert the type as a string
    (anything as string);

    // Function to convert kilograms to grams with type flexibility
    const kgToGm = (value: string | number): string | number => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is ${convertedValue} grams`;
        } else if (typeof value === "number") {
            return value * 1000;
        }
        return "Invalid input";
    }

    // Type assertion for function results
    const result1 = kgToGm(5000) as number;
    const result2 = kgToGm("2000") as string;

    console.log({ result1 }, { result2 });

    // Custom error type definition
    type CustomError = {
        message: string;
    }

    // Try-catch block with type assertion for error
    try {
        // Simulate error
        throw { message: "An unexpected error occurred" };
    } catch (error) {
        console.log((error as CustomError).message);
    }
}
