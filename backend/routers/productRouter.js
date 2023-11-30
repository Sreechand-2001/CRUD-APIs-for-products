const express = require("express");

const router = express.Router();

const productModel = require("../model/product");

router.get("/:id", async (req, res, next) => {
  console.log(req.params.id);
  if (req.params.id === "all") {
    const response = await productModel.find();
    res.json(response);
  } else if (req.params.id === "mobiles") {
    const response = await productModel.find({ "product category": "Mobiles" });
    res.json(response);
  } else if (req.params.id === "electronics") {
    const response = await productModel.find({
      "product category": "Electronics",
    });
    res.json(response);
  } else if (req.params.id === "kitchen") {
    const response = await productModel.find({
      "product category": "Kitchen & Home",
    });
    res.json(response);
  } else if (req.params.id === "fashion") {
    const response = await productModel.find({ "product category": "Fashion" });
    res.json(response);
  } else {
    const response = await productModel.find({ pid: req.params.id });
    res.json(response);
  }
});

router.post("/add-product", async (req, res, next) => {
  console.log(req.body);
  const response = await productModel.create(req.body);
  response ? res.json(true) : res.json(false);
});

router.get("/delete/:id", async (req, res, next) => {
  const response = await productModel.find({ pid: req.params.id });
  if (response) {
    await productModel.deleteOne({ "pid": req.params.id });
  } else {
    console.log("second");
  }
});

module.exports = router;
