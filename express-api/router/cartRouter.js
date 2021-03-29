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

router.post("/transaction", (req, res) => {
  db.query(`insert into transaction set ?`, req.body, (err) => {
    if(err) return res.status(500).send(err)
    return res.status(201).send({
      status: "Posted",
      message: "udah masuk database",
    })
  })
})

router.delete("/:id", (req, res) => {
  db.query(`delete from cart where id = ${req.params.id}`, (err) => {
    if (err) return res.status(500).send(err)
    return res.status(200).send({
      status: "Deleted",
      message: "Data deleted"
    })
  })
})


module.exports = router
