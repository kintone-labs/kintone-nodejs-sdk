# File

Download and upload file via kintone Rest API.

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| connection | [Connection](./connection) | yes | The connection module of this SDK.

**Sample code**

<details class="tab-container" open>
<Summary>Init app sample</Summary>

** Source code **

```javascript

const kintone = require('kintone-nodejs-sdk');

let kintoneFile = new kintone.File(connection);
```

</details>

## Methods

### upload(fileName, fileContent)

> Upload file into kintone

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| fileName | String | yes | The name of file
| fileContent | Stream | yes | The content of file

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Upload file sample</Summary>

** Source code **

```javascript
const fileContent = fs.createReadStream('./cd.png');
const fileName = path.basename('./cd.png');
kintoneFile.upload(fileName, fileContent)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });
```

</details>

### download(fileKey)

> Download file from kintone

**Parameter **

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| fileKey | String | yes | The file key of the uploaded file on kintone.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Get apps sample</Summary>

** Source code **

```javascript
let fileKey = /*{your_file_Key}*/;
kintoneFile.download(fileKey)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });
```

</details>

## Reference

- [Upload File](https://developer.kintone.io/hc/en-us/articles/212494448-Upload-File)`on developer network`
- [Download File](https://developer.kintone.io/hc/en-us/articles/212494468-Download-File)`on developer network`