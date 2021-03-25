const express = require("express");
const router = express.Router();
const { db } = require("../database");

router.post("/", (req, res) => {
  db.query(`INSERT INTO cart SET ?`, req.body, (err) => {
    if (err) return res.status(500).send(err);
    return res.status(201).send({
      status: "Created",
      message: "Data Created",
    });
  });
});

module.exports = router