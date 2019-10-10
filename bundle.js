(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.findItem = exports.printArray = void 0;

var findItem = function findItem(array, item) {
  return array.indexOf(item);
};

exports.findItem = findItem;

var printArray = function printArray(array, str) {
  var outputString = '';

  for (var i = 0; i < array.length; i++) {
    outputString += array[i] + str;
  }

  return outputString;
};

exports.printArray = printArray;

var sumOfArrayElements = function sumOfArrayElements(array) {
  return array.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};

var _default = sumOfArrayElements;
exports["default"] = _default;
},{}],2:[function(require,module,exports){
"use strict";

var arrayFunctions = _interopRequireWildcard(require("./ary"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var array = [1, 2, 3, 4, 5, 6];
console.log((0, arrayFunctions["default"])(array));
console.log(arrayFunctions.findItem(array, 6));
console.log(arrayFunctions.printArray(array, '?'));
},{"./ary":1}]},{},[2]);
