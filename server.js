const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/_YOUR_DB_NAME_", {
  useNewUrlParser: true,
});
app.use(express.json());
const PORT = process.env.PORT;
const { apiData } = require("./controller/apiData");
const {
  postMethod,
  getPost,
  deleteData,
  updateData,
} = require("./controller/Curdope");
app.get("/", (req, res) => {
  res.send("hello test");
});
app.put("/update:slug", updateData);
app.post("/postmethod", postMethod);
app.get("/postdata", getPost);
app.delete("/delete:slug", deleteData);
app.get("/apidata", apiData);
app.listen(PORT, (req, res) => {
  console.log(` LISTEN ${PORT}`);
});
