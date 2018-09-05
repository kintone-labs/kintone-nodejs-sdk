/**
 * kintone api - nodejs client
 * File module
 */

'use-strict';

const fs = require('fs');
const path = require('path');

const KintoneExeption = require('kintone-basejs-sdk').KintoneException;
const FileModule = require('kintone-basejs-sdk').File;


/**
 * File module for NodeJS
 */
class File extends FileModule {
  /**
     * Download file from kintone
     * @param {String} fileKey
     * @return {Promise}
     */
  download(fileKey, outPutFilePath) {
    const downloadFile = super.download(fileKey)
      .then((fileContent) => {
        try {
          const options = {
            encoding: 'utf16le'
          };
          fs.writeFileSync(outPutFilePath, fileContent, options);
        } catch (err) {
          throw new KintoneExeption(err);
        }
      });
    return downloadFile;
  }
  /**
     * Upload file from local to kintone environment
     * @param {String} filePath
     * @return {Promise}
     */
  upload(filePath) {
    const formData = {
      file: {
        value: fs.createReadStream(filePath),
        options: {
          filename: path.basename(filePath),
        }
      }
    };
    return super.upload(formData);
  }
}
module.exports = File;
