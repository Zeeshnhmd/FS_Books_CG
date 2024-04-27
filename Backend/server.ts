import app from "./src/app";
import { config } from "./config/config";
import connectDB from "./config/db";

const startServer = () => {
  connectDB();

  const port = config.port || 3000;

  app.listen(port, () => {
    console.log(`Listening on ${port}`);
  });
};

startServer();
