const express = require("express");
const router = express.Router();
const { db } = require("../database");

router.get("/:id", (req, res) => {
  const sql = `
    SELECT
        c.id,
        c.userID, 
        p.productName, 
        ct.category, 
        c.quantity, 
        (c.quantity * p.price) as total
    FROM cart c 
    JOIN products p on c.ProductID = p.id 
    JOIN category ct on p.categoryID = ct.id
    where c.userID = ${parseInt(req.params.id)}`;
  db.query(sql, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(data);
  });
});

router.patch("/:id", (req, res) => {
    db.query(
      `UPDATE cart SET quantity = ${req.body.quantity} WHERE id = ${req.params.id}`,
      (err) => {
        if (err) return res.status(500).send(err);
        return res.status(201).send({
          status: "Edited",
          message: "Data Edited",
        });
      }
    );
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

module.exports= router;