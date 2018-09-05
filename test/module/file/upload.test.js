
/**
 * kintone api - nodejs client
 * test record module
 */

const nock = require('nock');
const common = require('../../common');

const path = require('path');

const main = require('../../../src/main');
const KintoneConnection = main.Connection;
const KintoneAuth = main.Auth;
const KintoneFile = main.File;


const auth = new KintoneAuth();
auth.setPasswordAuth(common.USERNAME, common.PASSWORD);

const conn = new KintoneConnection(common.DOMAIN, auth);

const fileModule = new KintoneFile(conn);

describe('dowload function', () => {
  describe('common function', () => {
    it('should return promise', () => {
      nock('https://' + common.DOMAIN)
        .post('/k/v1/file.json')
        .reply(200, undefined);

      const fileupload = fileModule.upload('test');
      expect(fileupload).toHaveProperty('then');
      expect(fileupload).toHaveProperty('catch');
    });
  });

  describe('success case', () => {
    describe('valid params are specificed', () => {

      it('should upload successfully file', () => {
        const filePath = './test/module/file/mock/upload/test.png';
        const expectResult = {fileKey: 'dddde73js'};
        nock('https://' + common.DOMAIN)
          .post('/k/v1/file.json', body => {
            expect(body).toEqual(expect.stringContaining('filename="test.png"'));
            expect(body).toEqual(expect.stringContaining('Content-Disposition: form-data;'));
            expect(body).toEqual(expect.stringContaining('name="file"'));
            expect(body).toEqual(expect.stringContaining('Content-Type: image/png'));
            return true;
          })
          .matchHeader('Content-Type', (type) => {
            expect(type).toEqual(expect.stringContaining('multipart/form-data; boundary='));
            return true;
          })
          .matchHeader(common.PASSWORD_AUTH, (authHeader) => {
            expect(authHeader).toBe(Buffer.from(common.USERNAME + ':' + common.PASSWORD).toString('base64'));
            return true;
          })
          .reply(200, expectResult);

        return fileModule.upload(filePath)
          .then((rsp) => {
            expect(JSON.parse(rsp)).toMatchObject(expectResult);
          });
      });
    });
    // todo
  });

  describe('error case', () => {
    describe('invalid file path', () => {
      const expectErr =
      {id: 0,
        code: null,
        message: 'Error: form-data: ENOENT: no such file or directory, open \'test.png\''};

      it('should return an error', () => {
        nock('https://' + common.DOMAIN)
          .post('/k/v1/file.json')
          .matchHeader(common.PASSWORD_AUTH, (authHeader) => {
            expect(authHeader).toBe(Buffer.from(common.USERNAME + ':' + common.PASSWORD).toString('base64'));
            return true;
          })
          .reply(500, expectErr);
        const filePath = 'test.png';
        return fileModule.upload(filePath)
          .catch(err => {
            expect(err.get()).toBeDefined();
          });
      });
    });
  });
  // todo
});
