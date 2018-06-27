(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('partial.lenses.history'), require('karet.lift')) :
	typeof define === 'function' && define.amd ? define(['exports', 'partial.lenses.history', 'karet.lift'], factory) :
	(factory((global.Kefir = global.Kefir || {}, global.Kefir.partial = global.Kefir.partial || {}, global.Kefir.partial.lenses = global.Kefir.partial.lenses || {}, global.Kefir.partial.lenses.history = {}),global.partial.lenses.history,global.karet.lift));
}(this, (function (exports,H,K) { 'use strict';

	// THIS FILE IS GENERATED

	var count = /*#__PURE__*/K.lift(H.count);
	var indexMax = /*#__PURE__*/K.lift(H.indexMax);
	var init = /*#__PURE__*/K.lift(H.init);
	var redoForget = /*#__PURE__*/K.lift(H.redoForget);
	var undoForget = /*#__PURE__*/K.lift(H.undoForget);

	exports.index = H.index;
	exports.present = H.present;
	exports.redoIndex = H.redoIndex;
	exports.undoIndex = H.undoIndex;
	exports.count = count;
	exports.indexMax = indexMax;
	exports.init = init;
	exports.redoForget = redoForget;
	exports.undoForget = undoForget;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
