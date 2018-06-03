// comment

var str = 'string';
let bool = true;
const NUMBER = 1234;
var arr = [1, 'two'];
let obj = {
  key1: 'string',
  key2: 1234
};
var re = /ab+c/;

function Named (val1, val2) {
  return val1 + val2;
}

var funcExpression = function (foo, bar) {
  foo + bar;
};

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

if (1 === '1') {
  return true;
} else if (1 !== 'one') {
  return false;
} else if (1 <= '1') {
  return Named;
}

import React from 'react';
export {
  Named as default,
  funcExpression
}