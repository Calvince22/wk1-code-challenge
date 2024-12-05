//speed detector Toy problem
/*Write a program that takes the speed of a car as input e.g 80. 
If the speed is less than 70, it should print “Ok”. Otherwise, for 
every 5 km/s above the speed limit (70), it should give the driver 
one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
*/

function checkSpeed(speed) {
    const speedLimit = 70; // Speed limit in km/h
    const demeritPointThreshold = 12; // Threshold for license suspension

    // Check if the speed is less than the speed limit
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        // Calculate demerit points for speeding
        const excessSpeed = speed - speedLimit; // Calculate how much over the limit
        const demeritPoints = Math.floor(excessSpeed / 5); // Calculate demerit points

        console.log(`Points: ${demeritPoints}`); // Print total demerit points

        // Check if points exceed threshold for license suspension
        if (demeritPoints > demeritPointThreshold) {
            console.log("License suspended");
        }
    }
}

const carSpeed = 100; 
checkSpeed(carSpeed);