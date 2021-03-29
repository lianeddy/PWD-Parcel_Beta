const express = require("express");
const router = express.Router();
const { db, query } = require("../database");
const fs = require("fs");

router.get("/price", (req, res) => {
  let sql = `SELECT * FROM products`;
  if (req.query) {
    sql += ` WHERE`;
  }
  if (req.query.isAvailable) {
    sql += ` isAvailable = 1 ${Object.keys(req.query).length > 1 ? "AND" : ""}`;
  }
  if (req.query.hargamin) {
    sql += ` price > ${req.query.hargamin} ${
      Object.keys(req.query).length > 1 ? "AND" : ""
    }`;
  }
  if (req.query.hargamax) {
    sql += ` price < ${req.query.hargamax}`;
  }
  db.query(sql, (err, data) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    console.log(data)
    return res.status(200).send(data);
  });
});

router.get("/products", (req, res) => {
  let sql = `SELECT * FROM products`;

  db.query(sql, (err, data) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    return res.status(200).send(data);
  });
});

router.get("/product/:id", (req, res) => {
  const id = parseInt(req.params.id);
  db.query(`SELECT * FROM products WHERE id = ${id}`, (err, data) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    if (data.length === 0) {
      res.status(404).send("Data not found");
    }
    return res.status(200).send(data[0]);
  });
});

router.get("/categories", (req, res) => {
  let sql = `SELECT * FROM category`;
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    }
    return res.status(200).send(data);
  });
});

router.get("/category/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let sql = await query(`SELECT * FROM products WHERE categoryID = ${id} `);
    console.log(sql)
    return res.status(200).send(sql);
  } catch (err) {
    console.log(err);
  }
});

// router.get("/price", (req, res) => {
//   let sql = `SELECT * FROM products`;
//   db.query(sql, (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     return res.status(200).send(data);
//   });
// });

module.exports = router;
