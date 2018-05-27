'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var H = require('partial.lenses.history');
var K = require('karet.lift');

// THIS FILE IS GENERATED

var count = /*#__PURE__*/K.lift(H.count);
var init = /*#__PURE__*/K.lift(H.init);
var redoForget = /*#__PURE__*/K.lift(H.redoForget);
var undoForget = /*#__PURE__*/K.lift(H.undoForget);

exports.index = H.index;
exports.present = H.present;
exports.redoIndex = H.redoIndex;
exports.undoIndex = H.undoIndex;
exports.count = count;
exports.init = init;
exports.redoForget = redoForget;
exports.undoForget = undoForget;
