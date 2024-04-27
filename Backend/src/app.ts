import express from "express";

import { errorHandler, notFound } from "./middleware/errorMiddleware";

const app = express();

// Routes
app.get("/", (req, res, next) => {
  res.json({ message: "Server ready" });
});

// Error handlers
app.use(errorHandler);
app.use(notFound);

export default app;
