const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api", (req, res) => {
  res.send({
    version: "1.0",
  });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email !== "test@email.com" || password !== "1234") {
    return res.status(400).send({
      success: false,
    });
  }

  res.send({
    success: true,
  });
});

module.exports = app;
