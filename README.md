<h3 align="center" style="margin: 30px 0 35px;">Link Dev</h3>

<p align="center">
  <a href="https://www.npmjs.com/package/link-dev"><img alt="npm" src="https://img.shields.io/npm/v/link-dev"></a>
  <a href="https://raw.githubusercontent.com/imyangyong/link-dev/master/LICENSE"><img alt="NPM" src="https://img.shields.io/npm/l/link-dev"></a>
</p>

---

**Link your local npm packages automatically by a config file.**

## Installation

```
npm install link-dev -g
```

## Usage

config your local packages at root path of your project, for `package.local.json`.

json config for example:

```json
{
  "my-components": "../components",
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