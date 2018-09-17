
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
const filePath = './test/module/file/mock/test.png';

describe('upload function', () => {
  describe('common function', () => {
    it('should return promise', () => {
      nock('https://' + common.DOMAIN)
        .post('/k/v1/file.json')
        .reply(200, undefined);
      const fileupload = fileModule.upload(filePath);
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
        return fileModule.upload(filePath)
          .then((rsp) => {
            expect(rsp).toMatchObject(expectResult);
          });
      });
    });
    // todo
  });

  describe('error case', () => {
    describe('Required filepath', () => {

      it('should throw an error when file path is invalid', () => {
        nock('https://' + common.DOMAIN)
          .post('/k/v1/file.json')
          .matchHeader(common.PASSWORD_AUTH, (authHeader) => {
            expect(authHeader).toBe(Buffer.from(common.USERNAME + ':' + common.PASSWORD).toString('base64'));
            return true;
          })
          .reply(500, undefined);
        return expect(() => {
          fileModule.upload();
        }).toThrow();
      });
    });
  });
  // todo
});
