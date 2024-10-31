{
    //
// Nullable types and unknown type handling

// Nullable type: value can be a string or null
const searchName = (value: string | null): void => {
    if (value) {
        console.log("Searching for:", value);
    } else {
        console.log('There is nothing to search');
    }
};

searchName(null); // Output: There is nothing to search

// Function to convert speed into meters per second
const getSpeedInMeterPerSecond = (value: unknown): void => {
    if (typeof value === 'number') {
        // Convert km/h to m/s for numeric input
        const convertSpeed = (value * 1000) / 3600;
        console.log(`The speed is ${convertSpeed.toFixed(2)} m/s`);
    } else if (typeof value === 'string') {
        // Split the string to extract numeric value and unit
        const [kilo, unit] = value.split(' ');
        if (unit === 'km/h') {
            const convertSpeed = (parseFloat(kilo) * 1000) / 3600;
            console.log(`The speed is ${convertSpeed.toFixed(2)} m/s`);
        } else {
            console.log('Invalid unit. Please use "km/h".');
        }
    } else {
        console.log('Wrong input type');
    }
};

// Examples of calling getSpeedInMeterPerSecond
getSpeedInMeterPerSecond(100); // Output: The speed is 27.78 m/s
getSpeedInMeterPerSecond('100 km/h'); // Output: The speed is 27.78 m/s
getSpeedInMeterPerSecond('1000 ms^-1'); // Output: Invalid unit. Please use "km/h".
getSpeedInMeterPerSecond(true); // Output: Wrong input type

// Function with never type to handle errors
const throwError = (msg: string): never => {
    throw new Error(msg);
};

// throwError('NO NO NO'); // Uncomment to trigger the error
//


}