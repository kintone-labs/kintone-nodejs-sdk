
/**
 * kintone api - nodejs client
 * test record module
 */

const nock = require('nock');
const common = require('../../common');

const fs = require('fs');
const path = require('path');

const main = require('../../../src/main');
const KintoneConnection = main.Connection;
const KintoneAuth = main.Auth;
const KintoneFile = main.File;


const auth = new KintoneAuth();
auth.setPasswordAuth(common.USERNAME, common.PASSWORD);

const conn = new KintoneConnection(common.DOMAIN, auth);

const fileModule = new KintoneFile(conn);

describe('upload function', () => {
  describe('common function', () => {
    it('should return promise', () => {
      nock('https://' + common.DOMAIN)
        .post('/k/v1/file.json')
        .reply(200, undefined);
      const file = fs.createReadStream('./test/module/file/mock/test.png');
      const fileName = path.basename('./test/module/file/mock/test.png');
      const fileupload = fileModule.upload(fileName, file);
      expect(fileupload).toHaveProperty('then');
      expect(fileupload).toHaveProperty('catch');
    });
  });

  describe('success case', () => {
    describe('valid params are specificed', () => {

      it('should upload successfully file', () => {
        const expectResult = {fileKey: 'dddde73js'};
        nock('https://' + common.DOMAIN)
          .post('/k/v1/file.json')
          .matchHeader('Content-Type', (type) => {
            expect(type).toEqual(expect.stringContaining('multipart/form-data; boundary='));
            return true;
          })
          .matchHeader(common.PASSWORD_AUTH, (authHeader) => {
            expect(authHeader).toBe(Buffer.from(common.USERNAME + ':' + common.PASSWORD).toString('base64'));
            return true;
          })
          .reply(200, expectResult);
        const file = fs.createReadStream('./test/module/file/mock/test.png');
        const fileName = path.basename('./test/module/file/mock/test.png');
        return fileModule.upload(fileName, file)
          .then((rsp) => {
            expect(rsp).toMatchObject(expectResult);
          });
      });
    });
    // todo
  });

  describe('error case', () => {
    describe('Required filename and file content', () => {
      const expectErr = {
        id: '4GtcxHkSRJjU18KAHCk7',
        code: 'GAIA_IC01',
        message: 'Content-Typeを指定してください。',
        errors: '{}'
      };

      it('should throw an error when ', () => {
        nock('https://' + common.DOMAIN)
          .post('/k/v1/file.json')
          .matchHeader(common.PASSWORD_AUTH, (authHeader) => {
            expect(authHeader).toBe(Buffer.from(common.USERNAME + ':' + common.PASSWORD).toString('base64'));
            return true;
          })
          .reply(500, expectErr);
        return expect(() => {
          fileModule.upload();
        }).toThrow();
      });
    });
  });
  // todo
});
