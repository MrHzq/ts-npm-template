# ts-npm-template

[![Build Status](https://travis-ci.org/MrHzq/ts-npm-template.svg?branch=master)](https://travis-ci.org/MrHzq/ts-npm-template) [![Coverage Status](https://coveralls.io/repos/github/MrHzq/ts-npm-template/badge.svg?branch=master)](https://coveralls.io/github/MrHzq/ts-npm-template?branch=master)

TypeScript 发布 Npm 包 模板

## 发布流程

1. `npm run build`
2. `npm run cover`
3. `npm login`
4. `npm version patch`
5. `npm publish`

## 安装

```sh
 cnpm i ts-npm-template -S
```

```sh
 npm install ts-npm-template --save
```

```sh
 yarn add ts-npm-template
```

## 使用

```javascript
import { Tsadd } from 'ts-npm-template'

console.log(Tsadd(100, 1000))
```
