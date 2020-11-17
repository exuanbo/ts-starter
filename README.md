# @exuanbo/ts-starter

[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg?style=flat-square)](https://renovatebot.com/)

## Usage

- Simply click `Use this template`.
- Create a shell function as example below:

```bash
function ts_starter() {
    git clone https://github.com/exuanbo/ts-starter.git $1
    cd $1
    rm -rf .git
    git init
}
```

## What's included

- TypeScript v4
- rollup.js with TypeScript plugin and dts plugin
- ts-jest
- ts-standardx

### `devDependencies`

```json
{
  "devDependencies": {
    "@rollup/plugin-typescript": "6.1.0",
    "@types/node": "14.14.7",
    "@types/jest": "26.0.15",
    "jest": "26.6.3",
    "rollup": "2.33.2",
    "rollup-plugin-dts": "1.4.14",
    "ts-jest": "26.4.4",
    "ts-standardx": "0.4.1",
    "tslib": "2.0.3",
    "typescript": "4.0.5"
  }
}
```

## License

[MIT License](https://github.com/exuanbo/ts-starter/blob/main/LICENSE) © 2020 [Exuanbo](https://github.com/exuanbo)
