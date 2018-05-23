'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var H = require('partial.lenses.history');
var K = require('karet.lift');

// THIS FILE IS GENERATED

var count = /*#__PURE__*/K.lift(H.count);
var index = /*#__PURE__*/K.lift(H.index);
var init = /*#__PURE__*/K.lift(H.init);
var present = /*#__PURE__*/K.lift(H.present);
var redo = /*#__PURE__*/K.lift(H.redo);
var redoCount = /*#__PURE__*/K.lift(H.redoCount);
var redoForget = /*#__PURE__*/K.lift(H.redoForget);
var setIndex = /*#__PURE__*/K.lift(H.setIndex);
var setPresent = /*#__PURE__*/K.lift(H.setPresent);
var undo = /*#__PURE__*/K.lift(H.undo);
var undoCount = /*#__PURE__*/K.lift(H.undoCount);
var undoForget = /*#__PURE__*/K.lift(H.undoForget);

exports.viewIndex = H.viewIndex;
exports.viewPresent = H.viewPresent;
exports.viewRedoCount = H.viewRedoCount;
exports.viewUndoCount = H.viewUndoCount;
exports.count = count;
exports.index = index;
exports.init = init;
exports.present = present;
exports.redo = redo;
exports.redoCount = redoCount;
exports.redoForget = redoForget;
exports.setIndex = setIndex;
exports.setPresent = setPresent;
exports.undo = undo;
exports.undoCount = undoCount;
exports.undoForget = undoForget;
