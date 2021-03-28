const express = require("express");
const { default: Swal } = require("sweetalert2");
const { api_url } = require("../../express-ui/src/helpers");
const { getCartByIdAction } = require("../../express-ui/src/redux/actions");
const router = express.Router();
const db = require("../database");

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

module.exports = router