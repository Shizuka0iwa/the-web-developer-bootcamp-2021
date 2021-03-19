//  exercise 1

// function printHeart() {
//     console.log("<3");
// }

// printHeart()


//  exercise 2

// function rant(message) {
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
// }
// rant("I hate beets")


//  exercise 3

// function isSnakeEyes(die1, die2) {
//     if (die1 === 1 && die2 === 1) {
//         console.log("Snake eyes!");
//     } else {
//         console.log("Not snake eyes!");
//     }
// }


//  exercise 4

// function multiply(num1, num2) {
//     if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
//         return "unvalid value"
//     }
//     return num1 * num2;
// }


//  exercise 5

// function isShortsWeather(temperature) {
//     if (typeof(temperature) === 'number') {
//         if (temperature >= 75) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     } else{
//         return "unvalid value"
//     }
// }


//  exercise 6

// function lastElement(array) {
//     if (array.length === 0) {
//         return null;
//     }
//     else {
//         return array[array.length - 1];
//     }
// }


//  exercise 7

// function capitalize(inputStr) {
//     if (typeof(inputStr) === 'string') {
//         const firstLetter = inputStr[0].toUpperCase()
//         const followingLetter = inputStr.slice(1, inputStr.length)
//         return (firstLetter + followingLetter);
//     } else {
//         return "Please input string.";
//     }
// }


//  exercise 8

// function sumArray(input) {
//     let sum = 0
//     for (let i = 0; i < input.length; i++) {
//         if (typeof(input[i]) !== 'number') {
//             return "Input numeric array"
//         } else {
//             sum = sum + input[i]
//         }
//     }
//     return sum;
// }


//  exercise 9

const weekDays = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
}

function returnDay(num) {
    if (typeof(num) === 'number' && num >= 1 && num <= 7) {
        return Object.values(weekDays)[num - 1];
    } else {
        return null;
    }
}