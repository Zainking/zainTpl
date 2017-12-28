
zainTpl.js
=============

zainTpl provides the power necessary to let you build **semantic templates** simplely with no frustration.

Installing
----------

```shell
npm install zain-tpl
```

Usage
-----

```js
var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
             "{{kids.length}} kids</p>";

var data = { "name": "Alan", "hometown": "Somewhere, TX",
             "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
var result = zainTpl(source, data);

// Would render:
// <p>Hello, my name is Alan. I am from Somewhere, TX. I have 2 kids</p>
```

Full documentation and more examples are at floder 'simple'.

Doc
---

Unit test
---------

```shell
npm test
```

Supported Environments
----------------------

zainTpl has been designed to work in any ECMAScript 3 environment. This includes

- Node.js
- Chrome
- Firefox
- Safari 5+
- Opera 11+
- IE 6+

Older versions and other runtimes are likely to work but have not been formally
tested.


License
-------
zainTpl.js is released under the MIT license.
