# example-ui-yomeen (example-ui-yomeen)

example ui yomeen
此版本為基礎vue架構 + i18n + axios

## Install the dependencies
```bash
npm install
```

## 原始碼位置
src/

## quasar 設定檔
quasar.conf.js
* 設定build目標為dist
```json
"build": {
      distDir: 'dist',
      vueRouterMode: 'hash',
    },
```

## 指定firebase hosting設定值
```json
{
  "hosting": [{
    "target": "example-ui-yomeen",
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }]
}
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
