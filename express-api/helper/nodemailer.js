const nodemailer = require("nodemailer")
const util = require("util")


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kepinmahen@gmail.com",
    pass: "njatloyviuueyoty"
  }
})

const transportPromise = util.promisify(transporter.sendMail).bind(transporter);

module.exports = {transporter, transportPromise}