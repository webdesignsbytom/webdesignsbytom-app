import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
// Path
import { join } from 'path';
import * as url from 'url';
// Import routers
import userRouter from './routes/users.js'

const app = express();
app.disable('x-powered-by');

// Add middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Set the port and URl
const PORT = process.env.PORT || 4000;
const HTTP_URL = process.env.HTTP_URL || `http://localhost:`

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// Start of actions
app.use('/users', userRouter)

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: join(__dirname, '..', 'public', 'views')});
})

// For all unknown requests 404 page returns
app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(join(__dirname, '..', 'public', 'views', 'error404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})

// Start our API server
app.listen(PORT, () => {
    console.log(`\nServer is running on ${HTTP_URL}${PORT} \n This no longer consumes souls\n`);
});
