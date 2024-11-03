{
    // Mapped types example

const arrOfNumbers: number[] = [1, 4, 6];
const arrOfString = arrOfNumbers.map((number) => number.toString());
console.log(arrOfString);

type Area = {
  height: number;
  width: number;
};

// Lookup type to extract the type of a property
type Height = Area["height"];

// Mapped type to transform or maintain types
type AreaString<T extends Record<string, any>> = {
  [i in keyof T]: string; // In this case, transforming all properties to string
};

// Example usage:
const area1: AreaString<Area> = {
  height: '400',
  width: '300',
};

console.log(area1);

}