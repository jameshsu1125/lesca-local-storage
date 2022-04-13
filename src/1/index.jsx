import Storage from '../lib/index';

// set any type of data
Storage.set('keyName', { anyKey: 'anyValue', name: 'anyName' });
Storage.set('num', 1);

// get data from storage
const data = Storage.get('keyName');

console.log(data);
console.log(Storage.get('num'));
