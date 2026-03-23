import express from "express";
const srever = express();
const port = 3000;
// srever.get=("/"(req, res)=>{
// res.json({
// name:"hello"
// })

srever.get("/", (req, res) => {
  res.json({
    name: "Hello",
  });
});
srever.listen(port, () => {
  console.log(`"Server Started on "${port}`);
});
