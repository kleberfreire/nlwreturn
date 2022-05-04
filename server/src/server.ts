import express from "express";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());

app.post("/feedbacks", (request, response) => {
  const { type, comment, screenshot } = request.body;
  console.log(type, comment, screenshot);
  response.send();
});

app.listen(port, () => {
  console.log("HTTP Server is running on port " + port);
});
