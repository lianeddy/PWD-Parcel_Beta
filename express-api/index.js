const express = require("express");
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 2000;

const { productRouter } = require("./router");

app.use(bodyParser());
app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).send("<h1>Express API</h1>");
});

app.use("/products", productRouter);

server.listen(port, () => console.log(`API active at port ${port}`));
