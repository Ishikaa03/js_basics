// const marks = {
//     harry : 98,
//     rohan : 70,
//     aakash : 45
// };


// const studentNames = Object.keys(marks);


// for (let i = 0; i < studentNames.length; i++) {
//     const student = studentNames[i]; 
//     console.log(`${student}: ${marks[student]}`); 
// }


// const marks = {
//     harry : 98,
//     rohan : 70,
//     aakash : 45
// };

// for(let student in marks){
//     console.log(`${student}:${marks[student]}`)
// }

// const correctno = 5;

// let userInput;
// while(true){
//     userInput = prompt("enter no.");
    
//     const num = Number(userInput);
//     if(isNaN(num)){
//         console.assertlog("enter valid no.");
//         continue;
//     }

//     if(num == correctno){
//         console.log("correct!");
//         break;
//     }
//     else{
//         console.log("try again");
//     }
// } error

const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = []; // Array to store the numbers

function askForNumber(index) {
    if (index < 5) {
        rl.question(`Enter number ${index + 1}: `, (input) => {
            const num = parseFloat(input); // Convert input to a number

            // Check if the input is a valid number
            if (isNaN(num)) {
                console.log("Please enter a valid number.");
                askForNumber(index); // Ask again for the same index
            } else {
                numbers.push(num); // Store the valid number
                askForNumber(index + 1); // Ask for the next number
            }
        });
    } else {
        calculateMean(); // Once we have 5 numbers, calculate the mean
    }
}

function calculateMean() {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0); // Calculate the sum
    const mean = sum / numbers.length; // Calculate the mean
    console.log(`The mean of the entered numbers is: ${mean}`);
    rl.close(); // Close the readline interface
}

// Start the process by asking for the first number
askForNumber(0);