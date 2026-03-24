import express from "express";
const server = express();
const port = 3000;

// -----------1----------------

// server.get("/", (req, res) => {
//   res.status(200);
//   res.json({
//     name: "Hello",
//     class: "BCA",
//   });
// });

// -----------2----------------

server.get("/", (req, res) => {
  res.status(200);
  res.json({
    name: "Muskan",
  });
});

// -----------3----------------

server.use(express.json());

server.post("/Login", (req, res) => {
  console.log(req.body);
  res.status(200);
  res.json({
    name: "Hello",
    class: "BCA",
  });
});

server.listen(port, () => {
  console.log(`Server Started on ${port}`);
});
