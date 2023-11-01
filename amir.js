#! /usr/bin/env node 
import inquirer from "inquirer";
import { sum, subtract, multiply, divide } from "./functions.js";
import showBanner from "node-banner";
import gradient from "gradient-string";
let answers = [
    {
        name: "num1",
        type: "number",
        message: gradient.rainbow("Enter your first number"),
        validate: (input) => {
            if (isNaN(input)) {
                return "plese enter number:";
            }
            return true;
        }
    },
    {
        name: "num2",
        type: "number",
        message: gradient.rainbow("Enter your second number"),
        validate: (input) => {
            if (isNaN(input)) {
                return "plese enter number:";
            }
            return true;
        }
    },
    {
        name: "operation",
        type: "list",
        choices: ["add", "sub", "mul", "div"],
        message: gradient.rainbow("Enter your operation:"),
        validate: (input) => {
            if (isNaN(input)) {
                return "plese enter number:";
            }
            return true;
        }
    }
];
let answer = [
    {
        name: "again",
        type: "confirm",
        message: "Do you want to calculate again"
    }
];
(async () => {
    await showBanner('calcualtor', 'this calculator can perform addition,subtracton, multiplication and division', "green", "blue");
})();
async function calculator() {
    let condition = true;
    while (condition) {
        let { num2, num1, operation } = await inquirer.prompt(answers);
        if (operation === "add") {
            console.log("The sum of two numbers:", sum(num1, num2));
        }
        else if (operation === "sub") {
            console.log("The difference of two numbers:", subtract(num1, num2));
        }
        else if (operation === "mul") {
            console.log("The multiplication of two numbers:", multiply(num1, num2));
        }
        else if (operation === "div") {
            console.log("The division of two numbers:", divide(num1, num2));
        }
        let { again } = await inquirer.prompt(answer);
        condition = again;
    }
}
;
setTimeout(() => {
    calculator();
}, 1000);
