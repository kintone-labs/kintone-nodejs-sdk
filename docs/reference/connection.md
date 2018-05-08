# Connection

[Connection](#) module will used as a connector to connect to kintone Rest API

> This module excute the request process by [request-promise](https://www.npmjs.com/package/request-promise) npm.

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| domain | String | yes | The username that is able to authenticate on kintone app
| auth | [Auth](./authentication) | yes | The authentication object
| guestSpaceID | Integer | (optional) | The guest space id. Use this parameter to connect to kintone guest space.

**Sample code**

<details class="tab-container" open>
<Summary>Init Connection module</Summary>

** Source code **

```javascript

const kintone = require('kintone-nodejs-sdk');

// Define Authentication object
let kintoneAuth = new kintone.Auth();
let username = '{your_user_name}';
let password = '{your_password}';
kintoneAuth.setPasswordAuth(username, password);

let myDomainName = 'my.domain.tld';
let kintoneConnection = new kintone.Connection(myDomainName, kintoneAuth);

// Define connection that included guest space
let guestSpaceID = /*{guestSpaceID}*/;
let kintoneConnectionWithGuestSpaceDemo =
    new kintone.Connection(myDomainName, kintoneAuth, guestSpaceID);

```

</details>

## Methods

### setHeader(key, value)

> Set new header of the [Connection](./connection)

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| key | String | yes | The header's `key` name
| value | String | yes | The header's value of `key`

**Return**

[Connection](./connection)

**Sample code**

<details class="tab-container" open>
<Summary>Set header of the Connection</Summary>

** Source code **

```javascript
let key = '{your_header_key}';
let value = '{your_header_value}';
kintoneConnection.setHeader(key, value);
```

</details>

### addRequestOption(key, value)

> Add option that supported by [request-promise](https://www.npmjs.com/package/request-promise) option

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| key | String | yes | The option's `key` name
| value | String | yes | The option's value of `key`

**Return**

[Connection](./connection)

**Sample code**

<details class="tab-container" open>
<Summary>Set header of the Connection</Summary>

** Source code **

```javascript
let key = '{your_option_key}';
let value = '{your_option_value}';
kintoneConnection.addRequestOption(key, value);
```

</details>
