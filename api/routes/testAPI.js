var express = require("express");
var router = express.Router();
var data =  require("../data/scouts.json")

router.get("/", function(req, res, next) {
    res.json(data);
});

module.exports = router;