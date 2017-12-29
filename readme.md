
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
### zainTpl(template, data, isSafeMode)
#### return
* [String]Compiled string

#### params
* template: [String]Template string, where variables are wrapped with curly braces.
* data: [Object]Compile the required data, and if the data is not found at compile time, the original template string will be used.
* isSafeMode: [Bool]When this quantity is true or not filled in, the HTML character is escaped.

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
