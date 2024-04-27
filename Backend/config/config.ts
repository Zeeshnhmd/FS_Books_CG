import { config as conf } from "dotenv";

conf();

const _config = {
  port: process.env.PORT,
};

//* Object.freeze used to freeze the object user cannot override this object in other file.

export const config = Object.freeze(_config);
