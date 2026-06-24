import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/metricas';

app.use(cors({ origin: true, credentials: true }));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Routes
import authRouter from './routes/auth';
import surveysRouter from './routes/surveys';

app.use('/api/auth', authRouter);
app.use('/api/surveys', surveysRouter);

app.get('/', (_req, res) => {
  res.send('Métrica Survey API running');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
