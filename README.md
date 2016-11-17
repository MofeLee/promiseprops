# PromiseProps

Like Promise.all but for object properties

## Install

```
$ npm install --save promiseprops
```
## Usage

```js
import PromiseProps from 'promiseprops';
import got from 'got';

const fetch = url => got(url).then(res => res.body);

const sites = {
  ava: fetch('ava.li'),
  todomvc: fetch('todomvc.com'),
  github: fetch('github.com'),
  foo: 'bar'
};

PromiseProps(sites).then(result => {
  console.log(result);
  //=> {ava: '<!doctype ...', todomvc: '<!doctype ...', github: '<!doctype ...', foo: 'bar'}
});

```
