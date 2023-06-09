// Load our .env file
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
// Path
import { join } from 'path';
import * as url from 'url';
// Import routers

import userRouter from './routes/users.js';
import authRouter from './routes/auth.js';
import courseRouter from './routes/courses.js';
import examRouter from './routes/exams.js';
import semesterRouter from './routes/semesters.js';
import bugReportsRouter from './routes/bugReports.js';
import questionsRouter from './routes/questions.js';

const app = express();
app.disable('x-powered-by');

// Add middleware
app.use(
  cors({ 
    origin: "*"
  })
);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create path to HTML
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// Routes
app.use('/', authRouter);
app.use('/users', userRouter);
app.use('/courses', courseRouter);
app.use('/exams', examRouter);
app.use('/semesters', semesterRouter);
app.use('/bug-reports', bugReportsRouter);
app.use('/questions', questionsRouter);

// Set the port and URl
const PORT = process.env.PORT || 4000;
const HTTP_URL = process.env.HTTP_URL || 'http://localhost:'

// Server interface page
app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: join(__dirname, 'views'),
  });
});

// For all unknown requests 404 page returns
app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ message: '404 Not Found' });
  } else {
    res.type('txt').send('404 Not Found');
  }
});

app.use((error, req, res, next) => {
  console.error(error)

  if (error.code === 'P2025') {
    return sendDataResponse(res, 404, 'Record does not exist')
  }

  return sendDataResponse(res, 500)
})

// Start our API server
app.listen(PORT, () => {
    console.log(`\nServer is running on ${HTTP_URL}${PORT} - this no longer consumes souls\n`);
});
