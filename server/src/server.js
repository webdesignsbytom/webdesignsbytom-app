// Load our .env file
require('dotenv').config();

const express = require('express');
const app = express();
// Used for __dirname
const path = require('path')

const cors = require('cors');
const morgan = require('morgan');

app.disable('x-powered-by');

// Add middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set the port and URl
const PORT = process.env.PORT || 4000;
const URL = process.env.URL || 'http://localhost:'

// Connect server to display this file from http://localhost:4000
app.use('/', express.static(path.join(__dirname, '..', 'public', 'index.html')));

// app.get('/', (req, res) => {
//     res.sendFile('index.html', {root: path.join(__dirname, '..', 'public')});
// })

// For all unknown requests 404 page returns
app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, '..', 'public', 'error404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})

// Tell express to use your routers here
const userRouter = require('./routes/users');

// app.use('/users', userRouter);
// app.use('/', userRouter);

// Start our API server
app.listen(PORT, () => {
    console.log(`\nServer is running on ${URL}${PORT} - this no longer consumes souls\n`);
});
