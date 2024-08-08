// Challenge 1: Fix the syntax error
console.log("Hello, World")

// Challenge 2: Fix the reference error
// let num = 10;
// console.log(`num is ${Num}`);

let num = 10;
console.log(`num is ${num}`);

// Challenge 3: Fix the issue with this if statement
// let isRainy = true
// if (israiny is not true) {
//   console.log("No umbrella needed!")
// }

let isRainy = true;
if (!isRainy){
  console.log("No umbrella needed!");
}


// Challenge 4: Fix the issue with this if statement
// let age = 16;
// if age > 18 or age = 18 {
//   console.log("You can vote!");
//   else {
//     console.log("You can't vote.");
//   }
// } 

let age = 16
if (age > 18 || age === 18) {
  console.log("You can vote!")
}else{
  console.log("You can't vote.")
}
// Challenge 5: Find and fix the issue with this while loop
// let counter = 0
// while counter <= 5) 
//   console.log(count);
//   counter++;
// }

let counter = 0
while(counter <=5){
  console.log(counter)
  counter++

}

// Challenge 6: Find and fix the issue with this while loop
// let count = 1;
// while (count > 5) {
//   console.log(count);
//   count++;
// }

let count = 1
while (count <= 5) { // Updated code
  console.log(count);
  count++;
}