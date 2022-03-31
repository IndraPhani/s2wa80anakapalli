var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const x= req.query.x || getRandomArbitrary(0, 60);
  var f1 = Math.imul(x);
  var f2 = Math.log(x);
  var f3 = Math.log10(x);
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  res.send(`Math.imul(${x}) is ${f1} ; Math.log(${x}) is ${f2} ; Math.log10(${x}) is ${f3}\n`);
});

module.exports = router;