### Avenue-API


#### Description
It is an API that demonstratses logging using pino while executing some of rest api crude operations
### Development

Clone the repository: 
>$ ``` git clone https://github.com/Nduhiu17/avenue-shoppinglist.git```

### Dependencies
- Install the project dependencies:
> $ ```npm install```

> You can run the tests by running:

> Run the app by:

>$```npm start```

>$```npm run test```


>Test the endpoints registered  on Postman:


 >1.End point to get all shopping lists

 > ```http://localhost:3000/shoppinglists```

> Expect a json with the following format after hitting the endpoint:

``` javascript
[{
    "_id": "5c30782f399b0874c0fb537f",
    "name": "bread",
    "quantity": "ten",
    "price": "one thousand",
    "done": "yes",
    "createdAt": "2019-01-05T09:26:07.164Z",
    "updatedAt": "2019-01-05T09:26:07.164Z",
    "__v": 0
},
{
    "_id": "5c30782f399b0874c0fb537f",
    "name": "bread",
    "quantity": "ten",
    "price": "one thousand",
    "done": "yes",
    "createdAt": "2019-01-05T09:26:07.164Z",
    "updatedAt": "2019-01-05T09:26:07.164Z",
    "__v": 0
}]
```

>2.End point to create a shoppinglist

 > ```http://localhost:3000/shoppinglists```



 > Sample object to post:

 ``` javascript
{
	"name":"bread",
	"quantity":"ten",
	"price":"one thousand",
	"done":"yes"
}
```

>3.End point to create a shoppinglist

 > ```http://localhost:3000/shoppinglists/stringID```

  > Expected json format:
 ``` javascript
 {
    "_id": "5c30782f399b0874c0fb537f",
    "name": "bread",
    "quantity": "ten",
    "price": "one thousand",
    "done": "yes",
    "createdAt": "2019-01-05T09:26:07.164Z",
    "updatedAt": "2019-01-05T09:26:07.164Z",
    "__v": 0
}
```

 > After hitting the endpoint,the logs will be logged on the terminal and they come with this kind of format


``` javascript
{
  "level": 30,
  "time": 1546675082640,
  "msg": "request completed",
  "pid": 25231,
  "hostname": "antony",
  "req": {
    "id": 1,
    "method": "GET",
    "url": "/shoppinglists/5c302f94d2561f30f1ab63b6",
    "headers": {
      "content-type": "application/json",
      "cache-control": "no-cache",
      "postman-token": "64811a1b-268f-4f0e-a153-2cff66439956",
      "user-agent": "PostmanRuntime/7.4.0",
      "accept": "*/*",
      "host": "localhost:3000",
      "accept-encoding": "gzip, deflate",
      "content-length": "64",
      "connection": "keep-alive"
    },
    "remoteAddress": "::1",
    "remotePort": 54984
  },
  "res": {
    "statusCode": 200,
    "headers": {
      "x-powered-by": "Express",
      "content-type": "application/json; charset=utf-8",
      "content-length": "143",
      "etag": "W/\"8f-SuSfXsTTHvUg6xTviDU4OUJ5pMI\""
    }
  },
  "responseTime": 357,
  "v": 1
}
```

#### Author

Antony Nduhiu

