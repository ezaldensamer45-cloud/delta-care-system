const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let patients = [];

app.get("/patients", (req, res) => {
  res.json(patients);
});

app.post("/patients", (req, res) => {
  patients.push(req.body);
  res.json({ message: "Added" });
});

app.delete("/patients/:index", (req, res) => {
  patients.splice(req.params.index, 1);
  res.json({ message: "Deleted" });
});

app.listen(3000, () => console.log("Server running"));
