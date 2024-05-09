#! /usr/bin/env node
import inquirer from "inquirer";
let simpleCalculator = await inquirer.prompt([
    {
        name: "firstNumber",
        type: "number",
        message: "Enter first number"
    },
    {
        name: "secondNumber",
        type: "number",
        message: "Enter second number"
    },
    {
        name: "SelectOperator",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        message: "select an operator for the calculation"
    }
]);
//conditions
if (simpleCalculator.SelectOperator === "Addition") {
    console.log(simpleCalculator.firstNumber + simpleCalculator.secondNumber);
}
else if (simpleCalculator.SelectOperator === "Subtraction") {
    console.log(simpleCalculator.firstNumber - simpleCalculator.secondNumber);
}
else if (simpleCalculator.SelectOperator === "Multiplication") {
    console.log(simpleCalculator.firstNumber * simpleCalculator.secondNumber);
}
else if (simpleCalculator.SelectOperator === "Division") {
    console.log(simpleCalculator.firstNumber / simpleCalculator.secondNumber);
}
else {
    console.log("Please enter a valid number");
}
