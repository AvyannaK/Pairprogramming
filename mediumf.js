// Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object; A driveToWork method, driveAroundTheWorld method, and runErrands method. Each of these methods should affect the car’s mileage adding to it each time and console logging the old mileage and the new mileage.
// driveToWork = 33 miles
// driveAroundTheWorld = 24,000 miles
// runErrands = 30 miles 
// Example 1:
// car.driveToWork();
// Output: old mileage: 2000 | new mileagea: 2033
// Explanation: 2000 + 33 = 2033
// Example 2:
// // car.driveAroundTheWorld();
// // Output: old mileage: 2033 | new mileagea: 26033 
// // Example 2:
// // car.runErrands();
// // Output: old mileage: 26033 | new mileagea: 26063

// let car = {
//   make: "Nissan",
//   model: "GTR",
//   color: "Grey",
//   mileage: 3000,
//   isWorking: true,


//   driveToWork: () => {
//     alert(` Old Mileage: ${car.mileage}`);
//     console.log(car.mileage);
//     car.mileage = car.mileage + 8;
//     alert(` New Mileage : ${car.mileage}`);
//   },

//   driveAroundTheWorld: () => {
//     alert(`Old Mileage: ${car.mileage}`);

//     car.mileage = car.mileage + 24000;

//     alert(`New Mileage: ${car.mileage}`);
//     alert("The Car needs a tune-up");

//     isWorking = false;
//   },

//   function runErrands(car) {
//     console.log('\n')
//     console.log('runErrands');
//     // printing old milage
//     console.log('Old milage : ' + this.milage);
//     // setting new milage to 30 miles
//     this.milage = '30 miles'
//     console.log('New Milage : ' + this.milage);
//   }

//   console.log(runErrands)


  let Car = {
    make: 'Ford',
    model: 'Raptor',
    year: 2014,
    milage: '200',
    color: 'red',
    // creating driveToWork method
    driveToWork: function () {
        console.log('driveToWork');
        // setting new milage to 33 miles
        this.milage = '33 miles'
        console.log('New Milage : ' + this.milage);
    },
    // creating driveAroundTheWorld method
    driveAroundTheWorld: function () {
        console.log('\n')
        console.log('driveAroundTheWorld');
        // printing old milage
        console.log('Old milage : ' + this.milage);
        // setting new milage to 24000 miles
        this.milage = '24000 miles'
        console.log('New Milage : ' + this.milage);
    },
    // creating runErrands method
    runErrands: function () {
        // console.log('\n')
        // console.log('runErrands');
        // printing old milage
        this.milage = '30 miles'
        console.log('Old milage : ' + (Car.mileage + this.milage));
        // setting new milage to 30 miles
        // this.milage = '30 miles'
        // console.log('New Milage : ' + this.milage);

    }
}

Car.runErrands()