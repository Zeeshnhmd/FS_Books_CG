import { config as conf } from "dotenv";

conf();

const _config = {
  port: process.env.PORT,
  db: process.env.MONGO_URI,
  env: process.env.NODE_ENV,
};

//* Object.freeze used to freeze the object user cannot override this object in other file.

export const config = Object.freeze(_config);
