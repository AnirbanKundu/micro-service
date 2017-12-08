'use strict';
//const request = require('request-promise');
var request = require('request');

const _getData = (req,res) => {    
        return new Promise((resolve, reject) => {
            var token = req.header('Authorization') || 'NO TOKEN';
            let data2 = ['IceCream', 'Chocolates','Candy','Juice'];
            var tenant = req.header('tenant') || ' ';
            // const options = {
            //     url: 'https://apm-timeseries-query-svc-rc.int-app.aws-usw02-pr.predix.io/v3/time_series/query',
            //     headers: {
            //       'cache-control': 'no-cache',
            //       'content-type': 'application/json',
            //       Authorization: token,
            //       tenant: tenant
            //     },
            //     json: true,
            //     body: {
            //         'tagList': [
            //             {
            //             'tagId': 'GE.E2ESAN.RAMON.1111111.E2ESAN.TUR.ND.AVG.25M'
            //             }
            //         ],
            //         'operation': 'interpolated',
            //         'startTime': '2017-08-08T17:55:08.000Z',
            //         'endTime': '2017-08-23T17:55:08.000Z',
            //         'dataSource': 'predixdata.Release',
            //         'responseFormat': 'KairosDB',
            //         'sampleCount': 1000
            //         }            
            // };
            var options = { method: 'POST',
            url: 'https://apm-timeseries-query-svc-rc.int-app.aws-usw02-pr.predix.io/v3/time_series/query',
            headers: 
             { 
               'cache-control': 'no-cache',
               'content-type': 'application/json',
               Authorization: token,
               tenant: tenant },
            body: 
             { tagList: [ { tagId: 'GE.E2ESAN.RAMON.1111111.E2ESAN.TUR.ND.AVG.25M' } ],
               operation: 'interpolated',
               startTime: '2017-08-08T17:55:08.000Z',
               endTime: '2017-08-23T17:55:08.000Z',
               dataSource: 'predixdata.Release',
               responseFormat: 'KairosDB',
               sampleCount: 1000 },
            json: true };

            // const options = {
            //     url: 'https://users-stuf-stufrc.apm.aws-usw02-pr.predix.io/v1/users/me/checkaccess',
            //     headers: {
            //         'content-type': 'application/json',
            //         Authorization: token,
            //         tenant: tenant
            //     },
            //     json: true,
            //     body: {
            //         'uri':'/v1/getProductConfiguration',
            //         'httpMethod':'POST'
            //     }
            // };
            // request.post(options, (err, resp, data) => {
            //     const statusCode = (resp) ? resp.statusCode : 502;
            //     if(err || statusCode !== 200) {
            //       err = err || `Error getting verdict: ${statusCode}`;
            //       reject(err);
            //     } else {
            //         resolve(data);
            //     }
            // });  
            request(options, function (err, resp, body) {
                // if (error) throw new Error(error);              
                // res.json(body);
                const statusCode = (resp) ? resp.statusCode : 502;
                if(err || statusCode !== 200) {
                    err = err || `Error getting verdict: ${statusCode}`;
                    reject(err);
                } else {
                    resolve(body);
                }
            });
               
        });
}

module.exports = {
    getData: _getData
};
