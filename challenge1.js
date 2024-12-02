//student grade generator
/*
Write a function that prompts the user to input student marks. 
The input should be between 0 and 100. The output should correspond 
the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
*/
//const readline = require("readline");
//
//const r1 = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
//});

function gradeGenerator() {
    //r1.question("Input student marks (0-100): ", (input) => {
        let input = prompt("Input your marks: ")
        let mark = Number(input);

        // Validate the input
        if (isNaN(mark) || mark < 0 || mark > 100) {
            console.log("Invalid input. Please enter a number between 0 and 100.");
            return gradeGenerator(); // Retry input
        }

        // Determine the grade
        let grade;
        if (mark > 79) {
            return "A";
        } else if (mark >= 60) {
            return "B";
        } else if (mark >= 50) {
            return"C";
        } else if (mark >= 40) {
            return"D";
        } else {
            return "E";
        }

        //console.log(`The student's grade is: ${grade}`);
        //r1.close(); 
    //});
}


console.log(gradeGenerator());
