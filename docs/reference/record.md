# Record

Provide manipulate functions on records: get, update, delete, update the record status & assignees in the kintone app

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| connection | [Connection](./connection) | yes | The connection module of this SDK.

**Sample code**

<details class="tab-container" open>
<Summary>Init record module</Summary>

** Source code **

```javascript

const kintone = require('kintone-nodejs-sdk');

const kintoneRecord = new kintone.Record(connection);
```

</details>

## Methods

### getRecord(app, id)

> Retrieves details of 1 record from an app.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| app | Integer | yes | The kintone app ID
| id | Integer | yes | The record ID in kintone app


**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Get record</Summary>

** Source code **

```javascript
const app = /*{your_app_id}*/;
const id = {your_record_id};
kintoneRecord.getRecord(app, id).then((rsp) => {
  console.log(rsp);
}).catch((err) => {
  // This SDK return err with KintoneAPIExeption
  console.log(err.get());
});
```

</details>

### getRecords(app, query, fields, totalCount)

> Retrieves details of multiple records from an app using a query string.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| app | Integer | yes | The kintone app ID
| query | String | (optional) | [The query string](https://developer.kintone.io/hc/en-us/articles/213149287#getrecords) that will specify what records will be responded.
| fields | Array<String\> | (optional) | List of field codes you want in the response.
| totalCount | Boolean | (optional) | If "true", the request will retrieve total count of records match with query conditions.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Get records</Summary>

** Source code **

```javascript
const app = /*{your_app_id}*/;
const query = '{your_query_string}';
const fields = [
    '{your_field_code}',
    // another fieldCode
]
const totalCount = /*{your_decide_true_or_false}*/;
kintoneRecord.getRecords(app, query, fields, totalCount).then((rsp) => {
  console.log(rsp);
}).catch((err) => {
  // This SDK return err with KintoneAPIExeption
  console.log(err.get());
});
```

</details>

### addRecord(app, record)

>Add one record to an app.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| app | Integer | yes | The kintone app ID
| record | JSONObject | (optional) | The record data to be add to kintone app. About the format, please look the sample below or [reference](#reference) at the end of this page

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Add record</Summary>

** Source code **

```javascript
const app = /*{your_app_id}*/;
const record = {
    YourFieldCode: {
        value: 'Value Of YourFieldCode'
    },
    // Another fieldcode here
};
kintoneRecord.addRecord(app, record).then((rsp) => {
  console.log(rsp);
}).catch((err) => {
  // This SDK return err with KintoneAPIExeption
  console.log(err.get());
});
```

</details>

### addRecords(app, records)

>Add multiple records to an app.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| app | Integer | yes | The kintone app ID
| records | Array<JSONObject\> | yes | List of records data to be add to kintone app. About the format, please look the sample below or [reference](#reference) at the end of this page.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Add multi records</Summary>

** Source code **

```javascript
const app = /*{your_app_id}*/;
const record = {
  YourFieldCode: {
    value: 'Value Of YourFieldCode'
  },
  // Another fieldcode here
};
const records = [
  record
  // another record
];
kintoneRecord.addRecords(app, records).then((rsp) => {
  console.log(rsp);
}).catch((err) => {
  // This SDK return err with KintoneAPIExeption
  console.log(err.get());
});
```

</details>

### updateRecordByID(app, id, record, revision)

> Updates details of 1 record in an app by specifying its record number.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| app | Integer | yes | The kintone app ID
| id | Integer | yes | The record ID on kintone app
| record | JSONObject | yes | The record data to be update in  kintone app. About the format, please look the sample below or [reference](#reference) at the end of this page.
| revision | Integer | (optional) | The revision number of record

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Update record by ID</Summary>

** Source code **

```javascript
const app = /*{your_app_id}*/;
const id = /*{your_record_id}*/;
const record = {
  YourFieldCode: {
    value: 'Value Of YourFieldCode'
  },
  // Another fieldcode here
};
const revision = /*{revision_of_record}*/;
kintoneRecord.updateRecordById(app, id, record, revision).then((rsp) => {
  console.log(rsp);
}).catch((err) => {
  // This SDK return err with KintoneAPIExeption
  console.log(err.get());
});
```

</details>

### updateRecordByUpdateKey(app, updateKey, record, revision)

Updates details of 1 record in an app by unique key.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| app | Integer | yes | The kintone app ID
| updateKey | JSONObject | yes | The unique key of the record to be updated. About the format, please look the sample below or [reference](#reference) at the end of this page.
| record | JSONObject | yes | The record data will be added to kintone app. About the format, please look the sample below or [reference](#reference) at the end of this page.
| revision | Integer | (optional) | The revision number of record

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Update record by UpdateKey</Summary>

** Source code **

```javascript
const app = /*{your_app_id}*/;
const updateKey = {
  field: '{your_fieldcode}',
  value: '{your_fieldcode_value}'
};
const record = {
  YourFieldCode: {
    value: 'Value Of YourFieldCode'
  },
  // Another fieldcode here
};
const revision = /*{revision_of_record}*/;
kintoneRecord.updateRecordByUpdateKey(app, updateKey, record, revision).then((rsp) => {
  console.log(rsp);
}).catch((err) => {
  // This SDK return err with KintoneAPIExeption
  console.log(err.get());
});
```

</details>

### updateRecords(app, records)

> Updates details of multiple records in an app, by specifying their record number, or a different unique key.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| app | Integer | yes | The kintone app ID
| records | Array<JSONObject\> | yes | The record data will be added to kintone app. About the format, please look the sample below or [reference](#reference) at the end of this page.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Update multi records</Summary>

** Source code **

```javascript
const app = /*{your_app_id}*/;
const record = {
    YourFieldCode: {
        value: 'Value Of YourFieldCode'
    },
    // Another fieldcode here
};
const recordUpdate = {
    id: /*{your_record_id}*/, // Optional. Required, if updateKey will not be specified.
    updateKey: { // Optional. Required, if id will not be specified.
        field: '{your_field_code}',
        value: '{your_field_code_value}'
    },
    record: record,
    revision: /*{record_revision_number}*/ // Optional
};
const recordsUpdate = [
    recordUpdate,
    // Another recordUpdate
]
kintoneRecord.updateRecords(app, recordsUpdate).then((rsp) => {
  console.log(rsp);
}).catch((err) => {
  // This SDK return err with KintoneAPIExeption
  console.log(err.get());
});
```

</details>

### deleteRecords(app, ids)

> Deletes multiple records in an app.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| app | Integer | yes | The kintone app ID
| ids | Array<Integer\> | yes | The list ids of record will be delete.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Delete multi record</Summary>

** Source code **

```javascript
const app = /*{your_app_id}*/;
const ids = [/*your_record_id*/]
kintoneRecord.deleteRecords(app, ids).then((rsp) => {
  console.log(rsp);
}).catch((err) => {
  // This SDK return err with KintoneAPIExeption
  console.log(err.get());
});
```

</details>

### deleteRecordsWithRevision(app, idsWithRevision)

> Deletes multiple records in an app with revision.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| app | Integer | yes | The kintone app ID
| idsWithRevision | JSONObject | yes | JSONObject format by HashTable<`Integer`, `Integer`\> (**key**: `The Id of record`, **value**: `The Revision of record.`)

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Delete record with revision</Summary>

** Source code **

```javascript
const app = /*{your_app_id}*/;
const idsWithRevision = {
    /*your_record_id: revision_of_record*/
}
kintoneRecord.deleteRecordsWithRevision(app, idsWithRevision).then((rsp) => {
  console.log(rsp);
}).catch((err) => {
  // This SDK return err with KintoneAPIExeption
  console.log(err.get());
});
```

</details>

### updateRecordAssignees(app, id, assignees, revision)

> Update assignees of a record.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| app | Integer | yes | The kintone app ID
| id | Integer | yes | The record ID of kintone app
| assignees | Array<String\> | yes | The user code(s) of the assignee(s)
| revision | Integer | (option) | The revision number of record

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>update record Assignees</Summary>

** Source code **

```javascript
const app = /*{your_app_id}*/;
const id = /*{your_record_id}*/;
const assignees = [/*your_assignee(s)*/];
const revision = /*{revision_of_record}*/;

kintoneRecord.updateRecordAssignees(app, id, assignees, revision).then((rsp) => {
  console.log(rsp);
}).catch((err) => {
  // This SDK return err with KintoneAPIExeption
  console.log(err.get());
});
```

</details>

### updateRecordStatus(app, id, action, assignee, revision)

> Updates the Status of a record of an app.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| app | Integer | yes | The kintone app ID.
| id | Integer | yes | The record ID on kintone app.
| action | String | yes | The Action name will be run.
| assignee | String | (Conditionally required) | The next Assignee. Specify the Assignee's log in name.</br>Required, if the "Assignee List" of the current status is set to "User chooses one assignee from the list to take action", and a selectable assignee exists.
| revision | Integer | (optional) | The revision of record

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Update record status</Summary>

** Source code **

```javascript
const app = /*{your_app_id}*/;
const id = /*{your_record_id}*/;
const action = /*{your_action_name}*/;
const assignee = '/*your_assignee(s)*/';
const revision = /*{revision_of_record}*/;

kintoneRecord.updateRecordStatus(app, id, action, assignee, revision).then((rsp) => {
  console.log(rsp);
}).catch((err) => {
  // This SDK return err with KintoneAPIExeption
  console.log(err.get());
});
```

</details>

### updateRecordsStatus(app, records)

> Updates the Status of multiple records of an app.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| app | Integer | yes | The kintone app ID
| records | Array<JSONObject\> | yes | The recod status data. See belowsample codee or [reference](#reference) at the end of this page to know format.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Update multi record status</Summary>

** Source code **

```javascript
const app = /*{your_app_id}*/;
const recordStatusUpdateItem = {
    id: /*your_record_id*/,
    action: '/*your_action_name*/',
    assignee: '/*your_assignee*/',
    revision: /*your_record_revision*/
}
const records = [
    recordStatusUpdateItem,
    /*another data like recordStatusUpdateItem*/
];
kintoneRecord.updateRecordsStatus(app, records).then((rsp) => {
  console.log(rsp);
}).catch((err) => {
  // This SDK return err with KintoneAPIExeption
  console.log(err.get());
});
```

</details>

### getComments(app, record, order, offset, limit)

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| app | Integer | yes | The kintone app ID
| record | Integer | yes | The ID of record
| order | String | (optional) | The sort order of the Comment ID. Please select **asc** or **desc**
| offset | Integer | (optional) | The number of first comments will be ignored.
| limit | Integer | (optional) | The number of records to retrieve.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Get comments</Summary>

** Source code **

```javascript
const app = /*{your_app_id}*/;
const id = /*{your_record_id}*/;
const order = /*{your_order_type}*/; // asc or desc
const offset = /*{your_offset_number}*/;
const limit = /*{your_limit number}*/;
kintoneRecord.getComments(app, id, order, offset, limit).then((rsp) => {
  console.log(rsp);
}).catch((err) => {
  // This SDK return err with KintoneAPIExeption
  console.log(err.get());
});
```

</details>

### addComment(app, record, comment)

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| app | Integer | yes | The kintone app ID |
| record | Integer | yes | The ID of record |
| comment | JSONObject | yes | About the format, please look the sample below or [reference](#reference) at the end of this page.|

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Add comment</Summary>

** Source code **

```javascript
const app = /*{your_app_id}*/;
const record = /*{your_record_id}*/;
const comment = {
  text: '/*your_comment_content*/',
  mentions: [
    {
      code: '/*your_member_code*/',
      type: '/*your_member_type*/' // either `USER` or `GROUP` or `ORGANIZATION`
    },
    // another mention here
  ]
};
kintoneRecord.addComment(app, record, comment)
  .then((rsp) => {
    console.log(rsp);
  })
  .catch((err) => {
    // This SDK return err with KintoneAPIExeption
    console.log(err.get());
  });
```

</details>

### deleteComment(app, record, comment)

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| app | Integer | yes | The kintone app ID
| record | Integer | yes | The record ID on kintone app
| comment | Integer | yes | The comment ID on kintone record

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Delete comment</Summary>

** Source code **

```javascript
const app = /*{your_app_id}*/;
const record = /*{your_record_id}*/;
const comment = /*{your_comment_id}*/;
kintoneRecord.deleteComment(app, record, comment)
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

- [Get Record](https://developer.kintone.io/hc/en-us/articles/213149287/) `on developer network`
- [Add Record](https://developer.kintone.io/hc/en-us/articles/212494628/)`on developer network`
- [Update Record](https://developer.kintone.io/hc/en-us/articles/213149027/)`on developer network`
- [Delete Record](https://developer.kintone.io/hc/en-us/articles/212494558/)`on developer network`
- [Get Comments](https://developer.kintone.io/hc/en-us/articles/219105188)`on developer network`
- [Add Comment](https://developer.kintone.io/hc/en-us/articles/219501367)`on developer network`
- [Delete Comment](https://developer.kintone.io/hc/en-us/articles/219562607)`on developer network`
- [Update Record Status](https://developer.kintone.io/hc/en-us/articles/213149747)`on developer network`
- [Update Record Assignees](https://developer.kintone.io/hc/en-us/articles/219563427)`on developer network`