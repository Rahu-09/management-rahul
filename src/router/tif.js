const express = require("express");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const role = require("../models/Role");
const user = require("../models/User");
const student = require("../models/Student");
const school = require("../models/School");
const tifRouter = require("../router/tif");

const router = new express.Router();


router.post("/user/signup", async (req, res) => {
  try {
    const data = new user(req.body);
    data.password = bcrypt.hashSync(data.password, 10);
    const result = await data.save();
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/user/signin", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const email = await user.findOne({ email: data.email });
    console.log(email);
    if (!email) {
      return res.status(404).send();
    }
    if (bcrypt.compareSync(data.password, email.password)) {
      jwt.sign({ userId: email._id }, "LoginToken");
    }
    res.status(201).send(data);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/user", async (req, res) => {
  try {
    const result = await user.find();
    console.log(result);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/user/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const result = await user.findById(_id);
    if (!result) {
      return res.status(404).send();
    }
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/role", async (req, res) => {
  try {
    console.log("Hero");
    const data = new role(req.body);
    const result = await data.save();
    console.log(result);
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/role", async (req, res) => {
  try {
    const result = await role.find();
    console.log(result);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/student", async (req, res) => {
  try {
    const data = new student(req.body);
    const result = await data.save();
    console.log(result);
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/student", async (req, res) => {
  try {
    const result = await student.find();
    console.log(result);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/school", async (req, res) => {
  try {
    const data = new school(req.body);
    const result = await data.save();
    console.log(result);
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/school", async (req, res) => {
  try {
    const result = await school.find();
    // const ans=await school.find({name:result[0].name})
    // console.log(ans);
    console.log(result);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/school/students', async (req, res) => {
    try {
        const result1 = await school.find();
        let result=JSON.parse(JSON.stringify(result1))
        for(let i=0;i<result.length;i++){
          const ans=await student.find({schoolId:result[i]._id});
          result[i]["students"]=ans;
        }
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send(err);
    }
})

module.exports = router;
