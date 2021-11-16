<h3 align="center" style="margin: 30px 0 35px;">Link Dev</h3>

<p align="center">
  <a href="https://www.npmjs.com/package/link-dev"><img alt="npm" src="https://img.shields.io/npm/v/link-dev"></a>
  <a href="https://raw.githubusercontent.com/imyangyong/link-dev/master/LICENSE"><img alt="NPM" src="https://img.shields.io/npm/l/link-dev"></a>
</p>

---

**Link your local npm packages automatically by a config file.**

> Currently, only `pnpm` is supported

## Installation

```
pnpm add link-dev --global
```

## Usage

config your local packages at root path of your project, for `package.local.json` or your custom config file.

json config for example:

```json
{
  "@imyangyong/components": "/Users/imyangyong/Documents/imyangyong/components",
  "my-utils": "/Users/yangyong/Documents/imyangyong/my-utils"
}
```

in the `package.json`, for example:

```json
//...
"scripts": {
  "dev": "link-dev && xxxxxxxx",
}
//...
```

## Options

- config: custom your config file.

  `link-dev --config myConfigFile.json`