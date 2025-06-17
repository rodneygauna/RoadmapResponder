import express from "express";
import cors from "cors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// Express app setup
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// Examples
// import exampleRoutes from './routes/exampleRoutes.js';
// app.use('/api/examples', exampleRoutes);
import aiRoutes from "./routes/ai.js";
app.use("/v1/api/ai", aiRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

export default app;
