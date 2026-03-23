import express from "express";
const srever = express();
const port = 3000;
srever.listen(port, () => {
  console.log(`"Server Started on "${port}`);
});
