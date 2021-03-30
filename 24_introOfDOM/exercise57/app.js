const lines = document.querySelectorAll('li')
const highlights = document.querySelectorAll('.highlight')

// for (let i = 0; i < lines; i++) {
//     lines[i].classList.add('highlight')
// }
// for (let i = 0; i < highlights.length; i++) {
//     highlights[i].classList.toggle('highlight')
// }

for (let i = 0; i < lines.length; i++) {
    if (lines[i].classList.contains('highlight') === true) {
        lines[i].classList.toggle('highlight')
    } else {
        lines[i].classList.add('highlight')
    }
}
