const express = require('express');
const app = express();
const morgan = require('morgan');
//const { networkInterfaces } = require('node:os');

app.use(morgan('tiny'))
app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS!!")
    next();
})

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    res.send('Sorry, you need a password!')
}

// app.use((req, res, next) => {
//     console.log("This is my first middleware!")
//     next();
//     console.log("This is my first middleware - after calling next()")
// })
// app.use((req, res, next) => {
//     console.log("This is my secound middleware!")
//     next();
// })

app.get('/', (req, res) => {
    console.log(`Request date: ${req.requestTime}`)
    res.send('HOME PAGE!')
})

app.get('/dogs', (req, res) => {
    console.log(`Request date: ${req.requestTime}`)
    res.send('WOOF WOOF!')
})

app.get('/secret', verifyPassword,  (req, res) => {
    res.send('MY SECRET IS: Sometimes I wear headphones in public so I dont talk to anyone.')
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND!')
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})