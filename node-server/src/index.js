// src/index.js

import express from 'express';
import mongoose from 'moongoose';
import walletRoutes from './routes/wallet.routes.js';

const app = express();

// Middleware to read JSON body

app.use(express.json());

// Routes

app.use('/api/wallet', walletRoutes);

// MongoDB connection

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

const PORT = process.env.port || 4000;

app.listen(PORT, ()=>{
    console.log('Server is running on port', PORT);
});                                                         