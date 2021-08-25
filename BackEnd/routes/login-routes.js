const express = require("express");
const router = express.Router();
const Budget = require("../models/budget");


// const connection=require('../db/dbConnection')

router.get("/", async (req, res) => {
  try {
    const budgets = await Budget.find();
    res.json(budgets);
  } catch (error) {
    res.send("Error" + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const budget = await Budget.findById(req.params.id);
    res.json(budget);
  } catch (error) {
    res.send("Error" + err);
  }
});

router.post("/", async (req, res) => {
  const budget = new Budget({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const a1 = await budget.save();
    res.json(a1);
  } catch (error) {
    res.send("Error");
  }
});

router.put("/", (req, res) => {

});

router.delete("/:id", async (req, res) => {
  try {
    const budget = await Budget.findByIdAndDelete(req.params.id);
    res.json(budget);
  } catch (error) {
    res.send("Error");
  }
});

module.exports = router;
