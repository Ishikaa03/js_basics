
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// let numbers = [];

//qus 1,2
// function askForNumber(count) {
//     if (count === 0) {
//         // If no more numbers to ask, print the final array and close the interface
//         console.log("Final array of numbers:", numbers);
//         rl.close();
//         return;
//     }

    
    // rl.question(`Enter number ${numbers.length + 1}: `, (input) => {
    //     let number = Number(input); 
//q3
    // function askForNumber() {
    //     rl.question("Enter a number (or type 'exit' to stop): ", (input) => {
           
    //         if (input.toLowerCase() === 'exit') {
    //             // Filter numbers divisible by 10
    //             let divisibleBy10 = numbers.filter(num => num % 10 === 0);
    //             console.log("Numbers divisible by 10:", divisibleBy10);
    //             rl.close(); // Close the readline interface
    //             return;
    //         }
        
//         if (!isNaN(number)) {
//             numbers.push(number); // Add the number to the array
//             console.log(`Added ${number} to the array.`);
//         } else {
//             console.log("Please enter a valid number."); // Error message for invalid input
//         }

       
//         askForNumber(count - 1);
//     });
// }


// askForNumber(5);1

const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let squares = [];


function askForNumber() {
    rl.question("Enter a number to square (or type 'exit' to stop): ", (input) => {
        
        if (input.toLowerCase() === 'exit') {
            console.log("Array of squares:", squares);
            rl.close(); 
            return;
        }

        
        let number = Number(input);

        
        if (!isNaN(number)) {
            squares.push(number * number); 
            console.log(`Added square of ${number}: ${number * number}`);
        } else {
            console.log("Please enter a valid number.");
        }

      
    });
}


askForNumber();