const testScores = {
    karen: 65,
    june: 98,
    Mike: 70,
    Kim: 40,
    Tim: 89,
    Misa: 79,
    Kai: 60
}

let total = 0;
// for (let score of Object.values(testScores)) {
//     total += score;
// }

let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}

console.log(total / scores.length);