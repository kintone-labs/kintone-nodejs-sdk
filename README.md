# kintone-nodejs-sdk

> kintone-node.js-sdk is the SDK of kintone REST API client on Node.js

## Install

### On NPM

```bash
$ cd your-project
$ npm install -g kintone-nodejs-sdk
```

### On local

- Install kintone-nodejs-sdk

```

$ cd your-dev-folder
$ mkdir kintone-sdk
$ cd kintone-sdk
$ git clone https://github.com/kintone/kintone-basejs-sdk
$ cd kintone-basejs-sdk
$ npm install
$ npm link
$ cd ..
$ git clone https://github.com/kintone/kintone-nodejs-sdk
$ cd kintone-nodejs-sdk
$ npm link kintone-basejs-sdk
$ npm install
$ npm link
$ cd ../..
```
- Use kintone-nodejs-sdk

```

$ cd your-project
$ npm link kintone-nodejs-sdk
$ node run-your-file.js
```

## Documents

[kintone-nodejs-sdk](https://kintone.github.io/kintone-nodejs-sdk/)

## License

MIT

## Copyright

Copyright(c) Cybozu, Inc.
