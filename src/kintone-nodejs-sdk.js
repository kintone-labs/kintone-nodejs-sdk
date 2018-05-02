/**
 * kintone api - nodejs client
 * kintone-nodeks-SDK
 */


let kintoneNodeJSSDK = {
    Auth: require('kintone-basejs-sdk').Auth,
    Connection: require('kintone-basejs-sdk').Connection,
    App: require('kintone-basejs-sdk').App,
    Record: require('kintone-basejs-sdk').Record,
    BulkRequest: require('kintone-basejs-sdk').BulkRequest,
};

module.exports = kintoneNodeJSSDK;
