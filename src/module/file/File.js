/**
 * kintone api - nodejs client
 * File module
 */

'use-strict';

const FormData = require('form-data');

const {Connection} = require('kintone-basejs-sdk');

const FileModule = require('kintone-basejs-sdk').File;

const USER_AGENT = 'User-Agent';
const USER_AGENT_BASE_VALUE = '{name}/{version}';
const CONTENT_TYPE_KEY = 'Content-Type';
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
    // set default user-agent
    connection.setHeader(USER_AGENT,
      USER_AGENT_BASE_VALUE
        .replace('{name}', process.env.npm_package_name || 'kintone-nodejs-sdk')
        .replace('{version}', process.env.npm_package_version || '(none)')
    );
    super(connection);
  }
  /**
     * Upload file from local to kintone environment
     * @param {String} filePath
     * @return {Promise}
     */
  upload(fileName, fileContent) {
    if (!fileName || !fileContent) {
      throw new Error(`The content and name of file are requied`);
    }
    const formData = new FormData();
    formData.append('file', fileContent, fileName);

    this.connection.setHeader(CONTENT_TYPE_KEY, formData.getHeaders()['content-type']);
    return super.upload(formData);
  }
}
module.exports = File;
