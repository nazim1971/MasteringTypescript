"use strict";
// Normal function declaration
{
    function add(num1, num2) {
        return num1 + num2;
    }
    add(2, 10); // Calls the function with arguments 2 and 10
    // Arrow Function (shorter syntax)
    const addArrow = (num1, num2) => num1 + num2;
    // Object with method (function inside object)
    const poorUser = {
        name: "Nazim",
        balance: 0,
        // Method to add balance and return a string
        addBalance(balance) {
            return `My New Balance is: ${this.balance + balance}`;
        }
    };
    // Array of numbers
    const arr = [1, 5, 7, 10];
    // Using map function to square each element of the array
    const newArr = arr.map((e) => e * e);
}
