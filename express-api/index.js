const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mysql = require("mysql")
const { userRouter, cartRouter } = require("./router")
const { transporter } = require("./helper")
const bearerToken = require("express-bearer-token");


const app = express();
const port = 2000

app.use(cors());
app.use(bodyParser());
app.use(bearerToken())


app.use(express.static("public"));

app.get("/", (req, res) => {
    res.status(200).send("<h1>Express API</h1>")
})


app.post("/email", (req, res) => {
    const to = req.query.email;
    const mailOptions = {
      from: "Kevin <kepinmahen@gmail.com>",
      to,
      subject: "Tautan untuk ganti kata sandi dari situs web Parcel",
      html: `<a href="http://localhost:3000/change-pass?token=${token}">Klik disini untuk mengganti password anda</a>`
    };
    if (to) {
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) res.send(500).send(err);
  
        return res.status(200).send({
          message: info,
          status: "Sent",
        });
      });
    }
  });

app.use("/users", userRouter)
app.use("/cart", cartRouter)

app.listen(port,() => console.log(`API Active at port ${port}`))