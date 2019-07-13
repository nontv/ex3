var express = require('express');
var router = express.Router();
var contact = require("../config/database")

/* GET home page. */
router.get('/', function(req, res, next) {
  var query = "SELECT * FROM positions";
  contact.query(query, function(error,result){
    res.json(result)
  })
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
module.exports = router;
