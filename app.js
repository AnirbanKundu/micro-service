var express = require('express'),
bodyParser = require('body-parser');
const request = require('request-promise');
var app = express();
app.use(bodyParser.json());
var appSvc = require('./appSvc');


app.get('/get', function (req, res, next) {
    console.log('The token is :',req.header('Authorization'));
    var token = req.header('Authorization') || 'NO TOKEN';
    let data2 = ['IceCream', 'Chocolates','Candy','Juice'];
    var tenant = req.header('tenant') || ' ';
    //if(token && tenant){
        appSvc.getData(req,res).then((data)=>{
            res.json(data);
        },(err)=>{
            res.status(500).send(err);
        });        
    //}    
});

var PORT =  process.env.PORT || 9002;
app.listen(PORT, function () {
console.log('Example app listening on port!',PORT);
});
