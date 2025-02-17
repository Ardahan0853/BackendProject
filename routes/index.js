const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];



var express = require('express');
var router = express.Router();



const pug = require('pug')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(messages); // Debug: Check what messages look like
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
  
  res.render('form', {title: 'form'})
  
})

router.post('/new', function(req, res, next){
  
  messages.push({text: req.body.text, user: req.body.name, added: new Date()});
  res.redirect('/')
})


module.exports = router;
