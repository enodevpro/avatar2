const express = require("express");
const fs = require("fs");
const app = express();

app.get("/gomxu", async (req, res) => {
  try {
    fs.writeFileSync("./status.txt", "gomxu");
    res.send("Đã chuyển sang chế độ gom xu");
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get("/farm", async (req, res) => {
  try {
    fs.writeFileSync("./status.txt", "farm");
    res.send("Đã chuyển sang chế độ farm xu");
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get("/status", async (req, res) => {
  try {
    const status = fs.readFileSync("./status.txt", "utf-8");
    res.send(status);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running");
});
