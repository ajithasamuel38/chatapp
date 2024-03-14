const express = require('express');

const router = express.Router();

router.get('/login', (req, res, next)=>{

    console.log("Im here");
    
    res.send('<form onsubmit="localStorage.setItem(\'username\', document.getElementById(\'username\').value)" action="/product" method="POST"><input id="username" type="text"><button type="submit">Login</button></form>');


})

router.post('/product', (req, res, next)=>{
    
    //localStorage.post("username", req.body.username);

    console.log("Im in redirect");
    res.redirect('/');
})

module.exports = router;