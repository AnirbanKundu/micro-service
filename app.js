var express = require('express'),
bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json());




app.get('/get', function (req, res, next) {
    console.log('The token is :',req.header('Authorization'));
    var token = req.header('Authorization') || 'NO TOKEN';
    let data = ['IceCream', 'Chocolates','Candy','Juice']
    res.json({'auth':token,'data':data});
});

var PORT =  process.env.PORT || 9002;
app.listen(PORT, function () {
console.log('Example app listening on port!',PORT);
});
