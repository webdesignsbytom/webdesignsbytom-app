import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
// Path
import { join } from 'path';
import * as url from 'url';
// Import routers
import userRouter from './routes/users.js';
import eventRouter from './routes/events.js';
import authRouter from './routes/auth.js'
import notificationRouter from './routes/notifications.js'
import componentRouter from './routes/components.js'
import pageRouter from './routes/pages.js'
import projectRouter from './routes/projects.js'
import complaintRouter from './routes/complaints.js'
import reviewRouter from './routes/reviews.js'
import paletteRouter from './routes/palettes.js'

const app = express();
app.disable('x-powered-by');

// Add middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set the port and URl
const PORT = process.env.PORT || 4000;
const HTTP_URL = process.env.HTTP_URL || 'https://webdesignsbytom-app.vercel.app';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// Start of actions
app.use('/users', userRouter);
app.use('/events', eventRouter);
app.use('/notifications', notificationRouter);
app.use('/components', componentRouter);
app.use('/projects', projectRouter);
app.use('/complaints', complaintRouter);
app.use('/reviews', reviewRouter);
app.use('/color-palette', paletteRouter);
app.use('/pages', pageRouter);
app.use('/', authRouter)


app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: join(__dirname, '..', 'public', 'views'),
  });
  console.log('res', res);
});

// For all unknown requests 404 page returns
app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(join(__dirname, '..', 'public', 'views', 'error404.html'));
  } else if (req.accepts('json')) {
    res.json({ message: '404 Not Found' });
  } else {
    res.type('txt').send('404 Not Found');
  }
});

// Start our API server
app.listen(PORT, () => {
  console.log(
    `\nServer is running on ${HTTP_URL}${PORT} \n This no longer consumes souls\n`
  );
});
