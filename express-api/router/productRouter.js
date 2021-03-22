const express = require("express");
const router = express.Router();
const { db } = require("../database");

router.get("/", (req, res) => {
  let sql = `SELECT * FROM products`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    return res.status(200).send(data);
  });
});

  router.get("/:id", (req, res) => {
    const sql = `SELECT * FROM products WHERE id = ${parseInt(req.params.id)}`;
    db.query(sql, (err, data) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(data);
    });
  });
  

  module.exports= router;