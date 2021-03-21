//  exercise 47

// input -> cleanNames([" timothee", "  darth_hater", "sassyfrassy  ", " elton jhon "])

// function cleanNames(names) {
//     let newNames = names.map(function (name) {
//         return name.trim();  
//     })
//     return newNames;
// }


//  exercise 48

// const greet = (str) => {
//     return `Hey ${str}!`;
// }


//  exercise 49

//input
//validUserNames(['hut', 'koruwngw', '123456789', '1234512345', '12345678912345'])

// const validUserNames = (usernames) => (
//     usernames.filter(names => names.length < 10)
// )


//  Exercise 50

const allEvens = (num) => num.every(n => n % 2 === 0)