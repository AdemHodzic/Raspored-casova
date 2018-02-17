const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://adem:adem@ds237848.mlab.com:37848/first');

const Scheme = mongoose.Schema;
const casSchema = new Scheme({
    prvi:String,
    drugi:String,
    treci:String,
    cetvrti:String,
    peti:String,
    sesti:String,
    sedmi:String,
    osmi:String
});

const casModel = mongoose.model('casModel', casSchema);



router.get('/', function(req, res, next) {
    res.render('home');
});

module.exports = router;