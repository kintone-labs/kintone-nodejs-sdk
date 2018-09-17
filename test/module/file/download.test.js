/**
 * kintone api - nodejs client
 * test record module
 */

const nock = require('nock');
const common = require('../../common');

const fs = require('fs');
const path = require('path');

const {Auth, File, Connection} = require('../../../src/main');

const auth = new Auth();
auth.setPasswordAuth(common.USERNAME, common.PASSWORD);

const conn = new Connection(common.DOMAIN, auth);

const fileModule = new File(conn);

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
        const fileKey = '201809040332204A3B5797BC804153AFF1BBB78C86CAE9207';
        const filePath = './test/module/file/mock/download/test.png';
        nock('https://' + common.DOMAIN)
          .get(`/k/v1/file.json?fileKey=${fileKey}`)
          .reply(200, undefined);

        return fileModule.download(fileKey, filePath)
          .then(() => {
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
        const fileKey = '201809040332204A3B5797BC804153AFF1BBB78C86CAE9207';
        const filePath = './test/module/file/mock/download/test.png';
        nock('https://' + common.DOMAIN)
          .get(`/k/v1/file.json?fileKey=${fileKey}`)
          .reply(404, expectErr);

        fileModule.download(fileKey, filePath)
          .catch(err => {
            expect(err.get()).toMatchObject(expectErr);
          });
      });
    });
    // todo
  });
});
