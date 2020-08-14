var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.render('index', { 
  	layout:'layout',
  	title: 'Final Project Test Page',
  	pageTitle: 'COP Project - Test Page',
  	body: 'This is my first post!'
  	});
});

module.exports = router;
