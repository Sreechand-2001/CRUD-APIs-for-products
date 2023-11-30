const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const productRouter = require("./routers/productRouter");

const app = express();

mongoose
  .connect("mongodb://127.0.0.1/Products")
  .then(() => console.log("Connected Successfully"))
  .catch(() => console.log("Failed To Connect"));

app.use(cors());
app.use(express.json());

app.use("/products", productRouter);



app.listen(5000, () => console.log("Server Started at 5000"));
