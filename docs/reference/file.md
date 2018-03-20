# File

Download and upload file via kintone Rest API

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| connection | [Connection](./connection) | yes | The kintone connection module

**Sample code**

<details class="tab-container" open>
<Summary>Init File module</Summary>

** Source code **

```javascript

const kintone = 'kintone-nodejs-sdk';

let kintoneFile = new kintone.File(connection);
```

</details>

## Methods

### upload(filePath)

> Upload file to kintone app

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| filePath | String | yes | The full path of file on your enviroment

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Upload file</Summary>

** Source code **

```javascript
let fullPathFile = '{your/file/with/full/path}';
kintoneFile.upload(fullPathFile);
```

** Respone **

```javascript
{
    fileKey: "kintone_file_key"
}
```

</details>

### download(fileKey, outPutFilePath)

> Download file from kintone app to local evironment

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| fileKey | String | yes | The fileKey of file on kintone.
| outPutFilePath | String | yes | The full path of output file on your enviroment

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Download file</Summary>

** Source code **

```javascript
let fileKey: 'file_Key_on_kintone';
let fullPathFileOuput = '{your/folder/with/full/path}';
kintoneFile.download(fileKey, fullPathFileOuput);
```

** Respone **

```javascript
{binary_data}
```

</details>