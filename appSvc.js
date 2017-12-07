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
               authorization: 'bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI5NTM3YWIzZjdlYzI0MDRjYWUyMzAyN2E1ZWFiMDdkYSIsInN1YiI6IjE2NmEzZjJmLWY0ODAtNDRhYi04NTU3LTE0MjVmYTc3N2NlZCIsInNjb3BlIjpbInBhc3N3b3JkLndyaXRlIiwib3BlbmlkIl0sImNsaWVudF9pZCI6IndlYmFwcC40OTZiYjY0MS03OGI1LTRhMTgtYjFiNy1mZGUyOTc4OGRiMzguOTkxZTVjMjMtM2U5Yy00OTQ0LWIwOGItOWU4M2VmMGFiNTk4IiwiY2lkIjoid2ViYXBwLjQ5NmJiNjQxLTc4YjUtNGExOC1iMWI3LWZkZTI5Nzg4ZGIzOC45OTFlNWMyMy0zZTljLTQ5NDQtYjA4Yi05ZTgzZWYwYWI1OTgiLCJhenAiOiJ3ZWJhcHAuNDk2YmI2NDEtNzhiNS00YTE4LWIxYjctZmRlMjk3ODhkYjM4Ljk5MWU1YzIzLTNlOWMtNDk0NC1iMDhiLTllODNlZjBhYjU5OCIsImdyYW50X3R5cGUiOiJhdXRob3JpemF0aW9uX2NvZGUiLCJ1c2VyX2lkIjoiMTY2YTNmMmYtZjQ4MC00NGFiLTg1NTctMTQyNWZhNzc3Y2VkIiwib3JpZ2luIjoidWFhIiwidXNlcl9uYW1lIjoicmNzYW1wbGVnLXNtb2tldXNlciIsImVtYWlsIjoiUmF0bmEuSmFuSmFuYW1AZ2UuY29tIiwiYXV0aF90aW1lIjoxNTEyNjg3NDk0LCJyZXZfc2lnIjoiZjZjM2ZmODgiLCJpYXQiOjE1MTI2ODc0OTYsImV4cCI6MTUxMjY5MTA5NiwiaXNzIjoiaHR0cHM6Ly9kMTczMGFkZS03YzBkLTQ2NTItOGQ0NC1jYjU2M2ZjYzFlMjcucHJlZGl4LXVhYS5ydW4uYXdzLXVzdzAyLXByLmljZS5wcmVkaXguaW8vb2F1dGgvdG9rZW4iLCJ6aWQiOiJkMTczMGFkZS03YzBkLTQ2NTItOGQ0NC1jYjU2M2ZjYzFlMjciLCJhdWQiOlsicGFzc3dvcmQiLCJvcGVuaWQiLCJ3ZWJhcHAuNDk2YmI2NDEtNzhiNS00YTE4LWIxYjctZmRlMjk3ODhkYjM4Ljk5MWU1YzIzLTNlOWMtNDk0NC1iMDhiLTllODNlZjBhYjU5OCJdfQ.nE_DcYfVf09IkUlUqMyAQtX0cH6I0DBeBM_5ESjO5Hsx1Y-VYi7cfqrPxUS8zNpL41sKWZIAQSwpyOPOrI89eFvFmOJX_OLbFO8-hcWqhVQQFnn15M0E6r79U23ZtXdNcbSGXK2SMgSPwd-1OnaO7ifTgb69a2_eSlNZGyycnsqIEHdjRt_z-NRKvGcd8lKxN0ALvjDXVQztwDRQKJ-eB8N7Ol5UBGQTASlrdZ3-6Etv7e5rTdYO6-MOpuMUJrWmZ3cDxyYXnI2XzRUwgcnrPrWi0fRKONCa9PypSAa8JrG9RfkSZ2V3MVa19-YRYTXP4mfuv7jeoRC7Hml-dS1qTg',
               tenant: '8d663b3d-faf9-43d8-9aa1-62ac70f7a3eb' },
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
            request(options, function (error, response, body) {
                if (error) throw new Error(error);
              
                console.log(body);
              });  
        });
}

module.exports = {
    getData: _getData
};
