const express = require("express");
const router = express.Router();
const { db } = require("../database");
const { default: Swal } = require("sweetalert2");
const { api_url } = require("../../express-ui/src/helpers");
const { getCartByIdAction } = require("../../express-ui/src/redux/actions");
const router = express.Router();
const db = require("../database");

router.get("/", (req, res) => {
  let sql = `select t.id, t.date, t.userID, p.productName, p.imagepath, t.quantity, p.price, (p.price * t.quantity)as total , ts.name as status from transaction t 
  join transaction_status ts on t.status = ts.id
  join products p on t.productID = p.id`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    return res.status(200).send(data);
  });
});

router.get("/:id", (req, res) => {
    const sql = `
    select t.id, t.date, t.userID, p.productName, p.imagepath, t.quantity, p.price, (p.price * t.quantity)as total , ts.name as status from transaction t 
    join transaction_status ts on t.status = ts.id
    join products p on t.productID = p.id where t.userID = ${(req.params.id)}`;
    db.query(sql, (err, data) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(data);
    });
  });

  router.get("/status/:id", (req, res) => {
    const sql = `
    select * from transaction where id = ${(req.params.id)}`;
    db.query(sql, (err, data) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(data);
    });
  });

  router.post("/", (req, res) => {
    try {
      const {data} = req.body
      data.forEach((val) => {
        Axios.delete(`${api_url}/${val.id}`)
        .then((res) => {
          console.log("deleted id", val.id)
        })
      })
      dispatch(getCartByIdAction(data.userID))
     
    }
    .catch((err) => {
  
      
  
    })
  })

  module.exports= router;
