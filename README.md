<h3 align="center" style="margin: 30px 0 35px;">Link Dev</h3>

<p align="center">
  <a href="https://www.npmjs.com/package/link-dev"><img alt="npm" src="https://img.shields.io/npm/v/link-dev"></a>
  <a href="https://raw.githubusercontent.com/imyangyong/link-dev/master/LICENSE"><img alt="NPM" src="https://img.shields.io/npm/l/link-dev"></a>
</p>

<p align="center">
  🇨🇳 <a href="./README.zh-CN.md">简体中文</a>
</p>

---

**Link your local npm packages automatically by a config file**

> `npm`, `yarn`, `pnpm` package managers are supported.

## Installation

```
npm install link-dev -g
```

## Usage

Config your local packages at root path of your project, for `package.local.json`.

The ** key ** is the name of the package, and the ** value ** is the local path of the package (both absolute and relative paths are supported).

json config for example:

```json
{
  "my-components": "../components",
  "my-utils": "/Users/yangyong/utils"
}
```

Then, you can configure the 'link-dev' command to pre-boot.

`package.json`, for example:

```json
//...
"scripts": {
  "dev": "link-dev && xxxxxxxx",
}
//...
```

## Options

- config: custom your config file, default: `package.local.json`.

  `link-dev --config myConfigFile.json`