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

### getApp(appId)

> Get single app

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| appId | Integer | yes | The kintone app ID

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Get app sample</Summary>

** Source code **

```javascript
let appId = {your_app_id};
kintoneApp.getApp(appId)
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

**Parameter **

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

### getAppsBySpaceIDs(spaceIds, offset, limit)

> Get multiple apps by list of space's ids

**Parameter **

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| spaceIds | Array<Integer\> | yes | The array of space ids
| offset | Integer | (optional) | The offset off data result
| limit | Integer | (optional) | The limit number of result

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Get apps sample</Summary>

** Source code **

```javascript
let spaceIds = [];
let limit = /*{your_limit_number}*/;
let offset = /*{your_offset_number}*/;
kintoneApp.getAppsBySpaceIDs(spaceIds, offset, limit)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });
```

</details>

### addPreviewApp(name, space, thread)

> Creates a preview App.

!!! warning

    - After using this method, use the [deployAppSettings](#deployappsettingsapps-revert) to deploy the settings to the live App.

**Parameter **

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| name | String | yes | The App name. The maximum length is 64 characters.
| space | 	Integer | (optional) | The Space ID of where the App will be created.  |
| thread | Integer | (optional) | The Thread ID of the thread in the Space where the App will be created. It is recommended to ignore this parameter so that Apps are created in the default thread. There is currently no helpful reason to create Apps in threads other than the default thread, as there are no visual representations in kintone of Apps being related to threads. There are only visual representations of Apps being related to Spaces.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Add preview App sample</Summary>

** Source code **

```javascript
const name = {your_app_name};
const space = {space_of_app};
const thread = {thread_id_in_space};
kintoneApp.addPreviewApp(name, space, thread)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });
```

</details>

### deployAppSettings(apps, revert)

> Updates the settings of a pre-live App to the live App.

**Parameter **

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| apps | Array<JSONObject\> | yes | The list of preview apps.
| revert | 	Boolean | (optional) | Specify "true" to cancel all changes made to the pre-live settings. The pre-live settings will be reverted back to the current settings of the live app.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Deploy app settings sample</Summary>

** Source code **

```javascript
const appPreview = {
        app: 'your_app_id',
        revision: 'revision_of_app'
    };
const apps = [
    appPreview
    // Another app preview here
];
const revert = false;
kintoneApp.deployAppSettings(apps, revert)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });
```

</details>

### getAppDeployStatus(apps)

> Gets the deployment status of the App settings for multiple Apps.

**Parameter **

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| apps | Array<Integer\> | yes | The list of Apps to check the deploy statuses of. The Maximum limit is 300. If Apps in Guest Spaces are specified, all Apps specified in the request must belong to that Guest Space.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Get app deploy status sample</Summary>

** Source code **

```javascript
const appPreview = {
        app: 'your_app_id',
        revision: 'revision_of_app'
    };
const apps = [
    'your_app_id'
    // Another app id here
];
kintoneApp.getAppDeployStatus(apps)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });
```

</details>

### getViews(app, lang, isPreview)

> Gets the View settings of a an App.

**Parameter **

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| app | Integer | yes | The app ID
| lang | String | (optional) | The language code. Support: <ul><li>DEFAULT: Default language setting of system </li><li>JA: English language setting</li><li>ZH: Chinese language setting</li><li>EN: English language setting</li> |
| isPreview | Boolean | (optional) | Get the views with a [pre-live settings](https://developer.kintone.io/hc/en-us/articles/115004401787).

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Get views sample</Summary>

** Source code **

```javascript
let app = {your_app_id};
let lang = {language_code}; // Ex: JA
kintoneApp.getViews(app, lang)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });

// Get a pre-live (preview) views
let app = {your_app_id};
let lang = {language_code}; // Ex: JA
let isPreview = true;
kintoneApp.getViews(app, lang, isPreview)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });
```

</details>

### updateViews(app, views, revision)

> Get field of form in kintone app

**Parameter **

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| app | Integer | yes | The app ID
| views | JSONObject | yes | An object of data of Views. About the format, please look the sample below or [reference](#reference) at the end of this page|
| revision | Boolean | (optional) | Specify the revision number of the settings that will be deployed.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Update views sample</Summary>

** Source code **

```javascript
const app = {your_app_id};
const views = {
    "Your_view_name": {
      "index": 0,
      "type": "your_view_type", // Default: 'LIST', 'CALENDAR', 'CUSTOM'
      "name": "Your_view_name",
      "fields": [
        "your_field_code"
        // Another field code here
      ],
      "filterCond": "your_query",
      "sort": "your_sort"      
    }
    // Another view here
}; 
const revision: 'settings_revision';

kintoneApp.updateViews(app, views, revision)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });
```

</details>

### getGeneralSettings(app, lang, isPreview)

> Gets the description, name, icon, revision and color theme of an App.

**Parameter **

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| app | Integer | yes | The app ID
| lang | String | (optional) | The language code. Support: <ul><li>DEFAULT: Default language setting of system </li><li>JA: English language setting</li><li>ZH: Chinese language setting</li><li>EN: English language setting</li> |
| isPreview | Boolean | (optional) | Get the general with a [pre-live settings](https://developer.kintone.io/hc/en-us/articles/115004811668).

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Get general settings sample</Summary>

** Source code **

```javascript
const app = {your_app_id};
const lang = {language_code}; // Ex: JA
kintoneApp.getGeneralSettings(app, lang)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });

// Get a pre-live (preview) general settings
const app = {your_app_id};
const lang = {language_code}; // Ex: JA
const isPreview = true;
kintoneApp.getGeneralSettings(app, lang, isPreview)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });
```

</details>

### updateGeneralSettings(app, generalSettings, revision)

> Update the description, name, icon, revision and color theme of an App.

**Parameter **

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| app | Integer | yes | The app ID
| generalSettings | JSONObject | (Conditional) | the description, name, icon, revision and color theme of an App.
| revision | Boolean | (optional) | Specify the revision number of the settings that will be deployed.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Update general settings sample</Summary>

** Source code **

```javascript
const app = {your_app_id};
const generalSettings = {
    "name": "APP_NAME",
    "description": "Here is app description.",
    "icon": {
      "type": "icon_type", // specified: FILE, PRESET
      "key": "icon_key"
    },
    "theme": "your_theme" // specified: WHITE, RED, BLUE, GREEN, YELLOW, BLACK
};
const revision = 'settings_revision';

kintoneApp.updateGeneralSettings(app, generalSettings, revision)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });
```

</details>

### getFormFields(app, lang, isPreview)

> Get field of form in kintone app

**Parameter **

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| app | Integer | yes | The app ID
| lang | String | (optional) | The language code. Support: <ul><li>DEFAULT: Default language setting of system </li><li>JA: English language setting</li><li>ZH: Chinese language setting</li><li>EN: English language setting</li> |
| isPreview | Boolean | (optional) | Get the app form fields with a [pre-live settings](https://developer.kintone.io/hc/en-us/articles/115005509288).

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Get app form field sample</Summary>

** Source code **

```javascript
let app = {your_app_id};
let lang = {language_code}; // Ex: JA
kintoneApp.getFormFields(app, lang)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });

// Get a pre-live (preview) form fields
let app = {your_app_id};
let lang = {language_code}; // Ex: JA
let isPreview = true;
kintoneApp.getFormFields(app, lang, isPreview)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });
```

</details>

### addFormFields(app, fields, revision)

> Adds fields to a form of an App.

!!! warning

    - After using this method, use the [deployAppSettings](#deployappsettingsapps-revert) to deploy the settings to the live App.

**Parameter **

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| app | Integer | yes | The app ID
| fields | 	JSONObject | yes | The formFields which will add to form of kintone app. About the format, please look the sample below or [reference](#reference) at the end of this  |
| revision | Integer | (optional) | Specify the revision number of the settings that will be deployed.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Add app form field sample</Summary>

** Source code **

```javascript
const app = {your_app_id};
const fields = {
    YourFieldCode: {
      "type": "SINGLE_LINE_TEXT",
      "code": "YourFieldCode",
      "label": "Text (single-line)",
      "noLabel": false,
      "required": true,
      "unique": true
    }
    // Another field here
};
const revision = 'the_revision_of_the_settings ';
kintoneApp.addFormFields(app, fields, revision)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });
```

</details>

### updateFormFields(app, fields, revision)

> Updates the field settings of fields in a form of an App.

!!! warning

    - After using this method, use the [deployAppSettings](#deployappsettingsapps-revert) to deploy the settings to the live App.

**Parameter **

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| app | Integer | yes | The app ID
| fields | 	JSONObject | yes | The formFields which will add to form of kintone app. About the format, please look the sample below or [reference](#reference) at the end of this  |
| revision | Integer | (optional) | Specify the revision number of the settings that will be deployed.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Update app form field sample</Summary>

** Source code **

```javascript
const app = {your_app_id};
const fields = {
    YourFieldCode: {
      "type": "SINGLE_LINE_TEXT",
      "code": "YourFieldCode",
      "label": "Text (single-line)",
      "noLabel": false,
      "required": true,
      "unique": true
    }
    // Another field here
};
const revision = 'the_revision_of_the_settings ';
kintoneApp.updateFormFields(app, fields, revision)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });
```

</details>

### deleteFormFields(app, fields, revision)

> Updates the field settings of fields in a form of an App.

!!! warning

    - After using this method, use the [deployAppSettings](#deployappsettingsapps-revert) to deploy the settings to the live App.

**Parameter **

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| app | Integer | yes | The app ID
| fields | 	Array<String\> | yes | The list of field codes of the fields to delete. Up to 100 field codes can be specified.|
| revision | Integer | (optional) | Specify the revision number of the settings that will be deployed.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Delete app form field sample</Summary>

** Source code **

```javascript
const app = {your_app_id};
const fields =[
     'your_field_cde'
    // Another field code here
];
const revision = 'revision_of_the_Settings ';
kintoneApp.deleteFormFields(app, fields, revision)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });
```

</details>

### getFormLayout(app, isPreview)

> Get layout of form in kintone app

**Parameter **

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| app | Integer | yes | The kintone app id
| isPreview | Boolean | (optional) | Get the app form layout with a [pre-live settings](https://developer.kintone.io/hc/en-us/articles/115005509288).

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Get form layout sample</Summary>

** Source code **

```javascript
let app = {your_app_id};
// Get form layout
kintoneApp.getFormLayout(app)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });

// Get a preview (pre-live) form layout
let isPreview = true;
kintoneApp.getFormLayout(app, isPreview)
    .then((rsp) => {
        console.log(rsp);
    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });
```

</details>

### updateFormLayout(app, layout, revision)

> Updates the field layout info of a form in an App.

!!! warning

    - After using this method, use the [deployAppSettings](#deployappsettingsapps-revert) to deploy the settings to the live App.

**Parameter **

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| app | Integer | yes | The kintone app id
| layout | Array<JSONObject\> | yes | A list of field layouts for each row. About the format, please look the sample below or [reference](#reference) at the end of this page.
| revision | Integer | (optional) | Specify the revision number of the settings that will be deployed. The request will fail if the revision number is not the latest revision.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Update form layout sample</Summary>

** Source code **

```javascript
const app = {your_app_id};
const fisrtRowLayout = {
            "type": "kintone_layout_type", 
            "fields": [
                {
                    "type": "kintone_field_type",
                    "code": "your_field_code",
                    "size": {
                        "width": "your_field_width"
                    }
                }
            ]
        },
const layout = [
    fisrtRowLayout
    // Another row layout here
]
const revision = 'settings_revision';

// Update form layout
kintoneApp.updateFormLayout(app, layout, revision)
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