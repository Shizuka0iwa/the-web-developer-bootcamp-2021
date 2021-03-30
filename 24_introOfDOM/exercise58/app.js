const parentDiv = document.getElementById('container');

for (let i =0; i < 100; i++) {
    const button = document.createElement('button');
    button.innerText = 'yay!';
    parentDiv.appendChild(button);
}