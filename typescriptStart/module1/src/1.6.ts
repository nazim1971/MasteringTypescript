// Normal function
function add (num1:number , num2:number) {
    return num1 + num2;
}

add(2,10);

//Arrow Function   
const addArrow = (num1:number, num2:number): number => num1+num2

//object --> function --> method

const poorUser = {
    name:"Nazim",
    balance: 0,
    addBalance(balance:number): string{
        return `My New Balance is : ${this.balance+ balance}`;
    }
}

const arr: number[] = [1,5,7,10];

const newArr: number[] = arr.map((e:number): number => e*e)