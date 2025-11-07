import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';  
import authRoutes from './routes/auth.js';

dotenv.config();
const app = express();

// Enable CORS
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
