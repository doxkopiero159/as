
const  express = require('express');
const  router = express.Router();

router .get('/' ,(req, res)=>{
    res.render('index',{ title :' first  website'});
});

router .get('/contacto' ,(req, res)=>{
    res.render('contacto',{title :' contacto website'});
});

module.exports= router;