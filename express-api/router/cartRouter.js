const express = require("express");
const router = express.Router();
const { db } = require("../database");

router.get("/:id", (req, res) => {
  const sql = `
  SELECT 
  c.id,
  p.productName,
  c.quantity,
  p.price,
  (c.quantity * p.price) as total
FROM cart c 
JOIN products p ON c.productID = p.id
WHERE c.userID = ${parseInt(req.params.id)}`;
  db.query(sql, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(data);
  });
});

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
