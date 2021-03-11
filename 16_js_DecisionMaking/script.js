const password = prompt("Please enter a new password")

// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log("Valid password.")
//     } else {
//         console.log("Password can't have spaces")
//     }
// } else {
//     console.log("Password too short. Must be 6+ characters.")
// }

if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("Valid Password")
} else {
    console.log("Password must be 6+ characters and no space")
}