// for (let i = 1; i <=10; i++) {
//     console.log(i)
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

// for (let i = 1; i <= 1000; i *= 10) {
//     console.log(i);
// }

// for (let i = 25; i >= 0; i -= 5) {
//     console.log(i);
// }


//excercise
// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].toUpperCase());
// }


// Number guessing game

// let maximum = parseInt(prompt("Enter the maximum number!!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = parseInt(prompt("Enter your first guess!!"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     attempts++;
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess: ");
//     } else {
//         guess = prompt("Too low! Enter a new guess: ");
//     }
// }
// if (guess === 'q') {
//     console.log("OK, You quit!")
// } else {
//     console.log("Congrats! You Win!!")
//     console.log(`You Got It!! It took ${attempts} guesses`);
// }


const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['George', 'Jimmy', 'Julrry', 'Emma'], 
    ['Lisa', 'Mike', 'Anna', 'Stephanie']
]

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}