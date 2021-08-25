const express = require("express");
const income = require("../models/income");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const income = await income.find();
    res.json(income);
  } catch (error) {
    res.send("Error" + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const income = await income.findById(req.params.id);
    res.json(income);
  } catch (error) {
    res.send("Error" + err);
  }
});

router.post("/", async (req, res) => {
  const income = new Income({
    income: req.body.income,
    transport: req.body.transport,
    foodanddrink: req.body.foodanddrink,
    clotheese: req.body.clotheese,
    gas: req.body.gas,
    services: req.body.services,
    shopping: req.body.shopping,
    medicine: req.body.medicine,
  });
  try {
    const a1 = await income.save();
    res.json(a1);
  } catch (error) {
    res.send("Error");
  }
});

router.put("/", (req, res) => {});

router.delete("/:id", async (req, res) => {
  try {
    const income = await Income.findByIdAndDelete(req.params.id);
    res.json(income);
  } catch (error) {
    res.send("Error");
  }
});

module.exports = router;
