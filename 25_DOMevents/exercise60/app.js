const hello = document.querySelector('#hello')
const bye = document.querySelector('#goodbye')

hello.addEventListener('click', () => {
    console.log('hello');
})

bye.addEventListener('click', () => {
    console.log('goodbye');
})