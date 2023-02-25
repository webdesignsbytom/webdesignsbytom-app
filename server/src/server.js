// Load our .env file
require('dotenv').config();

const express = require('express');
const app = express();

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

// app.get('*', (req, res) => {
//     res.status(404).json({
//       status: 'fail',
//       data: {
//         resource: 'Not found 404 error'
//       }
//     })
//   })

// Tell express to use your routers here
const userRouter = require('./routes/users');

// app.use('/users', userRouter);
// app.use('/', userRouter);

// Start our API server
app.listen(PORT, () => {
    console.log(`\nServer is running on ${URL}${PORT} - this no longer consumes souls\n`);
});
