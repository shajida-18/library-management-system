const express = require("express");
const app = express();
const PORT = 8000;
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).send({
    messsage: "Home page",
  });
});
app.all(/.*/, (req, res) => {
  res.status(404).json({
    message: "not built yet",
  });
});
app.listen(PORT, () => {
  console.log(`server is up and running on http://localhost:${PORT}`);
});
