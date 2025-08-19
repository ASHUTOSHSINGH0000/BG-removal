import 'dotenv/config'
import express from 'express'
import cors from 'cors';
import connectDB from './configs/mongodb.js';
import userRouter from './routes/userRoutes.js';




// App Configuration
const app = express();
const PORT = process.env.PORT || 4000;
await connectDB()

// Middleware
app.use(cors());
app.use(express.json());

// routes

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.use ( 'api/user' , userRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});