# Quickstart

## Requirement

* [Node.js](https://nodejs.org/en/) (Version 8.9.3 or later)
* [npm](https://www.npmjs.com/package/extract-text-webpack-plugin) (Version 5.5.1 or later)
* [kintone-basejs-sdk](https://github.com/kintone/kintone-basejs-sdk)

## How to use

```shell
cd your-project
npm init
npm install --save kintone-nodejs-sdk
```

## Code example

<details class="tab-container" open>
<Summary>Get record sample</Summary>

** Source code **

```javascript
const kintone = require('kintone-nodejs-sdk');

let kintoneAuthWithAPIToken = (new kintone.Auth()).setApiToken('MY_TOKEN');
let kintoneConnection = new kintone.Connection('your.FQDN.tld', kintoneAuthWithAPIToken);

let kintoneRecord = new kintone.Record(kintoneConnection);

let appID = 'your_app_id';
let recordID = 'record_id_that_will_be_retrived';
kintoneRecord.getRecord(appID, recordID).then((rsp) => {
  console.log(rsp);
}).catch((err) => {
  // The promise function always reject with KintoneAPIExeption
  console.log(err.get());
});
```

** Response success**

```javascript
{
    "record":{
        // record data should be here
    }
}
```

** Response error**

```javascript
{
    id: '{ID}',
    code: '{CODE}',
    message: '{Message string}',
    errors: '{JSON String}'
}
```

</details>

<details class="tab-container" open>
<Summary>Get record sample with Async</Summary>

** Source code **

```javascript
const kintone = require('kintone-nodejs-sdk');

const kintoneAuthWithAPIToken = (new kintone.Auth()).setApiToken('MY_TOKEN');
const kintoneConnection = new kintone.Connection('your.FQDN', kintoneAuthWithAPIToken);

const kintoneRecord = new kintone.Record(kintoneConnection);

const appID = {your_app_id};
const recordID = {record_id_that_will_be_retrived};
const getRecord = async () => {
  try {
    const recordResult = await kintoneRecord.getRecord(appID, recordID);
    console.log(recordResult);
  } catch (error) {
    // The promise function always reject with KintoneAPIExeption
    console.log(error.get());
  }
};
getRecord();
```

** Response success**

```javascript
{
    "record":{
        // record data should be here
    }
}
```

** Response error**

```javascript
{ 
    id: '{ID}',
    code: '{CODE}',
    message: '{Message string}',
    errors: '{JSON String}'
}
```

</details>
