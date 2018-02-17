const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://adem:adem@ds237848.mlab.com:37848/first',['raspored']);


//Za prikazivanje svih casova
router.get('/',(req,res,next)=>{
    
    db.raspored.find().sort({'num':1}, (err,docs) =>{
        if(err) res.send(err);
        res.render('newTest',{arr:docs});
    });
});

//Za prikazivanje jednog casa, profesora, ocjena, prosjeka i proseka razreda
router.get('/:id',(req,res,next)=>{
    db.raspored.find({_id:mongojs.ObjectId(req.params.id)},(err,docs)=>{
        if(err) {res.send(err);}
        res.json(docs);
    });
});

//Za promjene u rasporedu
router.patch('/:id',(req,res,next)=>{
    const cas = req.body;
    let updated = {};
    if(cas.prvi){
        updated.prvi = cas.prvi;
    }

    if(cas.drugi){
        updated.drugi = cas.drugi;
    }
    if(cas.treci){
        updated.treci = cas.treci;
    }
    if(cas.cetvrti){
        updated.cetvrti = cas.cetvrti;
    }
    if(cas.peti){
        updated.peti = cas.peti;
    }
    if(cas.sesti){
        updated.sesti = cas.sesti;
    }
    if(cas.sedmi){
        updated.sedmi = cas.sedmi;
    }
    if(cas.osmi){
        updated.osmi = cas.osmi;
    }
    
    if(!updated){
        res.status(400);
        res.send("Bad data");
    }else{
        db.raspored.update({_id:mongojs.ObjectId(req.params.id)},updated,{},(err,docs)=>{
            if(err) {res.send(err);}
            res.json(docs);
        });
    }
    
});

module.exports = router;
