const express = require('express');
const bodyParser = require('body-parser'); // Importing body-parser

const router = express.Router();

// Using body-parser middleware to parse form data
router.use(bodyParser.urlencoded({ extended: true }));

const fs = require('fs');



router.get('/', (req, res, next)=>{

    console.log("Im in get");
    fs.readFile('username.txt', (err, data) =>{
       
        if(err) {
           console.log(err);
           data = 'No chat exists';
        }
        

      
        res.send(`${data}<form action="/" onsubmit = "document.getElementById('username').value = localStorage.getItem('username')" method = "POST"><input id="message" name = "message" type= "text" placeholder = "message"><input id="username" type="hidden" name="username"><button type="submit">Send</button></form>`);
    
       
    });
});

router.post('/', (req, res, next) =>{


    console.log(`${req.body.username}`);
   
    fs.writeFile('username.txt', `${req.body.username} : ${req.body.message}`, {flag: 'a'}, (err) =>{
        err?console.log(err):res.redirect('/');;
    })

     
})


module.exports = router;
