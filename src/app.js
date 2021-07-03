const express = require("express");
require("./db/conn")
const role = require("./models/User")
const user = require("./models/User")
const student = require("./models/Student")
const school = require("./models/School")
const tifRouter=require("./router/tif")
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use(tifRouter);


app.listen(port, () => {
    console.log(`port running on ${port}`);
})