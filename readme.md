[![React](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://zh-hant.reactjs.org/)
[![React](https://img.shields.io/badge/Less-1d365d?style=for-the-badge&logo=less&logoColor=white)](https://lesscss.org/)
[![React](https://img.shields.io/badge/Typescript-4277c0?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3schools.com/html/)
[![React](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![NPM](https://img.shields.io/badge/NPM-ba443f?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![React](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![NPM](https://img.shields.io/badge/DEV-Jameshsu1125-9cf?style=for-the-badge)](https://www.npmjs.com/~jameshsu1125)

# Why use it?

save data by base64 in local storage.

#### [Live Demo](https://jameshsu1125.github.io/lesca-local-storage/)

# Installation

```sh
npm install lesca-local-storage --save
```

## Usage

```javascript
import Storage from 'lesca-local-storage';

// set any type of data
Storage.set('keyName', { anyKey: 'anyValue', name: 'anyName' });

// get data from storage
const { data, timestamp } = Storage.get('keyName');

console.log(data); //{ anyKey: 'anyValue', name: 'anyName' }
console.log(timestamp); // get milliseconds => (set data time ------> now)
```

## Development

### Methods

| method                                        |    description     | return |
| :-------------------------------------------- | :----------------: | -----: |
| .**set**(**key**:_string_, **data**:_object_) | set data as a key  |   void |
| .**get**(**key**:_string_)                    | get data as a key  |   void |
| .**remove**(**key**:_string_)                 | remove data by key |   void |
| .**clear**()                                  |   clear all data   |   void |

### Features

- maintain if necessary
