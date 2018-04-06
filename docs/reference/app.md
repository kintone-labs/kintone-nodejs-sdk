# App

Gets general information of an App, including the name, description, related Space, creator and updater information.

>
- Permissions to view the App is needed.
- API Tokens cannot be used with this API.

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

let kintoneApp = new kintone.App(connection);
```

</details>

## Methods

### getApp(appID)

> Get single app

#### **Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| appID | Integer | yes | The kintone app ID

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Get app sample</Summary>

** Source code **

```javascript
let appID = {your_app_id};
kintoneApp.getApp(appID)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });
```

</details>

### getApps(offset, limit)

> Get multiple apps

**Parameter **

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| offset | Integer | (optional) | The offset off data result
| limit | Integer | (optional) | The limit number of result

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Get apps sample</Summary>

** Source code **

```javascript
let limit = /*{your_limit_number}*/;
let offset = /*{your_offset_number}*/;
kintoneApp.getApps(offset, limit)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });
```

</details>

### getAppsByIDs(ids, offset, limit)

> Get multiple apps by list of ids

**Parameter **

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| ids | Array<Integer\> | yes | The array of app ids
| offset | Integer | (optional) | The offset off data result
| limit | Integer | (optional) | The limit number of result

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Get apps sample</Summary>

** Source code **

```javascript
let appIDs = [{YOUR_APP_ID_1}, {YOUR_APP_ID_2}, {YOUR_APP_ID_n}];
let limit = /*{your_limit_number}*/;
let offset = /*{your_offset_number}*/;
kintoneApp.getAppsByIDs(appIDs, offset, limit)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });
```

</details>

### getAppsByCodes(codes, offset, limit)

> Get multiple apps by a list of codes name

**Parameter **

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| codes | Array<String\> | yes | The array of app codes
| offset | Integer | (optional) | The offset off data result
| limit | Integer | (optional) | The limit number of result

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Get apps sample</Summary>

** Source code **

```javascript
let codes = ['YOUR_APP_CODE_1', 'YOUR_APP_CODE_2'];
let limit = /*{your_limit_number}*/;
let offset = /*{your_offset_number}*/;
kintoneApp.getAppsByCodes(codes, offset, limit)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });
```

</details>

### getAppsByName(name, offset, limit)

> Get multiple apps by name

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| name | String | yes | The app name
| offset | Integer | (optional) | The offset off data result
| limit | Integer | (optional) | The limit number of result

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Get apps sample</Summary>

** Source code **

```javascript
let name = 'your app name';
let limit = /*{your_limit_number}*/;
let offset = /*{your_offset_number}*/;
kintoneApp.getAppsByName(name, offset, limit)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });
```

</details>

### getAppsBySpaceIDs(spaceIDs, offset, limit)

> Get multiple apps by list of space's ids

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| spaceIDs | Array<Integer\> | yes | The array of space ids
| offset | Integer | (optional) | The offset off data result
| limit | Integer | (optional) | The limit number of result

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Get apps sample</Summary>

** Source code **

```javascript
let spaceIDs = [];
let limit = /*{your_limit_number}*/;
let offset = /*{your_offset_number}*/;
kintoneApp.getAppsBySpaceIDs(spaceIDs, offset, limit)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });
```

</details>

### getFormFields(appID, langCode, isPreview)

> Get field of form in kintone app

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| appID | Integer | yes | The app ID
| langCode | String | (optional) | The language code. Support: <ul><li>DEFAULT: Default language setting of system </li><li>JA: English language setting</li><li>ZH: Chinese language setting</li><li>EN: English language setting</li> |
| isPreview | Boolean | (optional) | Get the app form fields with a [pre-live settings](https://developer.kintone.io/hc/en-us/articles/115005509288).

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Get app form field sample</Summary>

** Source code **

```javascript
let appID = {your_app_id};
let langCode = {language_code}; // Ex: JA
kintoneApp.getFormFields(appID, langCode)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });

// Get a pre-live (preview) form fields
let appID = {your_app_id};
let langCode = {language_code}; // Ex: JA
let isPreview = true;
kintoneApp.getFormFields(appID, langCode, isPreview)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });
```

</details>

### getFormLayout(appID, isPreview)

> Get layout of form in kintone app

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| appID | Integer | yes | The kintone app id
| isPreview | Boolean | (optional) | Get the app form layout with a [pre-live settings](https://developer.kintone.io/hc/en-us/articles/115005509288).

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Get form layout sample</Summary>

** Source code **

```javascript
let appID = {your_app_id};
// Get form layout
kintoneApp.getFormLayout(appID)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });

// Get a preview (pre-live) form layout
let isPreview = true;
kintoneApp.getFormLayout(appID, isPreview)
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

- [Get App](https://developer.kintone.io/hc/en-us/articles/212494888)`on developer network`
- [Get Apps](https://developer.kintone.io/hc/en-us/articles/115005336727)`on developer network`
- [Get Form fields](https://developer.kintone.io/hc/en-us/articles/115005509288)`on developer network`
- [Get Form Layout](https://developer.kintone.io/hc/en-us/articles/115005509068)`on developer network`