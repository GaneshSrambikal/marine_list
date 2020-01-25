const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const items = require('./routes/api/items')
const app = express();

//body parser -middleware
app.use(express.json());

//routes
app.use('/api/items' ,items);

//db config
const db = require("./config/keys").mongoURI;

//cont to mongo
mongoose
  .connect(db)
  .then(() => console.log("Mongodb connected"))
  .catch(err => console.log(err));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server stated at 5000"));
