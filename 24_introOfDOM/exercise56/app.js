const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const rainbow = document.querySelectorAll('span')
let i = 0

for (let letter of rainbow) {
    letter.style.color = colors[i];
    i++;
}