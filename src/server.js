import express from "express";

export const app = express();

const PORT = 3098;

export const start = async () => {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
  });
};
