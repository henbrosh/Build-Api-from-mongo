const express = require("express");
const router = express.Router();


const mhss = require('../model/mhs');


router.post('/',(req,res) => {
res.send(`let's create post`)
})
module.exports = router;