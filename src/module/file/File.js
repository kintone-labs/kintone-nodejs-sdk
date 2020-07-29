/**
 * kintone api - nodejs client
 * File module
 */

'use-strict';

const fs = require('fs');
const path = require('path');

const {Connection, KintoneAPIException} = require('kintone-basejs-sdk');

const FileModule = require('kintone-basejs-sdk').File;
/**
 * File module for NodeJS
 */
class File extends FileModule {
  /**
     * The constructor for this module
     * @param {Connection} connection
     */
  constructor(connection) {
    if (!(connection instanceof Connection)) {
      throw new Error(`${connection}` +
                  `not an instance of kintoneConnection`);
    }
    super(connection);
  }
  /**
     * Download file from kintone
     * @param {String} fileKey
     * @return {Promise}
     */
  download(fileKey, outPutFilePath) {
    return super.download(fileKey).then((fileContent) => {
      try {
        const options = {
          encoding: 'utf16le'
        };
        fs.writeFileSync(outPutFilePath, fileContent, options);
      } catch (err) {
        throw new KintoneAPIException(err);
      }
    });
  }
  /**
     * Upload file from local to kintone environment
     * @param {String} filePath
     * @return {Promise}
     */
  upload(filePath) {
    try {
      const fileContent = fs.createReadStream(filePath);
      const fileName = path.basename(filePath);

      return super.upload(fileName, fileContent);
    } catch (err) {
      throw new Error(`File path is not valid`);
    }
  }
}
module.exports = File;
