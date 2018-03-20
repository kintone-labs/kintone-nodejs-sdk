# Bulk Request

The Bulk Request API allows multiple API requests to run on multiple kintone apps. The below API can be used with the Bulk Request API:

- Add Record
- Add Records
- Update Record
- Update Records
- Delete Records
- Update Status
- Update Statuses
- Update Assignees

## Constructor

### **Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| connection | [Connection](./connection) | yes | The connection module of this SDK.

### **Sample code**

<details class="tab-container" open>
<Summary>Init bulk request module</Summary>

** Source code **

```javascript

const kintone = 'kintone-nodejs-sdk';

let kintoneBulkRequest = new kintone.BulkRequest(connection);
```

</details>

## Methods

> All below methods (excluded `execute()` method) will add request to queue, you must execute the `execute()` function to get result of BulkRequest.

### addRecord(appID, recordData)

**Parameter**

See at [Record - addRecord](./record)

**Return**

[BulkRequest](#bulkrequest)

### addRecords(appID, recordsData)

**Parameter**

See at [Record - addRecords](./record)

**Return**

[BulkRequest](#bulkrequest)

### updateRecordById(appID, recordID, recordData, revision)

**Parameter**

See at [Record - updateRecordById](./record)

**Return**

[BulkRequest](#bulkrequest)

### updateRecordByUpdateKey(appID, updateKey, recordData, revision)

**Parameter**

See at [Record - updateRecordByUpdateKey](./record)

**Return**

[BulkRequest](#bulkrequest)

### updateRecords(appID, recordsData)

**Parameter**

See at [Record - updateRecords](./record)

**Return**

[BulkRequest](#bulkrequest)

### deleteRecords(appID, recordIDs)

**Parameter**

See at [Record - deleteRecords](./record)

**Return**

[BulkRequest](#bulkrequest)

### deleteRecordsWithRevision(appID, idsWithRevision)

**Parameter**

See at [Record - deleteRecordsWithRevision](./record)

**Return**

[BulkRequest](#bulkrequest)

### updateRecordAssignees(appID, recordID, assignees, revision)

**Parameter**

See at [Record - updateRecordAssignees](./record)

**Return**

[BulkRequest](#bulkrequest)

### updateRecordStatus(appID, recordID, actionName, assignee, revision)

**Parameter**

See at [Record - updateRecordStatus](./record)

**Return**

[BulkRequest](#bulkrequest)

### updateRecordsStatus(appID, recordsStatusUpdate)

**Parameter**

See at [Record - updateRecordsStatus](./record)

**Return**

[BulkRequest](#bulkrequest)

### execute()

> Execute the bulk request and get data response

**Parameter**

(none)

**Return**

[Promise]

**Sample code**

<details class="tab-container" open>
<Summary>Execute bulk request</Summary>

** Source code **

```javascript

let responseBulkRequest = kintoneBulkRequest
    .addRecord(/*[Args]*/)
    .addRecords(/*[Args]*/)
    .updateRecords(/*[Args]*/)
    .deleteRecords()
    .execute();
responseBulkRequest
    .then((resp) => {
        console.log(resp);
    })
    .catch((err) => {
        // write error to console
        console.log(err.get());
        // Throw error
        err.throw()
    });
```

</details>

## Reference

- [Get Record](https://developer.kintone.io/hc/en-us/articles/213149287/) `on developer network`