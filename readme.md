[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Installation

```sh
$ npm install lesca-local-storage --save
```

# Usage

```javascript
import Storage from 'lesca-local-storage';

// set any type of data
Storage.set('keyName', { anyKey: 'anyValue', name: 'anyName' });

// get data from storage
const { data, timestamp } = Storage.get('keyName');

console.log(data); //{ anyKey: 'anyValue', name: 'anyName' }
console.log(timestamp); // get milliseconds => (set data time ------> now)
```

# Methods

| method         |   options   |    description     | default |
| :------------- | :---------: | :----------------: | ------: |
| set(key, data) | key(string) | set data as a key  |         |
|                |  data(\*)   |        data        |         |
| get(key)       | key(string) | get data as a key  |         |
| remove(key)    | key(string) | remove data by key |         |
| clear()        |             |   clear all data   |         |
