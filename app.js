var express = require('express'),
bodyParser = require('body-parser');
const request = require('request-promise');
var app = express();
app.use(bodyParser.json());

app.get('/get', function (req, res, next) {
    console.log('The token is :',req.header('Authorization'));
    var token = req.header('Authorization') || 'NO TOKEN';
    let data = ['IceCream', 'Chocolates','Candy','Juice'];
    var tenant = req.header('tenant') || ' ';
    // if(token && tenant){
    //     const options = {
    //         url: 'https://users-stuf-stufrc.apm.aws-usw02-pr.predix.io/v1/users/me/checkaccess',
    //         headers: {
    //           'cache-control': 'no-cache',
    //           'content-type': 'application/json',
    //           Authorization: token,
    //           tenant: tenant
    //         },
    //         json: true,
    //         body: {
    //           'uri':req.url,
    //           'httpMethod':'POST'
    //         }
    //     };
    //     request.post(options, (err, resp, data) => {
    //         const statusCode = (resp) ? resp.statusCode : 502;
    //         if(err || statusCode !== 200) {
    //           err = err || `Error getting verdict: ${statusCode}`;
    //           res.json({'auth':'Error !!!'});
    //         } else {
    //             res.json({'auth':'Pass'});
    //         }
    //     });
    // }    
    // else{
    //     res.json({'auth':token,'data':data,'message':'No token and Tenant present in header'});
    // }   
    res.json({'auth':token,'data':data,'message':'No token and Tenant present in header'}); 
});

var PORT =  process.env.PORT || 9002;
app.listen(PORT, function () {
console.log('Example app listening on port!',PORT);
});
