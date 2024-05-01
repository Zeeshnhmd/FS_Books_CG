import express from "express";

import { errorHandler, notFound } from "./middleware/errorMiddleware";
import userRouter from "./routes/userRoutes";

const app = express();

app.use(express.json());

// Routes
app.get("/", (req, res, next) => {
  res.json({ message: "Server ready" });
});

app.use("/api/users", userRouter);

// Error handlers
app.use(errorHandler);
app.use(notFound);

export default app;
