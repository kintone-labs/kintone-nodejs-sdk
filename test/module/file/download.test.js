
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

describe('dowload function', () => {
  describe('common function', () => {
    it('should return promise', () => {
      nock('https://' + common.DOMAIN)
        .get('/k/v1/file.json')
        .reply(200, undefined);

      const fileDownload = fileModule.download();
      expect(fileDownload).toHaveProperty('then');
      expect(fileDownload).toHaveProperty('catch');
    });
  });

  describe('success case', () => {
    describe('valid params are specificed', () => {

      it('should download successfully file', () => {
        nock('https://' + common.DOMAIN)
          .get('/k/v1/file.json', rqBody => {
            expect(rqBody.fileKey).toEqual('201809040332204A3B5797BC804153AFF1BBB78C86CAE9207');
            return true;
          })
          .matchHeader(common.PASSWORD_AUTH, (authHeader) => {
            expect(authHeader).toBe(Buffer.from(common.USERNAME + ':' + common.PASSWORD).toString('base64'));
            return true;
          })
          .reply(200, undefined);
        const fileKey = '201809040332204A3B5797BC804153AFF1BBB78C86CAE9207';
        const filePath = './test/module/file/mock/download/test.png';
        return fileModule.download(fileKey, filePath)
          .then((rsp) => {
            expect(rsp).toBe(undefined);

            fs.readdir('./test/module/file/mock/download/', (err, list) => {
              const existFile = list.every(file => path.basename(file) === 'test.png');
              expect(existFile).toBe(true);
            });
            // remove file
            fs.unlinkSync(filePath);
          });
      });
    });
    // todo
  });

  describe('error case', () => {
    describe('invalid file key', () => {
      const expectErr = {id: 'lzkAhxh7TWkr6X21BeJa',
        code: 'GAIA_BL01',
        message: 'The specified file (id: 201809040332204B5797BC804153AFF1BBB78C86CAE9207) not found.',
        errors: '{}'};

      it('should return an error', () => {
        nock('https://' + common.DOMAIN)
          .get('/k/v1/file.json', rqBody => {
            expect(rqBody.fileKey).toEqual('key');
            return true;
          })
          .matchHeader(common.PASSWORD_AUTH, (authHeader) => {
            expect(authHeader).toBe(Buffer.from(common.USERNAME + ':' + common.PASSWORD).toString('base64'));
            return true;
          })
          .reply(404, expectErr);
        const fileKey = 'key';
        const filePath = './test.png';
        return fileModule.download(fileKey, filePath)
          .catch(err => {
            expect(err.get()).toMatchObject(expectErr);
          });
      });
    });
    // todo
  });
});
