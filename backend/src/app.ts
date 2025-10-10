import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes';
import blogRoutes from './routes/blogRoutes';
import caseStudyRoutes from './routes/caseStudyRoutes';
import { notFound, errorHandler } from './middleware/errorHandler';
import rateLimit from 'express-rate-limit';
import { env } from './config/env';

// Rate limiters
const authLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 20,
	standardHeaders: true,
	legacyHeaders: false
});

const writeLimiter = rateLimit({
	windowMs: 10 * 60 * 1000,
	max: 100,
	standardHeaders: true,
	legacyHeaders: false
});

const app = express();

// CORS configuration for production deployment
const corsOptions = {
  origin: [
    "https://bhisey.com",
    "https://www.bhisey.com",
    "https://bhisey.vercel.app",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3001"
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));

app.get('/health', (_req: express.Request, res: express.Response) => res.json({ status: 'ok' }));

app.use('/api/auth', authLimiter, authRoutes);
app.use('/api/blogs', writeLimiter, blogRoutes);
app.use('/api/case-studies', writeLimiter, caseStudyRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;