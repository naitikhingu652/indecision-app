import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

console.log(validator.isEmail('naitikhingu652@gmail.com'));

const template = React.createElement('p', {}, 'Testing');
ReactDOM.render(template, document.getElementById('app'));