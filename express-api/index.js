const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mysql = require("mysql")
const { userRouter, cartRouter } = require("./router")
const { transporter } = require("./helper")
const bearerToken = require("express-bearer-token");
const port = 2000;
const { transporter } = require("./helper");
const {
  userRouter, 
  cartRouter,
  productRouter,
  transactionRouter,
  
} = require("./router");

const app = express();

app.use(bearerToken());
app.use(bodyParser());
app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.status(200).send("<h1>Express API</h1>");
  });


  
  app.use("/users", userRouter);
  app.use("/cartp", cartRouter);
  app.use("/product", productRouter);
  app.use("/transaction", transactionRouter)


app.listen(port,() => console.log(`API Active at port ${port}`))
