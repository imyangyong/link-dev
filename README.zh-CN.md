<h3 align="center" style="margin: 30px 0 35px;">Link Dev</h3>

<p align="center">
  <a href="https://www.npmjs.com/package/link-dev"><img alt="npm" src="https://img.shields.io/npm/v/link-dev"></a>
  <a href="https://raw.githubusercontent.com/imyangyong/link-dev/master/LICENSE"><img alt="NPM" src="https://img.shields.io/npm/l/link-dev"></a>
</p>

<p align="center">
   🇬🇧 <a href="./README.md">English</a>
</p>

---

**通过一个 config 文件自动依赖本地 npm 包.**

## 安装

```
npm install link-dev -g
```

## 如何使用

在项目根目录配置 `package.local.json` 文件, **键**为包的名称, **值**为包的本地路径(支持绝对路径与相对路径).

示例:

```json
{
  "my-components": "../components",
  "my-utils": "/Users/yangyong/utils"
}
```

之后, 你可以将 `link-dev` 命令配置到启动前.

`package.json`:

```json
//...
"scripts": {
  "dev": "link-dev && xxxxxxxx",
}
//...
```

## 配置项

- config: 自定义你的配置文件目录, 默认: `package.local.json`.

  `link-dev --config myConfigFile.json`